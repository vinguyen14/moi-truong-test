// CẤU HÌNH HỆ THỐNG DÀNH CHO ADMIN
const APP_CONFIG = {
    // Dán link API của Google Apps Script vào đây (Hiện tại dùng link cũ của bạn)
    API_URL: "https://script.google.com/macros/s/AKfycbyrq0l1TijRxxN7d8btTEL1bpZB08r-25qRmeIlVOZBmpWw1GEWyknD9NdgQD28pl0FGg/exec", 
    COURSE_NAME: "KỸ NĂNG DIRECT SALES" 
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
          "**TÌNH HUỐNG:** Chị Nga kinh doanh ngành Mẹ và Bé, bán cả trực tiếp tại cửa hàng lẫn online trên Facebook.",
          "**YÊU CẦU:** Hãy áp dụng quy trình 6 bước tư vấn KiotViet để viết kịch bản thuyết phục chị Nga sử dụng phần mềm."
        ],
        theory: [
          "BƯỚC 1: Tiếp cận (Chào hỏi, Phá băng, Đặt vấn đề)",
          "BƯỚC 2: Xác thực (Tìm hiểu nguồn khách, Sale cũ hỗ trợ)",
          "BƯỚC 3: Khai thác thông tin & nhu cầu (Tình trạng, Mong muốn)",
          "BƯỚC 4: Tư vấn giải pháp (Tính năng KV giải quyết nỗi đau)",
          "BƯỚC 5: Dẫn dắt Demo & Chốt (Báo giá, Chốt Sale)"
        ],
        requirements: ["Hoàn thiện kịch bản chi tiết cho cả 5 bước tư vấn."],
        instructions: ["Hãy đóng vai bạn là nhân viên Direct Sales của KiotViet.", "Gõ trực tiếp lời thoại của bạn vào các ô trống tương ứng bên trên.", "Nếu bạn chỉ muốn nộp bài này, kéo xuống dưới cùng và nhấn 'Lưu & Nộp toàn bộ bài này'."],
        confirm: "Không yêu cầu nộp ảnh minh chứng."
      },
      {
        title: "Tình huống 2: Tạp hóa (Cô Mai)",
        hints: [
          "**TÌNH HUỐNG:** Cô Mai bán tạp hóa dưới chân chung cư, có 2 nhân viên phụ việc bán hàng.",
          "**YÊU CẦU:** Hãy áp dụng quy trình 6 bước tư vấn KiotViet để viết kịch bản thuyết phục cô Mai sử dụng phần mềm."
        ],
        theory: [
          "BƯỚC 1: Tiếp cận (Chào hỏi, Phá băng, Đặt vấn đề)",
          "BƯỚC 2: Xác thực (Tìm hiểu nguồn khách, Sale cũ hỗ trợ)",
          "BƯỚC 3: Khai thác thông tin & nhu cầu (Tình trạng, Mong muốn)",
          "BƯỚC 4: Tư vấn giải pháp (Tính năng KV giải quyết nỗi đau)",
          "BƯỚC 5: Dẫn dắt Demo & Chốt (Báo giá, Chốt Sale)"
        ],
        requirements: ["Hoàn thiện kịch bản chi tiết cho cả 5 bước tư vấn."],
        instructions: ["Hãy đóng vai bạn là nhân viên Direct Sales của KiotViet.", "Gõ trực tiếp lời thoại của bạn vào các ô trống tương ứng bên trên.", "Nếu bạn chỉ muốn nộp bài này, kéo xuống dưới cùng và nhấn 'Lưu & Nộp toàn bộ bài này'."],
        confirm: "Không yêu cầu nộp ảnh minh chứng."
      },
      {
        title: "Tình huống 3: Thời trang Nam (Anh Hào)",
        hints: [
          "**TÌNH HUỐNG:** Anh Hào kinh doanh thời trang Nam Quảng Châu, bán tại cửa hàng và trên Shopee.",
          "**YÊU CẦU:** Hãy áp dụng quy trình 6 bước tư vấn KiotViet để viết kịch bản thuyết phục anh Hào sử dụng phần mềm."
        ],
        theory: [
          "BƯỚC 1: Tiếp cận (Chào hỏi, Phá băng, Đặt vấn đề)",
          "BƯỚC 2: Xác thực (Tìm hiểu nguồn khách, Sale cũ hỗ trợ)",
          "BƯỚC 3: Khai thác thông tin & nhu cầu (Tình trạng, Mong muốn)",
          "BƯỚC 4: Tư vấn giải pháp (Tính năng KV giải quyết nỗi đau)",
          "BƯỚC 5: Dẫn dắt Demo & Chốt (Báo giá, Chốt Sale)"
        ],
        requirements: ["Hoàn thiện kịch bản chi tiết cho cả 5 bước tư vấn."],
        instructions: ["Hãy đóng vai bạn là nhân viên Direct Sales của KiotViet.", "Gõ trực tiếp lời thoại của bạn vào các ô trống tương ứng bên trên.", "Nếu bạn chỉ muốn nộp bài này, kéo xuống dưới cùng và nhấn 'Lưu & Nộp toàn bộ bài này'."],
        confirm: "Không yêu cầu nộp ảnh minh chứng."
      },
      { title: '💡 Tài liệu Tham khảo', isGroupHeader: true },
      {
        title: "Tham khảo: Kịch bản mẫu (Chị Nga)",
        hints: [
          "**BƯỚC 1: TIẾP CẬN**\n- Chào hỏi: Chào chị Nga!\n- Phá băng: Cửa hàng của chị nhiều hàng phong phú quá, em quan sát nãy giờ thấy khách ra vào liên tục trộm vía ghê ạ chị ha.\n- Đặt vấn đề: Em cũng để ý thấy mình ghi sổ rất chi tiết... Em tên Trang ạ, em cũng từng hỗ trợ set up rất nhiều mô hình tương tự... Chị dành ra vài phút tham khảo thử KiotViet nhé...",
          "**BƯỚC 2: XÁC THỰC**\n- Trước đây chị đã từng tạo tài khoản chưa ạ? Chị biết tới KiotViet qua đâu ạ?",
          "**BƯỚC 3: KHAI THÁC THÔNG TIN**\n- Tình trạng: Cửa hàng mở được bao lâu? Chị theo dõi tồn kho bằng cách nào?\n- Mong muốn: Nếu có một công cụ hỗ trợ thì chị mong muốn giải quyết việc gì nhất?",
          "**BƯỚC 4: TƯ VẤN GIẢI PHÁP**\n- Phần mềm KV có tính năng... sẽ giúp chị đáp ứng được nhu cầu... giải quyết được khó khăn...",
          "**BƯỚC 5: DEMO & CHỐT**\n- Để hình dung rõ hơn, chị dành vài phút em thao tác trực tiếp nhé.\n- Báo giá: Gói chuyên nghiệp 310k/tháng... Đăng ký 2 năm tặng voucher giảm giá 500k..."
        ],
        requirements: ["Đọc tham khảo cấu trúc kịch bản mẫu để làm tốt bài thi của mình."],
        instructions: ["Bài này chỉ dùng để tham khảo, bạn không cần điền đáp án hay nộp bài ở mục này."]
      }
    ]
  }
];
