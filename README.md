# 🦷 Nha Khoa Thẩm Mỹ Star - Website Giới Thiệu & Đặt Hẹn Khám

Website chuyên nghiệp dành cho **Nha Khoa Thẩm Mỹ Star** với thiết kế hiện đại chuẩn y khoa, giao diện tối ưu cho Smartphone (Mobile-First), tích hợp đầy đủ 14 trang nội dung, công cụ tính chi phí tự động, biểu đồ giờ đông khách và đánh giá 4.9⭐ Google Maps.

---

## 📍 Thông tin phòng khám
- **Tên**: Nha Khoa Thẩm Mỹ Star
- **Địa chỉ**: 57 P. Lê Văn Hưu, Hai Bà Trưng, Hà Nội, Việt Nam (Mã Plus: 2V93+57 Hai Bà Trưng, Hà Nội)
- **Hotline**: +84 24 6666 6586 (024 6666 6586)
- **Giờ mở cửa**: 08:30 - 19:30 (Thứ Hai - Chủ Nhật)
- **Đánh giá Google**: 4.9 / 5.0 ⭐ (74 bài đánh giá)

---

## 🚀 Hướng dẫn đưa lên GitHub & Bật GitHub Pages (Xem Online Miễn Phí)

### Bước 1: Tạo Repository mới trên GitHub
1. Đăng nhập vào [GitHub](https://github.com)
2. Nhấn nút **New repository** (Tạo repo mới)
3. Đặt tên Repository (Ví dụ: `nhakhoastar` hoặc `star-dental`)
4. Chọn chế độ **Public**
5. Nhấn **Create repository**

---

### Bước 2: Đẩy toàn bộ mã nguồn lên GitHub (Bằng dòng lệnh)
Mở cửa sổ **Terminal / PowerShell** tại thư mục dự án này và chạy các lệnh sau:

```bash
git init
git add .
git commit -m "Khoi tao website Nha Khoa Tham My Star"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN_CUA_BAN/TEN_REPO_CUA_BAN.git
git push -u origin main
```
*(Thay `TEN_TAI_KHOAN_CUA_BAN` và `TEN_REPO_CUA_BAN` bằng thông tin GitHub của bạn).*

---

### Bước 3: Bật tính năng GitHub Pages để có link xem web trực tiếp
1. Trên trang Repository GitHub của bạn, nhấn vào tab **Settings** (Cài đặt).
2. Ở cột bên trái, chọn mục **Pages**.
3. Tại phần **Build and deployment** -> **Branch**:
   - Chọn nhánh **`main`**
   - Chọn thư mục **`/(root)`**
   - Nhấn **Save**.
4. Chờ khoảng 1-2 phút, GitHub sẽ cung cấp link website trực tiếp của bạn dạng:
   👉 `https://ten-tai-khoan.github.io/ten-repo/`

---

## 📂 Cấu trúc thư mục dự án

```text
nha-khoa-tham-my-star/
├── index.html                  # Trang chủ
├── gioi-thieu.html             # Trang giới thiệu phòng khám & cơ sở vật chất
├── doi-ngu-bac-si.html         # Đội ngũ bác sĩ chuyên khoa RHM
├── dich-vu-implant.html        # Dịch vụ Trồng răng Implant kỹ thuật số
├── dich-vu-nieng-rang.html     # Dịch vụ Niềng răng - Chỉnh nha US 5D
├── dich-vu-rang-su.html        # Dịch vụ Răng sứ thẩm mỹ & Veneer Emax
├── dich-vu-nho-rang-khon.html  # Dịch vụ Nhổ răng khôn sóng siêu âm Piezotome
├── bang-gia.html               # Bảng giá niêm yết trọn gói
├── danh-gia-khach-hang.html    # Tổng hợp 74 đánh giá Google Maps 4.9⭐
├── kien-thuc-nha-khoa.html     # Cẩm nang kiến thức răng miệng
├── bai-viet-implant.html       # Bài viết cấy ghép Implant
├── bai-viet-nieng-rang.html    # Bài viết niềng răng trong suốt vs mắc cài
├── bai-viet-rang-khon.html     # Bài viết nhổ răng khôn Piezotome
├── lien-he.html                # Trang liên hệ, bản đồ chỉ đường & giờ đông khách
├── assets/
│   ├── css/
│   │   └── style.css           # Toàn bộ CSS & Responsive Design System
│   ├── js/
│   │   └── main.js            # Xử lý tính toán chi phí, Drawer menu, Modal, Toast
│   └── images/                 # Hình ảnh thực tế phòng khám & giải phẫu 3D
├── server.js                   # Máy chủ xem offline cục bộ (Localhost)
└── README.md                   # Tài liệu hướng dẫn
```
