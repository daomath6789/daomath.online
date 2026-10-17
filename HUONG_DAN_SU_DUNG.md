# HƯỚNG DẪN VẬN HÀNH & TRIỂN KHAI HỆ THỐNG THI ONLINE (ĐÀO MATH)

Hệ thống thi trực tuyến độc quyền được đóng gói gọn trong thư mục:
`d:\0. TÀI LIỆU TOÁN THCS & THPT\THPT\BỘ ĐÊ GIỮA KÌ LỚP 10\HE_THONG_THI_ONLINE\`

---

## 1. LUỒNG THI CỦA HỌC SINH (THEO ĐÚNG YÊU CẦU CỦA THẦY):
1. **Bước 1 (Bắt buộc điền tên):** Học sinh vào link sẽ thấy màn hình chào đón. Bắt buộc nhập **Họ tên** và **Trường / Lớp** (tùy chọn số điện thoại) thì mới bấm được nút **"BẮT ĐẦU LÀM BÀI THI"**.
2. **Bước 2 (Làm bài):** 
   - Đồng hồ đếm ngược 90 phút bắt đầu chạy.
   - Toàn bộ đáp án và lời giải chi tiết **hoàn toàn bị giấu kín**.
   - Có bảng câu hỏi bên phải để học sinh nhảy nhanh đến câu muốn làm.
3. **Bước 3 (Hiện điểm & Hiện đáp án/giải thích):**
   - Khi bấm **"NỘP BÀI THI"**, hệ thống chấm điểm ngay lập tức và bật bảng thông báo tổng điểm (ví dụ: `6,25 / 7,0 điểm`).
   - Sau đó, hệ thống tự động:
     - Đổi màu xanh lá cho đáp án đúng.
     - Đổi màu đỏ gạch ngang cho câu làm sai.
     - Mở toàn bộ **hộp lời giải chi tiết và hướng dẫn chấm từng bước** cho cả 4 phần (kể cả tự luận) để học sinh đối chiếu.

---

## 2. TÍNH NĂNG TẮT / BẬT ĐỀ THI BẤT KỲ LÚC NÀO THẦY MUỐN:

Thầy có **2 cách** cực kỳ dễ dàng để khóa đề thi:

### Cách 1: Bấm nút tắt trực tiếp trên trình duyệt (Tiện nhất, không cần chạm vào code)
- Thầy chỉ cần thêm đuôi `?admin=daomath2026` vào sau đường link đề thi.
  *(Ví dụ: mở `index.html?admin=daomath2026`)*
- Ở đầu trang sẽ xuất hiện thanh quản trị màu vàng của giáo viên với nút: **"🔒 ĐÓNG ĐỀ THI NGAY"**.
- Thầy bấm nút đó là đề thi lập tức bị khóa! Bất kỳ ai vào web đều chỉ thấy thông báo: *"Đề thi hiện đang tạm khóa hoặc đã kết thúc thời gian làm bài theo quy định của giáo viên."*
- Khi nào muốn cho thi lại, thầy chỉ cần bấm **"🔓 MỞ LẠI ĐỀ THI"**.

### Cách 2: Đổi trạng thái trong file `config.js`
- Mở file `config.js`, tìm dòng đầu tiên:
  - Muốn tắt đề: sửa thành `isOpen: false,`
  - Muốn mở đề: sửa thành `isOpen: true,`

---

## 3. CÁCH ĐƯA LÊN LINK WEB ONLINE HOÀN TOÀN MIỄN PHÍ:

Thầy chỉ cần chọn 1 trong 2 nền tảng sau (cực kỳ nhanh trong 2 phút):

### Phương án A: Dùng Vercel (Khuyên dùng - Cực kỳ nhanh & ổn định)
1. Truy cập [vercel.com](https://vercel.com) (đăng nhập bằng Google hoặc Github).
2. Kéo thả nguyên thư mục `HE_THONG_THI_ONLINE` vào Vercel.
3. Vercel sẽ tự động cấp ngay cho thầy 1 đường link web (ví dụ: `daomath-de01.vercel.app`).
4. Thầy chỉ việc gửi link đó cho học sinh là thi được ngay trên điện thoại hoặc máy tính.

### Phương án B: Dùng GitHub Pages
1. Tạo 1 repository trên GitHub (ví dụ: `daomath-online`).
2. Tải toàn bộ các file trong thư mục `HE_THONG_THI_ONLINE` lên repo đó.
3. Vào mục **Settings** -> **Pages** -> chọn nhánh `main` rồi nhấn **Save**.
4. GitHub sẽ cấp link dạng: `https://ten-cua-thay.github.io/daomath-online`.
