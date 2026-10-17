// CẤU HÌNH HỆ THỐNG THI TRỰC TUYẾN - ĐÀO MATH
window.EXAM_CONFIG = {
  // 1. TRẠNG THÁI MỞ / ĐÓNG ĐỀ THI:
  //    - true: Đang mở thi bình thường
  //    - false: ĐÃ ĐÓNG ĐỀ THI (Học sinh truy cập sẽ hiện thông báo ca thi đã kết thúc)
  isOpen: true,

  // Thông báo hiển thị cho học sinh khi thầy đóng đề thi:
  closedMessage: "Đề thi hiện đang tạm khóa hoặc đã kết thúc thời gian làm bài theo quy định của giáo viên. Mọi thắc mắc xin vui lòng liên hệ Thầy Dũng Đào (Hotline/Zalo: 0876.809.509) để được hỗ trợ.",

  // 2. MÃ BÍ MẬT QUẢN TRỊ (ADMIN KEY):
  //    Thầy có thể bật/tắt đề thi ngay trên trình duyệt mà không cần sửa code:
  //    Chỉ cần gõ "?admin=daomath2026" vào đuôi link web (Ví dụ: index.html?admin=daomath2026)
  adminKey: "daomath2026",

  // 3. THÔNG TIN ĐỀ THI
  examTitle: "KIỂM TRA GIỮA KÌ I - MÔN TOÁN 10",
  examCode: "ĐỀ 01 - MÃ 101",
  durationMinutes: 90,
  teacherContact: "Hotline/Zalo: 0876.809.509 - Thầy Dũng Đào"
};
