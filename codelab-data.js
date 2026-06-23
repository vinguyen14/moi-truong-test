// File: codelab-data.js (Phiên bản đầy đủ, hoàn chỉnh nhất)

// CẤU HÌNH HỆ THỐNG DÀNH CHO ADMIN (SỬA TẠI ĐÂY)
const APP_CONFIG = {
    // 1. Dán link Google Apps Script của bạn vào trong cặp ngoặc kép dưới đây
    API_URL: "https://script.google.com/macros/s/AKfycbw052v1ip6sM-JUyZ5AHSjI5m2jJiEoDd1yma_xBqm5xQWMXaP6e_eamhdZaoxbn2E/exec", 
    
    // 2. Tên khóa học (Sẽ dùng để tạo Folder trên Google Drive)
    COURSE_NAME: "26KV15" 
};

// --- DỮ LIỆU NỘI DUNG TOÀN BỘ KHÓA HỌC ---
const CODELAB_DATA = [
  {
    id: "session_1",
    title: "Buổi 1: Tổng quan các bước làm quen phần mềm",
    exercises: [
      {
        title: "Bài tập 1: Đăng ký gian hàng dùng thử",
        theory: [
          "1. Gian hàng dùng thử miễn phí trên hệ thống KiotViet có thời hạn sử dụng tối đa là bao nhiêu ngày?",
          "2. Tại sao học viên BẮT BUỘC phải nhấn tổ hợp phím Ctrl+1 và nhập mã giới thiệu \"3670\" ngay sau khi đăng nhập thành công vào gian hàng vừa đăng ký?"
        ],
        requirements: [
          "1. Đăng ký mới một gian hàng dùng thử trên website KiotViet với ngành hàng Bán lẻ.",
          "2. Thực hiện thao tác nhập mã giới thiệu đào tạo để tránh việc hệ thống ghi nhận là khách hàng tiềm năng và chuyển cho Telesales."
        ],
        instructions: [
          "1. Mở trình duyệt web, truy cập vào trang chủ: https://www.kiotviet.vn/ và nhấn nút Dùng thử miễn phí.",
          "2. Điền đầy đủ thông tin cá nhân (Họ tên, Điện thoại, Khu vực...), nhấn tổ hợp phím Ctrl + 1 trên bàn phím, một hộp thoại sẽ hiện ra, nhập mã giới thiệu 3670 của phòng Đào tạo sau đó nhập Mã xác thực. Nhấn Tiếp tục.",
          "3. Tại phần thông tin cửa hàng, chọn chính xác ngành hàng là Bán lẻ.",
          "4. Đặt Tên cửa hàng (ví dụ: Cửa hàng Tạp hóa + Tên của bạn) và thiết lập Mật khẩu. Nhấn Tạo cửa hàng.",
          "5. Sau khi thành công, nhấn Bắt đầu quản lý để đăng nhập vào giao diện phần mềm.",
          "6. Điền 1 vài thông tin cửa hàng về Thời gian kinh doanh và chọn Phiên bản dùng thử có dữ liệu mẫu để trải nghiệm hệ thống 1 cách dễ dàng hơn."
        ],
        confirm: "Chụp ảnh màn hình Tổng quan của gian hàng vừa tạo thành công."
      },
      {
        title: "Bài tập 2: Thêm mới hàng hóa",
        theory: [
          "1. Tại sao cần phải thiết lập các \"Thuộc tính\" (như trọng lượng, màu sắc, kích cỡ) khi thêm mới hàng hóa thay vì tạo mỗi loại thành một mã sản phẩm độc lập?",
          "2. Nếu bạn bỏ trống ô \"Giá vốn\" khi thêm mới hàng hóa, điều này sẽ ảnh hưởng như thế nào đến báo cáo lợi nhuận sau này?",
          "3. Tính năng \"Đơn vị tính\" (ví dụ: Hộp, Lốc, Thùng) giúp ích gì cho thu ngân trong quá trình bán hàng?"
        ],
        requirements: [
          "1. Thêm mới một sản phẩm thực tế của cửa hàng với nhiều phân loại trọng lượng khác nhau."
        ],
        instructions: [
          "1. Tại màn hình Tổng quan, vào menu Hàng hóa -> chọn Danh sách hàng hóa.",
          "2. Tại góc trên bên phải, nhấn nút + Tạo mới -> chọn Hàng hóa.",
          "3. Thêm sản phẩm chính: Nhập Tên hàng là \"Nước giặt OMO Matic\".",
          "4. Nhập Nhóm hàng là \"Hóa mỹ phẩm\" (Nhấn dấu + để thêm mới nếu chưa có).",
          "5. Nhập Giá vốn: 120,000, Giá bán: 180,000, Tồn kho: 0.",
          "6. Tại phần Đơn vị tính: Nhập đơn vị cơ bản là Túi.",
          "7. Tại phần Thuộc tính: Nhấn Tạo thuộc tính, nhập tên thuộc tính là \"Trọng lượng\". Nhập các giá trị thuộc tính: \"Túi 2kg\" (nhấn Enter), \"Túi 3kg\" (nhấn Enter). Nhấn Lưu."
        ],
        confirm: "Chụp ảnh màn hình Danh sách hàng hóa hiển thị rõ các pHàng hóa cùng loại của Nước giặt OMO Matic vừa tạo."
      },
      {
        title: "Bài tập 3: Nhập hàng và ghi nhận công nợ",
        theory: [
          "1. Điều gì sẽ xảy ra với số lượng tồn kho của sản phẩm trên hệ thống nếu bạn chưa nhấn \"Hoàn thành\" trong phiếu nhập hàng?",
          "2. Khi nhập hàng từ một nhà cung cấp mới mà chưa có thông tin trên hệ thống, bạn cần thao tác như thế nào để vừa ghi nhận phiếu nhập, vừa lưu được thông tin nhà cung cấp đó?",
          "3. Nếu nhập hàng nhưng chưa thanh toán ngay, số tiền này sẽ được KiotViet quản lý ở mục nào?"
        ],
        requirements: [
          "1. Tạo phiếu nhập hàng cho mặt hàng Nước giặt OMO Matic vừa tạo để ghi nhận tồn kho.",
          "2. Treo lại công nợ, chưa thanh toán tiền ngay cho nhà cung cấp."
        ],
        instructions: [
          "1. Vào menu Mua hàng -> chọn Nhập hàng. Nhấn nút + Nhập hàng.",
          "2. Trong ô tìm kiếm sản phẩm, gõ \"Nước giặt OMO Matic Túi 2kg\" và chọn sản phẩm.",
          "3. Nhập Số lượng là 20. Xác nhận Đơn giá nhập là 120,000.",
          "4. Tại ô tìm kiếm Nhà cung cấp (bên phải), nhấn biểu tượng dấu (+).",
          "5. Điền tên \"Nhà phân phối Unilever\" + “Số điện thoại” / “Email” (\"0979000000\" / \"unilever@gmail.com\") và nhấn Lưu.",
          "6. Tại ô Tiền trả nhà cung cấp, giữ nguyên số 0 (để ghi nhận công nợ toàn bộ phiếu nhập).",
          "7. Nhấn Hoàn thành."
        ],
        confirm: "Chụp ảnh màn hình chi tiết phiếu nhập hàng vừa tạo thành công, hiển thị rõ phần công nợ."
      },
      {
        title: "Bài tập 4: Bán hàng và thanh toán kết hợp",
        theory: [
          "1. Việc cho phép áp dụng đồng thời nhiều phương thức thanh toán (Tiền mặt, Chuyển khoản, Thẻ...) trên một hóa đơn mang lại lợi ích gì cho cửa hàng và khách hàng?",
          "2. Khi hóa đơn bán hàng được hoàn tất, hệ thống KiotViet sẽ tự động thay đổi những dữ liệu nào (tồn kho, doanh thu...)?"
        ],
        requirements: [
          "1. Tạo hóa đơn bán hàng có mặt hàng Nước giặt OMO Matic - Túi 2kg số lượng 1 túi cho khách hàng mới.",
          "2. Khách hàng thanh toán kết hợp 2 hình thức: Tiền mặt và Chuyển khoản."
        ],
        instructions: [
          "1. Truy cập vào màn hình Bán hàng.",
          "2. Tại ô tìm kiếm, gõ và chọn \"Nước giặt OMO Matic - Túi 2kg\". Số lượng để là 1.",
          "3. Tại ô tìm kiếm khách hàng, nhấn dấu (+) để thêm khách mới, nhập tên \"Chị Lan\" và nhấn Lưu.",
          "4. Tại phần Khách thanh toán, nhấn vào biểu tượng ba chấm (Thanh toán kết hợp).",
          "5. Tại khu vực Khách cần trả, xóa phương thức mặc định.",
          "6. Tại ô số tiền, nhập 100,000 và chọn phương thức Tiền mặt.",
          "7. Số tiền còn lại 80,000, chọn phương thức Chuyển khoản. Nhấn Xong.",
          "8. Nhấn nút Thanh toán để hoàn tất giao dịch."
        ],
        confirm: "Chụp ảnh màn hình hiển thị rõ 2 phương thức thanh toán của Chị Lan."
      },
      {
        title: "Bài tập 5: Trả hàng và thu phí dịch vụ",
        theory: [
          "1. Khi xử lý trả hàng có thu phí dịch vụ, số tiền phí này sẽ được KiotViet ghi nhận vào đâu trong hệ thống báo cáo (VD: Doanh thu, Chi phí, Khác...)? Tại sao?",
          "2. Việc liên kết giao dịch trả hàng với hóa đơn gốc mang lại lợi ích gì trong việc quản lý?"
        ],
        requirements: [
          "1. Xử lý tình huống khách hàng (Chị Lan) mang trả lại sản phẩm vừa mua.",
          "2. Áp dụng chính sách thu phí trả hàng là 10,000 của cửa hàng."
        ],
        instructions: [
          "1. Từ màn hình Bán hàng, nhấn vào biểu tượng mũi tên quay đầu để vào mục Trả hàng.",
          "2. Sử dụng ô tìm kiếm, gõ tên \"Chị Lan\" để tìm lại hóa đơn gốc vừa bán và nhấn nút Chọn.",
          "3. Ở giao diện Phiếu trả hàng, chọn sản phẩm trả, nhập số lượng trả là 1.",
          "4. Tại ô Phí trả hàng, nhập số tiền phí là 10,000.",
          "5. Chọn phương thức hoàn tiền (Tiền mặt) và nhấn Trả hàng."
        ],
        confirm: "Chụp ảnh màn hình phiếu trả hàng thành công, hiển thị rõ khoản phí trả hàng 10,000."
      },
      {
        title: "Bài tập 6: Quản lý công nợ nhà cung cấp",
        theory: [
          "1. Thao tác \"Thanh toán phiếu chi\" khác với thao tác \"Điều chỉnh công nợ\" ở điểm nào?",
          "2. Tại sao lại cần chức năng \"Khai báo công nợ ban đầu\" khi bắt đầu sử dụng KiotViet?"
        ],
        requirements: [
          "1. Thanh toán khoản nợ của Nhà phân phối Unilever (Phương thức: Tiền mặt).",
          "2. Tạo một khoản công nợ tồn đầu kỳ cho Nhà cung cấp mới."
        ],
        instructions: [
          "1. Vào menu Mua hàng -> chọn Nhà cung cấp.",
          "2. Tìm và nhấn vào tên \"Nhà phân phối Unilever\".",
          "3. Chuyển sang tab Nợ cần trả NCC. Nhấn nút Thanh toán.",
          "4. Tại cửa sổ Phiếu chi, nhập số tiền trả là 2,400,000, chọn Tiền mặt. Nhấn Tạo phiếu chi.",
          "5. Quay lại màn hình Nhà cung cấp, tạo NCC mới tên \"Nhà Phân Phối A\".",
          "6. Nhấn vào tên “Nhà Phân Phối A”, chuyển sang tab Nợ cần trả NCC, nhấn nút Điều chỉnh.",
          "7. Nhập số tiền 5,000,000 vào ô Giá trị nợ điều chỉnh.",
          "8. Ghi Mô tả là \"Công nợ tồn đầu kỳ\". Nhấn Chỉnh sửa."
        ],
        confirm: "Chụp ảnh tab Nợ cần trả của Unilever và Nhà Phân Phối A."
      },
      {
        title: "Bài tập 7: Theo dõi báo cáo",
        theory: [
          "1. Để xem được Lợi nhuận gộp của cửa hàng trong ngày, bạn cần vào báo cáo nào?",
          "2. Để xem được Tổng giá vốn của toàn bộ sản phẩm (Giá trị kho), bạn cần vào báo cáo nào?"
        ],
        requirements: [
          "1. Xem báo cáo cuối ngày để kiểm tra lại các giao dịch đã thực hành.",
          "2. Xem báo cáo hàng hóa để kiểm tra lượng tồn kho."
        ],
        instructions: [
          "1. Vào menu Báo cáo -> chọn Cuối ngày. Chọn Hiển thị ngang.",
          "2. Kiểm tra các số liệu: Tổng doanh thu, Số đơn, Phương thức thanh toán, Khoản thu/chi.",
          "3. Vào menu Báo cáo -> chọn Hàng hóa.",
          "4. Chọn Mối quan tâm là Xuất nhập tồn để xem số lượng tồn hiện tại của \"Nước giặt OMO Matic - Túi 2kg\"."
        ],
        confirm: "Chụp ảnh màn hình Báo cáo cuối ngày và Báo cáo hàng hóa - Xuất nhập tồn."
      },
      {
        title: "Bài tập 8: Kinh nghiệm tư vấn (Demo)",
        theory: [
          "1. Lợi ích của việc dùng 1 mã sản phẩm xuyên suốt khi demo cho khách hàng?",
          "2. Thao tác nào cần tập trung nhất để thuyết phục khách hàng rằng KiotViet dễ sử dụng?",
          "3. Cần chỉ cho khách hàng xem tab nào để chứng minh tồn kho được cập nhật tự động?"
        ],
        requirements: ["1. Tra cứu lại toàn bộ lịch sử xuất - nhập - tồn của mã hàng hóa đã dùng."],
        instructions: [
          "1. Vào menu Hàng hóa -> chọn Danh sách hàng hóa.",
          "2. Tìm và click vào mã sản phẩm \"Nước giặt OMO Matic - Túi 2kg\".",
          "3. Chuyển sang tab Thẻ kho.",
          "4. Quan sát chi tiết từng dòng lịch sử (Khởi tạo, Nhập, Bán, Trả) và cột Tồn cuối."
        ],
        confirm: "Chụp ảnh màn hình tab Thẻ kho của sản phẩm, hiển thị rõ sự biến động tồn kho."
      }
    ]
  },
  {
    id: "session_2",
    title: "Buổi 2: Các câu hỏi thường gặp",
    exercises: [
      {
        title: "Bài tập 1: Thêm mới sản phẩm ngay trên màn hình bán hàng", requirements: ["1. Khách muốn mua \"Nước ngọt Fanta\" nhưng chưa có trên hệ thống. Cần thêm mới ngay tại màn hình thu ngân."], instructions: ["1. Tại màn hình bán hàng, gõ \"Nước ngọt Fanta\" vào ô tìm kiếm.", "2. Nhấn vào nút + Thêm mới hàng hóa.", "3. Khai báo thông tin: Nhóm hàng \"Nước giải khát\", Giá vốn 12.000, Giá bán 15.000, Tồn kho 100, ĐVT \"Chai\". Nhấn Lưu."], confirm: "Chụp ảnh màn hình bán hàng có chứa sản phẩm \"Nước ngọt Fanta\" trong giỏ hàng."
      },
      {
        title: "Bài tập 2: Tra cứu thông tin và vị trí sản phẩm", requirements: ["1. Tra cứu nhanh vị trí trưng bày của \"Nước ngọt Fanta\" để hướng dẫn khách."], instructions: ["1. Tại ô tìm kiếm, gõ \"Fanta\".", "2. Nhấn trực tiếp vào hình ảnh của sản phẩm.", "3. Kiểm tra thông tin: Giá bán, Tồn kho và Vị trí trưng bày.", "4. Nhấn Xong để đóng."], confirm: "Chụp ảnh màn hình cửa sổ popup chi tiết thông tin sản phẩm Fanta."
      },
      {
        title: "Bài tập 3: Tìm kiếm theo nhóm hàng và hiển thị tồn kho", requirements: ["1. Lọc tất cả sản phẩm thuộc nhóm \"Nước giải khát\" và bật hiển thị số lượng tồn kho."], instructions: ["1. Nhấn vào biểu tượng Bộ lọc theo nhóm hàng.", "2. Chọn nhóm hàng Nước giải khát và nhấn Xong.", "3. Nhấn vào Menu -> Tùy chọn hiển thị.", "4. Chọn tab Khác, gạt bật tính năng Tồn kho.", "5. Quan sát số lượng tồn kho hiển thị dưới mỗi sản phẩm."], confirm: "Chụp ảnh màn hình danh sách sản phẩm đã lọc theo nhóm, có hiển thị rõ số tồn kho."
      },
      {
        title: "Bài tập 4: Lập phiếu thu công nợ khách hàng", requirements: ["1. Khách hàng \"Thanh Vân\" đến thanh toán khoản nợ cũ 150.000đ bằng tiền mặt, không mua hàng mới."], instructions: ["1. Tạo một đơn nợ cho khách hàng Thanh Vân (bán Fanta 10 chai, giá 150.000, Khách thanh toán: 0).", "2. Tại màn hình bán hàng, nhấn Menu -> Lập phiếu thu.", "3. Tìm và chọn khách hàng \"Thanh Vân\".", "4. Nhập số tiền thu là 150.000.", "5. Chọn phương thức thanh toán là Tiền mặt.", "6. Nhấn nút Tạo phiếu thu."], confirm: "Chụp ảnh màn hình thông báo Đã tạo phiếu thu thành công cho Thanh Vân."
      },
      {
        title: "Bài tập 5: Thiết lập giới hạn thời gian trả hàng", requirements: ["1. Áp dụng chính sách: Chỉ cho phép trả hàng trong vòng 3 ngày kể từ ngày mua.", "2. Chỉ hiển thị cảnh báo, không chặn hoàn toàn."], instructions: ["1. Vào Thiết lập -> Xem tất cả thiết lập.", "2. Chuyển sang tab Đơn hàng, tìm và bật tính năng Giới hạn thời gian trả hàng.", "3. Điền số \"3\" vào ô ngày và nhấn Lưu.", "4. Tích chọn tùy chọn Hiển thị Cảnh báo khi trả hàng."], confirm: "Chụp ảnh màn hình phần thiết lập đã lưu thành công."
      },
      {
        title: "Bài tập 6: Trả hàng nhanh không cần hóa đơn", requirements: ["1. Khách \"Thanh Vân\" mang 10 chai \"Nước ngọt Fanta\" đến trả lại lấy tiền mặt, không có hóa đơn gốc."], instructions: ["1. Tại màn hình Bán hàng, nhấn nút Trả hàng -> chọn Trả nhanh.", "2. Tìm và chọn \"Nước ngọt Fanta\".", "3. Điều chỉnh số lượng trả lại thành 10.", "4. Tại ô khách hàng, tìm và chọn \"Thanh Vân\". Phương thức hoàn tiền chọn Tiền mặt.", "5. Nhấn nút Trả hàng."], confirm: "Chụp ảnh màn hình phiếu trả hàng nhanh đã điền đủ thông tin."
      },
      {
        title: "Bài tập 7: Thiết lập bán hàng Offline khi mất mạng", requirements: ["1. Lưu đường dẫn bán hàng Offline vào Bookmark.", "2. Giả lập mất mạng và thực hiện 1 giao dịch bán thử."], instructions: ["1. Tại màn hình bán hàng, nhấn vào biểu tượng Ngôi sao trên thanh địa chỉ để Bookmark.", "2. Đặt tên \"KiotViet Bán Hàng\" và nhấn Xong.", "3. Tắt kết nối Wifi/Ethernet và nhấn F5.", "4. Màn hình hiện dải màu hồng Offline. Thực hiện bán \"Nước ngọt Fanta\".", "5. Quan sát biểu tượng đồng bộ hóa đơn lưu tạm (HDO). Bật lại mạng để hệ thống tự đồng bộ."], confirm: "Chụp ảnh màn hình bán hàng lúc đang tắt mạng, có dải thông báo Offline."
      },
      {
        title: "Bài tập 8: Thêm mới hàng hóa dịch vụ", requirements: ["1. Cửa hàng triển khai thêm dịch vụ \"Giặt là áo sơ mi\", giá 30.000đ/chiếc, không quản lý tồn kho."], instructions: ["1. Vào Hàng hóa -> Danh sách hàng hóa.", "2. Bấm + Tạo mới -> chọn Dịch vụ.", "3. Nhập Tên \"Dịch vụ giặt là áo sơ mi\", Nhóm hàng \"Giặt là\", Giá bán 30.000, ĐVT \"Chiếc\". Bấm Lưu."], confirm: "Chụp ảnh màn hình Danh sách hàng hóa, hiển thị mã dịch vụ vừa tạo."
      },
      {
        title: "Bài tập 9: Thiết lập bảng giá theo công thức", requirements: ["1. Tạo giá sỉ cho nhóm \"Thời trang trẻ em\", thấp hơn 10% so với giá lẻ.", "2. Giá tự động cập nhật và làm tròn đến hàng nghìn."], instructions: ["1. Vào Hàng hóa -> Thiết lập giá.", "2. Bấm + Bảng giá.", "3. Nhập Tên \"Bảng giá sỉ thời trang trẻ em\".", "4. Tại mục Công thức giá: Chọn Bảng Giá chung, dấu -, nhập 10, chọn %.", "5. Tích chọn Tự động cập nhật, chọn làm tròn đến nghìn đồng. Bấm Lưu.", "6. Bấm Thêm theo nhóm hàng, chọn nhóm \"Thời trang trẻ em\"."], confirm: "Chụp ảnh màn hình Bảng giá sỉ đã áp dụng cho nhóm Thời trang trẻ em."
      },
      {
        title: "Bài tập 10: Chỉnh sửa giá sỉ riêng lẻ", requirements: ["1. Riêng mặt hàng \"Khẩu trang trẻ em\" chỉ giảm 5% giá sỉ, các sản phẩm khác trong nhóm vẫn giảm 10%."], instructions: ["1. Tại màn hình Thiết lập giá, bấm Sửa bảng giá.", "2. Bỏ chọn ô Tự động thay đổi theo bảng giá chung. Bấm Lưu.", "3. Tìm đến dòng \"Khẩu trang trẻ em\".", "4. Bấm trực tiếp vào con số ở cột Giá mới.", "5. Sửa lại thành - 5% và nhấn Enter."], confirm: "Chụp ảnh màn hình bảng giá, trong đó \"Khẩu trang trẻ em\" có mức giá sỉ khác biệt."
      },
      {
        title: "Bài tập 11: Tạo phiếu kiểm kho", requirements: ["1. Kho thực tế có 105 \"Khẩu trang trẻ em\", hệ thống ghi nhận sai. Cần tạo phiếu kiểm kho để cập nhật lại."], instructions: ["1. Vào Hàng hóa -> Kiểm kho.", "2. Bấm + Kiểm kho.", "3. Tìm và chọn \"Khẩu trang trẻ em\" vào phiếu.", "4. Nhập số 105 vào cột Thực tế.", "5. Bấm nút Hoàn thành."], confirm: "Chụp ảnh màn hình phiếu kiểm kho đã hoàn thành, hiển thị số lượng thực tế 105."
      },
      {
        title: "Bài tập 12: Thêm mới sản phẩm trên phiếu nhập hàng", requirements: ["1. Nhập 48 gói \"Mì tôm thanh long\" từ NCC \"Thái Ninh\", đây là hàng mới.", "2. Tạo nhanh mã sản phẩm này ngay trên giao diện nhập hàng."], instructions: ["1. Vào Mua hàng -> Nhập hàng -> + Nhập hàng.", "2. Nhấn vào biểu tượng dấu cộng (+) Thêm hàng hóa mới.", "3. Khai báo: Tên \"Mì tôm thanh long\", Nhóm hàng \"Thực phẩm ăn liền\", Giá bán 12.000, ĐVT \"Gói\". Lưu.", "4. Điền Số lượng 48, Đơn giá (giá vốn) 10.000.", "5. Thêm NCC mới \"Thái Ninh\".", "6. Thanh toán đủ 480.000 và nhấn Hoàn thành."], confirm: "Chụp ảnh màn hình phiếu nhập hàng vừa hoàn tất."
      },
      {
        title: "Bài tập 13: Thiết lập tính giá vốn trung bình", requirements: ["1. Cài đặt phương pháp tính giá vốn trung bình.", "2. Khai báo sản phẩm mới \"Sting\" (tồn kho 0)."], instructions: ["1. Vào Thiết lập -> Hàng hóa -> Giá vốn, tồn kho.", "2. Chọn phương pháp tính là Giá vốn trung bình.", "3. Vào Hàng hóa -> Danh sách, tạo mới sản phẩm \"Sting\", Nhóm \"Nước ngọt\", Giá vốn 8.000, Giá bán 10.000, Tồn kho 0."], confirm: "Chụp ảnh phần thiết lập giá vốn trung bình và chi tiết sản phẩm Sting vừa tạo."
      },
      {
        title: "Bài tập 14: Nhập hàng nhiều mức giá", requirements: ["1. Nhập 50 lon \"Sting\" (giá 8.000đ/lon) được tặng 1 lon miễn phí (giá 0đ). Ghi nhận trên cùng 1 phiếu."], instructions: ["1. Tạo phiếu Nhập hàng, chọn NCC \"Thái Ninh\".", "2. Chọn \"Sting\", nhập Số lượng 50, Đơn giá 8.000.", "3. Bật tính năng Thêm dòng (trong Tùy chọn hiển thị).", "4. Nhấn dấu cộng (+) cuối dòng \"Sting\" để tạo dòng thứ 2.", "5. Dòng thứ 2, nhập Số lượng 1, sửa Đơn giá thành 0.", "6. Thanh toán 400.000 và nhấn Hoàn thành."], confirm: "Chụp ảnh màn hình phiếu nhập hiển thị 2 dòng Sting với giá 8.000đ và 0đ."
      },
      {
        title: "Bài tập 15: Kiểm tra biến động giá vốn trung bình", requirements: ["1. Kiểm tra lại giá vốn của \"Sting\" sau khi nhập hàng có 2 mức giá."], instructions: ["1. Vào Hàng hóa -> Danh sách hàng hóa, tìm và click vào \"Sting\".", "2. Kiểm tra dòng Giá vốn, sẽ thấy hệ thống tự tính lại thành 7.843."], confirm: "Chụp ảnh màn hình chi tiết sản phẩm Sting, hiển thị giá vốn 7.843đ."
      },
      {
        title: "Bài tập 16: Thay đổi giá bán ngay khi nhập hàng", requirements: ["1. Nhập 100 gói \"Mì tôm thanh long\" với giá nhập 13.000, cao hơn giá bán hiện tại (12.000).", "2. Đổi giá bán thành 15.000 ngay trên phiếu nhập để tránh bán lỗ."], instructions: ["1. Tạo phiếu Nhập hàng, chọn \"Mì tôm thanh long\".", "2. Nhập Số lượng 100, Đơn giá 13.000. Hệ thống sẽ báo đỏ \"Cao hơn giá bán\".", "3. Bật tính năng Thiết lập giá (trong Tùy chọn hiển thị).", "4. Nhấn vào biểu tượng Thiết lập giá, sửa Giá bán thành 15.000.", "5. Hoàn tất phiếu nhập. Khi có hộp thoại xác nhận, nhấn Đồng ý."], confirm: "Chụp ảnh phiếu nhập lúc đang báo đỏ và ảnh chi tiết sản phẩm sau khi giá bán đã đổi."
      },
      {
        title: "Bài tập 17: Tạo và tự động hóa nhóm khách hàng VIP", requirements: ["1. Tự động chuyển khách vào \"Nhóm VIP\" khi tổng chi tiêu đạt 3.000.000đ.", "2. Khách VIP được tự động giảm 5% cho mọi hóa đơn."], instructions: ["1. Vào Khách hàng -> Nhóm khách hàng -> Tạo mới.", "2. Tên nhóm \"Nhóm VIP\", giảm giá 5%.", "3. Tab Thiết lập nâng cao, điều kiện: Tổng bán trừ trả hàng >= 3.000.000.", "4. Chọn Cập nhật tự động. Lưu.", "5. Bán thử một đơn hàng > 3.000.000 cho khách mới.", "6. Kiểm tra lại thông tin khách hàng đó, sẽ thấy đã tự động vào Nhóm VIP."], confirm: "Chụp ảnh màn hình phần thiết lập nhóm VIP."
      },
      {
        title: "Bài tập 18: Lập phiếu chi và theo dõi sổ quỹ", requirements: ["1. Ghi nhận chi phí tiền điện 5.000.000đ trả cho \"Công ty Điện lực\".", "2. Khoản chi phải được hạch toán vào kết quả kinh doanh."], instructions: ["1. Vào Sổ quỹ -> + Phiếu chi.", "2. Loại chi \"Tiền điện hàng tháng\", Giá trị 5.000.000.", "3. Đối tượng nhận \"Công ty Điện lực\" (tạo mới).", "4. Tích chọn ô Hạch toán vào kết quả hoạt động kinh doanh.", "5. Nhấn Lưu."], confirm: "Chụp ảnh màn hình Sổ quỹ hiển thị phiếu chi 5.000.000đ."
      },
      {
        title: "Bài tập 19: Thiết lập tài khoản ngân hàng", requirements: ["1. Thêm thông tin tài khoản ngân hàng của cửa hàng vào hệ thống Sổ quỹ."], instructions: ["1. Tại Sổ quỹ, mục Quỹ tiền -> chọn Ngân hàng.", "2. Mục Tài khoản -> Nhấn Thêm.", "3. Khai báo thông tin tài khoản (Số tài khoản, Tên ngân hàng, Tên chủ thẻ) và Lưu."], confirm: "Chụp ảnh màn hình tab Ngân hàng trong Sổ quỹ hiển thị tài khoản vừa thêm."
      },
      {
        title: "Bài tập 20: Phân quyền tài khoản nhân viên", requirements: ["1. Tạo tài khoản cho nhân viên mới tên \"An\".", "2. Cấp quyền \"Nhân viên thu ngân\" để chỉ bán hàng, không xem được báo cáo."], instructions: ["1. Vào Thiết lập -> Quản lý người dùng -> + Tạo tài khoản.", "2. Nhập Tên người dùng \"An\", Tên đăng nhập \"An\".", "3. Đặt Mật khẩu.", "4. Tại ô Vai trò, chọn Nhân viên thu ngân.", "5. Nhấn Lưu."], confirm: "Chụp ảnh màn hình danh sách người dùng hiển thị tài khoản nhân viên An."
      },
      {
        title: "Bài tập 21: Import hàng hóa từ file Excel", requirements: ["1. Dùng file Excel để tải hàng loạt sản phẩm \"Thời trang mùa hè\" lên phần mềm."], instructions: ["1. Vào Hàng hóa -> Danh sách hàng hóa, nhấn Import và tải file mẫu.", "2. Mở file Excel, điền thử 1 dòng: Mã \"TT001\", Tên \"Áo thun mùa hè\", Nhóm \"Thời trang\", Giá vốn 50.000, Giá bán 150.000, Tồn kho 10.", "3. Xóa các dòng mẫu, lưu file.", "4. Quay lại phần mềm, tại giao diện Import, tích \"Có\" ghi nhận tồn kho.", "5. Chọn file và bấm Thực hiện."], confirm: "Chụp ảnh màn hình danh sách hàng hóa hiển thị sản phẩm Áo thun mùa hè vừa import."
      }
    ]
  },
  {
    id: "session_3",
    title: "Buổi 3: Mobile App & Quản lý thiết bị phần cứng",
    exercises: [
      { title: '📱 Thao tác trên Mobile App', isGroupHeader: true },
      {
        title: "Bài tập 1: Thêm mới hàng hóa và đơn vị tính quy đổi", requirements: ["1. Thêm sản phẩm \"Mì Hảo Hảo\".", "2. Thiết lập đơn vị quy đổi (1 Thùng = 30 Gói).", "3. Tạo sản phẩm nháp \"Sản phẩm Test 01\"."], instructions: ["1. Truy cập Hàng hóa -> Danh mục.", "2. Nhấn Thêm mới -> Thêm hàng hóa.", "3. Nhập thông tin \"Mì Hảo Hảo\": Mã \"MH01\", Nhóm \"Mì ăn liền\", Giá vốn 3.000, Giá bán 4.000, Tồn kho 100.", "4. Trong phần Đơn vị tính, thêm \"Thùng\", tỷ lệ 30, giá bán 115.000.", "5. Nhấn Lưu. Lặp lại để tạo \"Sản phẩm Test 01\"."], confirm: "Chụp ảnh danh sách hàng hóa có cả 2 sản phẩm và thấy rõ đơn vị quy đổi."
      },
      {
        title: "Bài tập 2: Tạo phiếu nhập hàng từ nhà cung cấp", requirements: ["1. Tạo phiếu nhập 5 thùng \"Mì Hảo Hảo\".", "2. Thêm mới nhà cung cấp trong quá trình lập phiếu."], instructions: ["1. Truy cập Giao dịch -> Nhập hàng -> nút (+).", "2. Tìm và chọn \"Mì Hảo Hảo\".", "3. Chọn đơn vị \"Thùng\", nhập số lượng 5.", "4. Phần Nhà cung cấp, nhấn (+) thêm mới \"Đại lý Tuấn Anh\", SĐT \"0901234567\".", "5. Nhấn Hoàn thành."], confirm: "Chụp ảnh chi tiết phiếu nhập hàng vừa tạo."
      },
      {
        title: "Bài tập 3: Thực hiện giao dịch bán hàng", requirements: ["1. Tạo hóa đơn bán 10 gói \"Mì Hảo Hảo\" cho khách hàng quen."], instructions: ["1. Chuyển sang màn hình Bán hàng.", "2. Tìm và chọn \"Mì Hảo Hảo\".", "3. Chọn đơn vị \"Gói\", nhập số lượng 10.", "4. Tìm và chọn khách hàng \"Chị Lan\".", "5. Nhấn Thanh toán và hoàn tất hóa đơn."], confirm: "Chụp ảnh màn hình hóa đơn vừa bán."
      },
      {
        title: "Bài tập 4: Xử lý khách trả hàng", requirements: ["1. Thực hiện trả lại 1 gói \"Mì Hảo Hảo\" từ hóa đơn đã bán."], instructions: ["1. Truy cập Giao dịch -> Hóa đơn, tìm hóa đơn của \"Chị Lan\".", "2. Mở chi tiết hóa đơn, chọn chức năng Trả hàng.", "3. Điều chỉnh số lượng trả lại là 1 gói.", "4. Nhấn Thanh toán và xác nhận hoàn thành."], confirm: "Chụp ảnh chi tiết phiếu trả hàng."
      },
      {
        title: "Bài tập 5: Thanh toán công nợ nhà cung cấp", requirements: ["1. Thanh toán khoản nợ từ phiếu nhập hàng cho \"Đại lý Tuấn Anh\"."], instructions: ["1. Truy cập Đối tác -> Nhà cung cấp.", "2. Tìm và chọn \"Đại lý Tuấn Anh\".", "3. Chuyển sang tab Công nợ và chọn Thanh toán.", "4. Nhập đủ số tiền cần thanh toán.", "5. Nhấn Tạo phiếu thu để hoàn tất."], confirm: "Chụp ảnh lịch sử thanh toán của nhà cung cấp, dư nợ bằng 0."
      },
      {
        title: "Bài tập 6: Xóa vĩnh viễn dữ liệu nháp", requirements: ["1. Xóa vĩnh viễn \"Sản phẩm Test 01\" đã tạo để làm sạch dữ liệu."], instructions: ["1. Truy cập Hàng hóa -> Danh mục.", "2. Tìm và chọn \"Sản phẩm Test 01\", nhấn Xóa.", "3. Xác nhận xóa vĩnh viễn."], confirm: "Chụp ảnh màn hình sau khi tìm kiếm \"Sản phẩm Test 01\" không còn kết quả."
      },
      { title: '⚙️ Cài đặt thiết bị phần cứng', isGroupHeader: true },
      {
        title: "Bài tập 7: Cài đặt KiotViet Hardware Manager", requirements: ["1. Tải và cài đặt ứng dụng KiotViet Hardware Manager.", "2. Xem danh mục các thiết bị được hỗ trợ."], instructions: ["1. Đăng nhập KiotViet, vào Thiết lập -> Cửa hàng -> Tải Driver.", "2. Mở file .exe và tiến hành cài đặt.", "3. Mở ứng dụng. Do không có thiết bị, nếu nhấn \"Quét\" sẽ báo không tìm thấy.", "4. Chuyển sang thẻ Danh mục để xem danh sách driver."], confirm: "Chụp ảnh màn hình ứng dụng đang mở ở thẻ \"Danh mục\"."
      },
      {
        title: "Bài tập 8: Cài đặt máy in hóa đơn & ngăn kéo đựng tiền", requirements: ["1. Cài đặt Driver máy in hóa đơn (ví dụ: ZY307).", "2. Cấu hình tự động mở ngăn kéo đựng tiền.", "3. Xem trước bản in và thiết lập tối ưu khổ giấy."], instructions: ["1. Mở Hardware Manager, thẻ Danh mục, tìm \"Máy in hóa đơn\" và nhấn Cài đặt.", "2. Mở Printers & Scanners trên Windows, chọn máy in -> Printer Properties.", "3. Thẻ Device Settings, mục Cash Select, chọn After Printing -> OK.", "4. Truy cập màn hình bán hàng, nhấn Thanh toán.", "5. Tại Print Preview, chọn đúng máy in.", "6. Trong Cài đặt khác, Lề chọn Không, bỏ tích Đầu trang và chân trang."], confirm: "Chụp 2 ảnh: Bảng Device Settings và Print Preview đã tắt lề."
      },
      {
        title: "Bài tập 9: Cài đặt máy in tem mã & khổ giấy", requirements: ["1. Cài đặt Driver máy in tem mã (ví dụ: Xprinter 365B).", "2. Thiết lập khổ giấy tem chuẩn (72x22mm).", "3. In thử mã vạch từ danh mục hàng hóa."], instructions: ["1. Trong Hardware Manager, tìm máy in tem mã và nhấn Cài đặt.", "2. Mở Printers & Scanners, chọn máy in tem -> Printer Properties.", "3. Thẻ General -> Preferences... -> Page Setup -> New.", "4. Tạo khổ giấy mới tên: Tem 72x22mm, Width: 72 mm / Height: 22 mm -> OK.", "5. Mở KiotViet, vào Hàng hóa, tích chọn 1 sản phẩm.", "6. Nhấn In tem mã, chọn khổ giấy 72x22mm -> Xem bản in."], confirm: "Chụp 2 ảnh: Bảng cấu hình Page Setup và Print Preview mã vạch."
      },
      {
        title: "Bài tập 10: Thao tác kết nối màn hình QR", requirements: ["1. Xác định vị trí và thao tác bật/kết nối màn hình QR."], instructions: ["1. Truy cập vào màn hình Bán hàng.", "2. Tìm nút/tùy chọn Màn hình phụ hoặc Kết nối màn QR (thường ở Menu 3 gạch).", "3. Click vào để hệ thống hiển thị mã QR."], confirm: "Chụp ảnh giao diện Thu ngân có hiển thị nút kết nối hoặc pop-up QR."
      }
    ]
  }
];
