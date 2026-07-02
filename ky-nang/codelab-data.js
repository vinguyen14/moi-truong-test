// CẤU HÌNH HỆ THỐNG DÀNH CHO ADMIN
const APP_CONFIG = {
    // Dán link API của Google Apps Script MỚI của bạn vào đây
    API_URL: "// Nếu để trống, nó sẽ tự tạo thư mục "Bài tập thực hành KỸ NĂNG" ở Drive của bạn
const ROOT_FOLDER_ID = ''; 

function getOrCreateSubFolder(parentFolder, folderName) {
  var folders = parentFolder.getFoldersByName(folderName);
  if (folders.hasNext()) return folders.next();
  return parentFolder.createFolder(folderName);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var sheetData = sheet.getDataRange().getValues();

    // LUỒNG 1: GIẢNG VIÊN NHẬN XÉT (Cột M)
    if (data.action === "update_feedback") {
      var studentName = data.studentName; var session = data.session; var exerciseTitle = data.exerciseTitle; var feedback = data.feedback;
      var updated = false;
      for (var i = sheetData.length - 1; i >= 1; i--) {
        if (sheetData[i][1] == studentName && sheetData[i][4] == session && sheetData[i][5] == exerciseTitle) {
          sheet.getRange(i + 1, 13).setValue(feedback);
          updated = true; break;
        }
      }
      if (updated) return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Không tìm thấy bài làm' })).setMimeType(ContentService.MimeType.JSON);
    }

    // LUỒNG 2: HỌC VIÊN NỘP BÀI KỊCH BẢN
    var studentName = data.studentName || 'Unknown'; var department = data.department || 'Unknown';
    var courseName = data.courseName || 'Khóa Mặc Định'; var session = data.session || 'Buổi Unknown';
    var exerciseTitle = data.exerciseTitle || 'Bài Tập';
    var textAnswers = data.textAnswers || []; 
    var images = data.images || [];
   
    // 1. TẠO CẤU TRÚC THƯ MỤC TRÊN GOOGLE DRIVE
    var root = ROOT_FOLDER_ID ? DriveApp.getFolderById(ROOT_FOLDER_ID) : DriveApp.getRootFolder();
    var level1 = getOrCreateSubFolder(root, "Bài tập thực hành KỸ NĂNG");
    var level2 = getOrCreateSubFolder(level1, courseName);
    var level3 = getOrCreateSubFolder(level2, session);
    var level4 = getOrCreateSubFolder(level3, studentName + " - " + department);
    
    var fileUrls = [];

    // 2. LƯU ẢNH (NẾU CÓ)
    if (images.length > 0) {
        for (var i = 0; i < images.length; i++) {
          var img = images[i]; var byteCharacters = Utilities.base64Decode(img.base64Data);
          var imgName = exerciseTitle.replace(/[\/\\]/g, '') + " - Ảnh " + (i + 1) + ".png";
          var imgFile = level4.createFile(Utilities.newBlob(byteCharacters, img.mimeType || 'image/png', imgName));
          imgFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          fileUrls.push(imgFile.getUrl());
        }
    }

    // 3. TẠO FILE GOOGLE DOCS KỊCH BẢN TỰ ĐỘNG
    var docName = "Kịch Bản: " + studentName + " - " + exerciseTitle;
    var doc = DocumentApp.create(docName);
    var docId = doc.getId();
    var docFile = DriveApp.getFileById(docId);
    docFile.moveTo(level4); // Di chuyển file Doc vào đúng thư mục của học viên
    docFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT); // Cấp quyền Comment cho Giảng viên

    // Ghi nội dung vào Google Docs
    var body = doc.getBody();
    body.insertParagraph(0, "KỊCH BẢN TƯ VẤN DIRECT SALES").setHeading(DocumentApp.ParagraphHeading.HEADING1);
    body.appendParagraph("Học viên: " + studentName + " | Phòng ban: " + department);
    body.appendParagraph("Tình huống: " + exerciseTitle + "\n");
    
    var stepNames = [
      "BƯỚC 1: TIẾP CẬN", 
      "BƯỚC 2: XÁC THỰC", 
      "BƯỚC 3: KHAI THÁC THÔNG TIN & NHU CÀU", 
      "BƯỚC 4: TƯ VẤN GIẢI PHÁP", 
      "BƯỚC 5: DẪN DẮT DEMO & CHỐT"
    ];

    for(var j = 0; j < 5; j++) {
      var ans = textAnswers[j] || '(Chưa nhập kịch bản)';
      body.appendParagraph(stepNames[j]).setHeading(DocumentApp.ParagraphHeading.HEADING2);
      body.appendParagraph(ans + "\n");
    }
    
    doc.saveAndClose();
    var docUrl = doc.getUrl();
    
    // Đưa link Google Docs lên đầu mảng URL để ghi vào Sheet
    fileUrls.unshift(docUrl);

    // 4. BÓC TÁCH VÀ GHI VÀO GOOGLE SHEET
    var ans1 = textAnswers[0] || ''; var ans2 = textAnswers[1] || '';
    var ans3 = textAnswers[2] || ''; var ans4 = textAnswers[3] || ''; var ans5 = textAnswers[4] || '';
    var timestamp = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");
    var linksStr = fileUrls.join("\n");
   
    sheet.appendRow([timestamp, studentName, department, courseName, session, exerciseTitle, ans1, ans2, ans3, ans4, ans5, linksStr]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Đã lưu thành công!', urls: fileUrls })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}

function doGet(e) {
  try {
    var studentName = e.parameter.studentName; var reqSession = e.parameter.session;
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var feedbackData = {};
    
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      if (row[1] == studentName) {
        var rowSession = row[4]; var exTitle = row[5];
        var feedback = row[12]; // Cột M
        if (feedback && feedback.toString().trim() !== "") {
          if (!feedbackData[rowSession]) feedbackData[rowSession] = {};
          if (!feedbackData[rowSession][exTitle]) { feedbackData[rowSession][exTitle] = feedback.toString().trim(); }
          else { if (!feedbackData[rowSession][exTitle].includes(feedback.toString().trim())) { feedbackData[rowSession][exTitle] += "\n\n-----------------\n\n" + feedback.toString().trim(); } }
        }
      }
    }
    var returnData = reqSession ? (feedbackData[reqSession] || {}) : feedbackData;
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', data: returnData, allData: feedbackData })).setMimeType(ContentService.MimeType.JSON);
  } catch(err) { return ContentService.createTextOutput(JSON.stringify({ status: 'error' })).setMimeType(ContentService.MimeType.JSON); }
}", 
    COURSE_NAME: "26KV15" 
};

