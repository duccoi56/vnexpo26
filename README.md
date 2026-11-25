# VN Defence Expo 2026 — Trung tâm Tiếng Anh Quốc phòng & Đối ngoại (Web & iOS PWA Offline)

Ứng dụng web tĩnh (chạy **100% offline**, không phụ thuộc CDN ngoài) phục vụ ôn luyện và tác nghiệp tiếng Anh tại **Triển lãm Quốc phòng quốc tế Việt Nam 2026** (10–13/12/2026, Sân bay Gia Lâm, Hà Nội).

## Nội dung & Tính năng nổi bật (Bản hoàn thiện v6)
- **280 thuật ngữ chuyên ngành** (16 chuyên ngành: Quân hàm đầy đủ, Chức danh & Cơ quan Quân đội, Đảng–Nhà nước chuẩn Thông tư 05/2026/TT-BNG, Khí tài 2026 gồm T-1/Z181/C-UAS/VR MiG-21, Hải quan ATA Carnet & Quầy Thông tin), kèm Flashcard, Luyện Nghe và cờ đánh dấu **Cần ôn lại (SRS)**.
- **126 mẫu câu thực chiến** (60 mẫu Đối ngoại/B2B/Báo chí/4 Không + 66 mẫu chuyên biệt Quầy Thông tin) tích hợp **đọc phát âm Anh-Mỹ/Anh-Anh**, **Luyện nói chấm phát âm**, và nút **Giơ thẻ toàn màn hình** dùng khi khu vực bay chào mừng ồn.
- **15 thẻ xử lý sự cố khẩn (SOS)**, checklist ca trực 12 mục, Sổ trực & Danh bạ Nóng tự lưu, **In Tờ trực Quầy (1 trang)** ưu tiên câu đã ghim & Danh bạ Nóng.
- **10 kịch bản Hội thoại mô phỏng**, **Bảng Quân hàm & Cơ cấu đơn vị**, **Bộ đọc NATO**, **Đổi đơn vị & Giờ Quân sự (GMT+7 ↔ Zulu kèm cảnh báo D-1)**, **56 từ viết tắt** và **40 câu trắc nghiệm**.
- **Sao lưu / Khôi phục JSON đầy đủ** (bao gồm tiến độ học, từ đơn vị, Danh bạ Nóng, Sổ trực và cài đặt).

## Cách đưa lên GitHub Pages (3 bước)
1. Tạo một repository mới trên GitHub (ví dụ `vn-defence-expo-2026`).
2. Giải nén file ZIP và tải **toàn bộ các file/thư mục bên trong** (`index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, `assets/`, `README.md`) lên nhánh `main` của repository.
3. Vào **Settings → Pages → Build and deployment → Source: Deploy from a branch**, chọn nhánh `main` và thư mục `/ (root)`, bấm **Save**. Sau khoảng 1 phút, ứng dụng sẽ hoạt động tại `https://<ten-tai-khoan>.github.io/<ten-repo>/`.

## Cách cài đặt như ứng dụng trên iPhone / iPad (iOS Offline)
1. Mở đường dẫn GitHub Pages bằng trình duyệt **Safari** trên iPhone/iPad (mở lần đầu khi có mạng để Service Worker lưu toàn bộ dữ liệu offline vào máy).
2. Chạm nút **Chia sẻ (Share)** ở thanh dưới cùng → chọn **Thêm vào MH chính (Add to Home Screen)** → bấm **Thêm**.
3. Biểu tượng **VN Defence 26** sẽ xuất hiện trên màn hình chính và mở toàn màn hình, hoạt động bình thường ngay cả khi mất mạng hoặc nghẽn 4G tại Sân bay Gia Lâm.
