const APP_CONFIG = {
    API_URL: "https://script.google.com/macros/s/AKfycbxpQow0IJ8OYY2tTqvJK-5zcmmS2G4a1f_atwngD0O_c0skmzIeiUu-V_93A-KtRlH3BA/exec", 
    COURSE_NAME: "26KV16" 
};

// Dữ liệu mẫu dùng chung cho Tooltip từng bước
const STEP_REFS = [
    "<b>TH1 (Mẹ & Bé):</b> Chào chị Nga! Cửa hàng chị nhiều hàng phong phú quá, trộm vía khách ra vào liên tục... Ghi sổ chi tiết vầy chắc mất thời gian lúc đông khách chị nhỉ. Em Trang bên KiotViet...\n<hr class='my-1 border-slate-300'><b>TH2 (Tạp Hóa):</b> Dạ con chào cô Mai! Dạo này cô khỏe không, khách mua nờm nượp cô nhỉ. Con thấy mình ghi sổ cẩn thận quá nhưng hơi rắc rối. Con Đan bên KiotViet...",
    "<b>TH1 (Mẹ & Bé):</b> Trước đây chị đã tạo tài khoản hay có bạn nào bên em hỗ trợ chưa ạ? Chị biết tới bên em qua đâu?\n<hr class='my-1 border-slate-300'><b>TH2 (Tạp Hóa):</b> Cô từng được chuyên viên nào bên con hỗ trợ chưa ạ? Cô biết tới KiotViet qua đâu?",
    "<b>TH1 (Mẹ & Bé):</b> Cửa hàng mở lâu chưa chị? Có thuê ai phụ không? Chị theo dõi tồn kho bằng cách nào? Mong muốn của chị nếu có công cụ hỗ trợ là gì?\n<hr class='my-1 border-slate-300'><b>TH2 (Tạp Hóa):</b> Cửa hàng mình bán nợ nhiều không cô? Kiểm kho kiểu gì ạ? Tốn thời gian nhất khâu nào ạ? Cô muốn phần mềm giúp mình việc gì nhất?",
    "<b>TH1 (Mẹ & Bé):</b> Em xác nhận lại nhu cầu của chị là... Với yêu cầu đó phần mềm bên em đáp ứng rất tốt, có tính năng X giúp chị giải quyết...\n<hr class='my-1 border-slate-300'><b>TH2 (Tạp Hóa):</b> Theo cô chia sẻ thì ghi tay rà soát cuối ngày mệt... KiotViet có tính năng tính tiền lời ngay lúc bán, thao tác đơn giản...",
    "<b>TH1 (Mẹ & Bé):</b> Chị dành vài phút em thao tác demo nhé. Với 3 nhân viên, chị dùng gói Chuyên nghiệp 310k/tháng. Đăng ký 2 năm tặng voucher giảm 500k, tính ra có 280k/tháng.\n<hr class='my-1 border-slate-300'><b>TH2 (Tạp Hóa):</b> Giờ con bán thử 1 đơn nha... Cửa hàng có 2 nhân viên dùng gói Chuyên nghiệp. Đang tặng bộ máy in và quét 2tr990. Mua 2 năm liên kết bank chỉ còn 247k/tháng."
];

const CODELAB_DATA = [
  {
    id: "session_kynang",
    title: "Bài tập: Kịch bản Tư vấn Bán hàng",
    exercises: [
      { title: '📝 3 Tình huống Thực hành', isGroupHeader: true },
      {
        title: "Tình huống 1: Mẹ & Bé (Chị Nga)",
        hints: ["**TÌNH HUỐNG:** Chị Nga kinh doanh ngành Mẹ và Bé, bán cả trực tiếp tại cửa hàng lẫn online trên FB."],
        theory: ["BƯỚC 1: Tiếp cận", "BƯỚC 2: Xác thực", "BƯỚC 3: Khai thác thông tin", "BƯỚC 4: Tư vấn giải pháp", "BƯỚC 5: Dẫn dắt Demo & Chốt"],
        stepRefs: STEP_REFS
      },
      {
        title: "Tình huống 2: Tạp hóa (Cô Mai)",
        hints: ["**TÌNH HUỐNG:** Cô Mai bán tạp hóa dưới chân chung cư, có 2 nhân viên phụ việc bán hàng."],
        theory: ["BƯỚC 1: Tiếp cận", "BƯỚC 2: Xác thực", "BƯỚC 3: Khai thác thông tin", "BƯỚC 4: Tư vấn giải pháp", "BƯỚC 5: Dẫn dắt Demo & Chốt"],
        stepRefs: STEP_REFS
      },
      {
        title: "Tình huống 3: Thời trang Nam (Anh Hào)",
        hints: ["**TÌNH HUỐNG:** Anh Hào kinh doanh thời trang Nam Quảng Châu, bán tại cửa hàng và trên Shopee."],
        theory: ["BƯỚC 1: Tiếp cận", "BƯỚC 2: Xác thực", "BƯỚC 3: Khai thác thông tin", "BƯỚC 4: Tư vấn giải pháp", "BƯỚC 5: Dẫn dắt Demo & Chốt"],
        stepRefs: STEP_REFS
      }
    ]
  }
];
