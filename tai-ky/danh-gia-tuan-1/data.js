// File này đóng vai trò như Database/JSON lưu trữ toàn bộ nội dung câu hỏi để không làm rác HTML
const reviewCriteria = {
    product_w1: {
        title: "Review Sản phẩm - Tuần 1 (Retail & Kế toán 01)",
        day1_morning: {
            scenarios: [
                "Khách là shop mỹ phẩm, nhập nhiều đợt có HSD khác nhau, hay quên hàng cận date. -> Lợi ích Lô-HSD: kiểm soát từng lô, ưu tiên bán trước, giảm tồn cận date.",
                "Khách bán điện thoại, mỗi máy có mã IMEI riêng, cần tra bảo hành. -> Lợi ích Serial/IMEI: kiểm soát từng máy, tra lịch sử nhanh.",
                "Khách bán giỏ quà Tết gồm nhiều SP. Bán 1 giỏ tự động trừ tồn món bên trong. -> Combo: bán nhanh 1 bộ, vẫn trừ tồn thành phần.",
                "Khách bán bàn ghế lắp ráp. Hoàn thiện 5 bàn muốn ghi nhận thành phẩm, trừ nguyên liệu. -> Hàng sản xuất: quản lý định mức, kiểm soát hao hụt.",
                "Khách bán nước giải khát, nhập thùng bán chai. -> Quản lý ĐVT: nhập bán linh hoạt, hạn chế nhầm tồn kho."
            ]
        },
        day1_afternoon: {
            scenarios: [
                "Khách nhập hàng nhiều NCC, giá nhập khác nhau, không rõ nợ ai. -> Nhập hàng/NCC/Công nợ.",
                "Khách hay bị lệch tồn thực tế và phần mềm sau bán cao điểm. -> Kiểm kho định kỳ: giảm thất thoát.",
                "Nhiều nhóm khách (Sỉ/Lẻ/Thân thiết), muốn mỗi nhóm có giá riêng. -> Bảng giá: bán đúng chính sách, NV không cần nhớ thủ công."
            ]
        },
        day2_morning: {
            scenarios: [
                "Khách nhận đơn qua FB, vài ngày sau lấy, NV hay quên giữ hàng. -> Đặt hàng -> Hóa đơn: tránh thất thoát.",
                "Nhiều khách quen nhưng không lưu lịch sử, không biết đã mua gì. -> Quản lý KH: chăm sóc tốt hơn, tư vấn lại.",
                "Nhận chuyển khoản/QR cuối ngày mất thời gian đối soát. -> Thanh toán QR: giảm nhập sai, dễ đối soát."
            ]
        },
        day2_afternoon: {
            scenarios: [
                "Chủ shop ít mặt, 4 NV, sợ gian lận. -> Phân quyền: giảm rủi ro.",
                "Bán sàn TMĐT + offline bị lệch tồn. -> Kết nối sàn/Web: đồng bộ.",
                "Doanh thu giảm không biết do mặt hàng nào, NV nào. -> Báo cáo/Phân tích: công cụ ra quyết định.",
                "Khách trả hàng nhưng NV xử lý ngoài, số liệu lệch. -> Trả hàng: cập nhật lại tồn, doanh thu chính xác."
            ]
        }
    }
};