// ============================================================================
// DỮ LIỆU BÀI TẬP: KHÓA KỸ NĂNG QUY TRÌNH BÁN HÀNG
// ============================================================================
const CODELAB_DATA = [
  {
    id: "session_kynang",
    title: "Bài tập: Kịch bản Tư vấn Bán hàng",
    exercises: [
      { title: '📝 3 Tình huống Thực hành', isGroupHeader: true },
      {
        title: "Tình huống 1: Mẹ & Bé (Chị Nga)",
        hints: [
          "**TÌNH HUỐNG:** Chị Nga kinh doanh ngành Mẹ và Bé, bán cả trực tiếp tại cửa hàng lẫn online trên Facebook."
        ],
        theory: [
          "BƯỚC 1: Tiếp cận (Chào hỏi, Phá băng, Đặt vấn đề)",
          "BƯỚC 2: Xác thực (Tìm hiểu nguồn khách, Sale cũ hỗ trợ)",
          "BƯỚC 3: Khai thác thông tin & nhu cầu (Tình trạng, Mong muốn)",
          "BƯỚC 4: Tư vấn giải pháp (Tính năng KV giải quyết nỗi đau)",
          "BƯỚC 5: Dẫn dắt Demo & Chốt (Báo giá, Chốt Sale)"
        ],
        requirements: ["Hoàn thiện kịch bản chi tiết cho cả 5 bước tư vấn."],
        instructions: ["Hãy đóng vai bạn là nhân viên Direct Sales của KiotViet.", "Lưu ý: Bạn phải nhấn nút 'Lưu cập nhật' ở từng bước thì mới có thể nộp bài."],
        confirm: "Không yêu cầu nộp ảnh minh chứng."
      },
      {
        title: "Tình huống 2: Tạp hóa (Cô Mai)",
        hints: [
          "**TÌNH HUỐNG:** Cô Mai bán tạp hóa dưới chân chung cư, có 2 nhân viên phụ việc bán hàng."
        ],
        theory: [
          "BƯỚC 1: Tiếp cận (Chào hỏi, Phá băng, Đặt vấn đề)",
          "BƯỚC 2: Xác thực (Tìm hiểu nguồn khách, Sale cũ hỗ trợ)",
          "BƯỚC 3: Khai thác thông tin & nhu cầu (Tình trạng, Mong muốn)",
          "BƯỚC 4: Tư vấn giải pháp (Tính năng KV giải quyết nỗi đau)",
          "BƯỚC 5: Dẫn dắt Demo & Chốt (Báo giá, Chốt Sale)"
        ],
        requirements: ["Hoàn thiện kịch bản chi tiết cho cả 5 bước tư vấn."],
        instructions: ["Hãy đóng vai bạn là nhân viên Direct Sales của KiotViet.", "Lưu ý: Bạn phải nhấn nút 'Lưu cập nhật' ở từng bước thì mới có thể nộp bài."],
        confirm: "Không yêu cầu nộp ảnh minh chứng."
      },
      {
        title: "Tình huống 3: Thời trang Nam (Anh Hào)",
        hints: [
          "**TÌNH HUỐNG:** Anh Hào kinh doanh thời trang Nam Quảng Châu, bán tại cửa hàng và trên Shopee."
        ],
        theory: [
          "BƯỚC 1: Tiếp cận (Chào hỏi, Phá băng, Đặt vấn đề)",
          "BƯỚC 2: Xác thực (Tìm hiểu nguồn khách, Sale cũ hỗ trợ)",
          "BƯỚC 3: Khai thác thông tin & nhu cầu (Tình trạng, Mong muốn)",
          "BƯỚC 4: Tư vấn giải pháp (Tính năng KV giải quyết nỗi đau)",
          "BƯỚC 5: Dẫn dắt Demo & Chốt (Báo giá, Chốt Sale)"
        ],
        requirements: ["Hoàn thiện kịch bản chi tiết cho cả 5 bước tư vấn."],
        instructions: ["Hãy đóng vai bạn là nhân viên Direct Sales của KiotViet.", "Lưu ý: Bạn phải nhấn nút 'Lưu cập nhật' ở từng bước thì mới có thể nộp bài."],
        confirm: "Không yêu cầu nộp ảnh minh chứng."
      },
      { title: '💡 Tài liệu Tham khảo', isGroupHeader: true },
      {
        title: "Tham khảo: Kịch bản mẫu (Chị Nga Mẹ & Bé)",
        hints: [
          "**BƯỚC 1: TIẾP CẬN**\n- Chào hỏi: Chào chị Nga!\n- Phá băng: Cửa hàng của chị nhiều hàng phong phú quá, em quan sát nãy giờ thấy khách ra vào liên tục trộm vía ghê ạ chị ha.\n- Đặt vấn đề: Em cũng để ý thấy mình ghi sổ rất chi tiết để theo dõi hàng. Chị cẩn thận chỉn chu thật đấy ạ! Nhưng ghi sổ này chắc cũng hơi mất thời gian phải không chị, nhất là lúc đông khách tính tiền.\nEm tên Trang ạ, em cũng từng hỗ trợ set up rất nhiều mô hình cửa hàng mẹ & bé tương tự cửa hàng mình. Đa phần các chị đó đều gặp khó khăn trong việc làm sao kiểm soát được hàng hóa... Cũng không mất gì cả, chị dành ra vài phút tham khảo thử cách thức quản lý này của KiotViet bên em xem sao nhé... Để tư vấn tốt nhất cho chị, em xin phép hỏi một vài thông tin về cửa hàng mình chị nhé!",
          "**BƯỚC 2: XÁC THỰC**\n- Trước đây, chị đã từng tạo tài khoản và đã được bạn chuyên viên tư vấn nào bên em hỗ trợ chưa ạ?\n- Chị biết tới KiotViet qua bạn bè, quảng cáo giới thiệu hay hôm nay gặp em thì chị mới nghe về KiotViet ạ?",
          "**BƯỚC 3: KHAI THÁC THÔNG TIN**\n- Tình trạng: Cửa hàng nhà mình mở được bao lâu rồi chị? Chị có thuê ai phụ bán chưa? Không biết trước giờ chị theo dõi tồn kho hàng hóa và giá bán cho các mã hàng bằng cách nào ạ? Khi quản lý kinh doanh, chị thấy thường mất thời gian hay khó khăn nhất ở phần nào ạ?...\n- Mong muốn: Nếu có một công cụ để hỗ trợ giúp anh chị quản lý cửa hàng tiện lợi hơn thì chị mong muốn sẽ được hỗ trợ những gì ạ?",
          "**BƯỚC 4: TƯ VẤN GIẢI PHÁP**\n- Như anh/chị vừa chia sẻ, em xác nhận lại nhu cầu của mình có 1 là... 2 là...\n- Với những yêu cầu mà chị mong đợi thì hiện phần mềm quản lý bán hàng KiotViet đều có thể đáp ứng được rất tốt ạ.\n- Phần mềm KV có tính năng... (mô tả ngắn gọn) sẽ giúp chị đáp ứng được nhu cầu... giải quyết được khó khăn...",
          "**BƯỚC 5: DẪN DẮT DEMO & CHỐT**\n- Để hình dung rõ hơn về lợi ích, chị dành ra vài phút em thao tác trực tiếp cho chị xem nhé.\n- Lựa chọn gói phù hợp: Tuy nhiên với quy mô cửa hàng chị có 3 nhân viên và có ship hàng online thì em thấy chị chỉ cần đăng ký gói chuyên nghiệp 310k/tháng là đáp ứng đầy đủ nhu cầu rồi.\n- Đưa ưu đãi & Chốt: Với gói này, khi chị đăng ký 2 năm và kích hoạt trước ngày 28/9, em xin ưu đãi tặng chị 1 voucher giảm giá 500k, còn 6,9 triệu cho 2 năm sử dụng. Tính ra trung bình chị đầu tư chỉ 280k/tháng thôi chị ạ..."
        ],
        theory: [], requirements: [], instructions: []
      },
      {
        title: "Tham khảo: Kịch bản mẫu (Cô Mai Tạp Hóa)",
        hints: [
          "**BƯỚC 1: TIẾP CẬN**\n- Chào hỏi: Dạ con chào cô Mai ạ.\n- Phá băng: Dạo này cô khỏe không, cửa hàng của mình kinh doanh trộm vía khách mua hàng nờm nượp cô nhỉ.\n- Đặt vấn đề: Con có để ý thấy bên mình ghi sổ khá chi tiết. Nhưng ghi tay rắc rối cô nhỉ... Con tên Đan ạ, con đã hỗ trợ rất nhiều cửa hàng tạp hóa tương tự. Đa phần đều gặp khó khăn kiểm soát tồn kho, bán nợ, cuối ngày tính lời... Cô dành vài phút để con tư vấn phần mềm xem sao ạ.",
          "**BƯỚC 2: XÁC THỰC**\n- Trước đây, cô đã từng tạo tài khoản và được chuyên viên nào hỗ trợ chưa ạ?\n- Cô biết đến KiotViet qua bạn bè hay quảng cáo nào ạ?",
          "**BƯỚC 3: KHAI THÁC THÔNG TIN**\n- Tình trạng: Cửa hàng mở được bao lâu rồi cô? Bình thường có mình cô hay có ai phụ bán? Cô kiểm kho bằng cách nào? Tạp hóa mình có cho mua nợ không cô? Gặp khó khăn gì khi theo dõi nợ không? Cả ngày bán hàng tốn thời gian nhất khâu nào ạ?\n- Mong muốn: Nếu có phần mềm hỗ trợ thì cô muốn phần mềm làm được việc gì thay cho mình ạ?",
          "**BƯỚC 4: TƯ VẤN GIẢI PHÁP**\n- Như cô chia sẻ, con xác nhận lại hiện tại cô vẫn ghi sổ tay, cuối ngày rà soát thủ công... lo lắng lớn tuổi không biết công nghệ...\n- Với yêu cầu đó phần mềm KiotViet đáp ứng rất tốt. Có tính năng theo dõi xuất nhập tồn. Thao tác bán hàng đơn giản, tính tiền lời ra luôn nên rất nhanh và chính xác.",
          "**BƯỚC 5: DẪN DẮT DEMO & CHỐT**\n- Giờ con bán thử một đơn cho cô xem nha, chỉ cần chọn món hàng, bấm thanh toán là xong, hóa đơn in ra liền.\n- Chốt: Hiện tại cửa hàng cô có 2 nhân viên, nên đăng ký gói chuyên nghiệp. KOV đang có chương trình tặng nguyên bộ máy in và máy quét trị giá 2tr990. Chi phí gói là 7tr920, liên kết Sacombank giảm thêm 2tr. Chỉ còn 5tr920 cho 2 năm, trung bình chỉ 247k/tháng thôi cô ạ!"
        ],
        theory: [], requirements: [], instructions: []
      }
    ]
  }
];
