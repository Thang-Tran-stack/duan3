# HƯỚNG DẪN & QUY CHUẨN DỰ ÁN (PROJECT CODING STANDARDS & AI RULES)

> **Dành cho AI & Nhà phát triển**: Mọi AI (hoặc lập trình viên) khi làm việc trên dự án này **BẮT BUỘC** phải đọc và tuân thủ các quy chuẩn, cấu trúc thư mục và nguyên tắc thiết kế được định nghĩa trong tài liệu này để đảm bảo mã nguồn luôn sạch sẽ, chuẩn mực, tối ưu và thẩm mỹ nhất.

---

## 1. TỔNG QUAN DỰ ÁN (PROJECT OVERVIEW)

- **Tên dự án**: Anime/Movie Streaming Web (Netflix & Chill Style).
- **Mục tiêu**: Xây dựng trang web xem phim hoạt hình, anime (Conan, Doraemon, One Piece, Dragon Ball,...) với phong cách giao diện tối (Dark Mode), hiện đại, mượt mà và sang trọng tương tự Netflix.
- **Tech Stack cốt lõi**:
  - **HTML5**: Semantic tags, chuẩn SEO, cấu trúc chuẩn W3C.
  - **CSS3**: Vanilla CSS hiện đại, CSS Variables (Design Tokens), Flexbox, CSS Grid, Glassmorphism, Animation & Micro-interactions.
  - **JavaScript**: Pure Vanilla JS (ES6+), xử lý tương tác UI (Modal Video, Search/Filter phim, Slider Movie Rows, Navbar hiệu ứng cuộn,...).

---

## 2. CẤU TRÚC THƯ MỤC VÀ QUY TẮC ĐƯỜNG DẪN (DIRECTORY STRUCTURE)

```
d:/web.html/
├── index.html              # Trang chủ chính (Home page)
├── skill.md                # Tài liệu quy chuẩn & hướng dẫn code cho AI
├── test.html               # Trang test/thử nghiệm thành phần mới
├── css/
│   └── style.css           # File CSS dùng chung cho toàn bộ trang web
├── more-info/
│   ├── conan.html          # Trang chi tiết / danh sách phim Conan
│   ├── doraemon.html       # Trang chi tiết / danh sách phim Doraemon
│   ├── onepiece.html       # Trang chi tiết / danh sách phim One Piece
│   ├── Doraemon.css        # CSS riêng cho Doraemon (hoặc gộp về style.css)
│   └── conan.css           # CSS riêng cho Conan
├── signup/
│   ├── signup.html         # Trang đăng ký / đăng nhập tài khoản
│   └── signup.css          # CSS cho trang signup
├── img/
│   ├── wp.jpg              # Background poster chính
│   ├── baker.webp          # Poster Bóng ma phố Baker
│   ├── br.webp, br2.jpg    # Hình nền / banner bổ trợ
│   ├── cdjpg.jpg, doc.png  # Assets hình ảnh
│   └── poster/             # Kho poster phim:
│       ├── c1.jfif -> c11.jfif, cn.jfif, dn.jfif, dn1.jpg  # Poster Conan
│       ├── d1.jfif -> d5.jfif                              # Poster Doraemon
│       ├── o1.jfif -> o5.jfif                              # Poster One Piece
│       └── db1.png, db2.png                                # Poster Dragon Ball
└── video/
    ├── cona1.mp4           # Video mẫu Conan
    ├── hdn.mp4             # Video trailer / highlight
    └── test.mp4            # Video test
```

### 📌 Quy tắc đường dẫn (Path Resolution Rule):
- **Ưu tiên đường dẫn tương đối chuẩn (`./` hoặc `../`)**: Giúp website hoạt động mượt mà cả khi chạy trực tiếp bằng file (`file://`) lẫn qua máy chủ cục bộ (Live Server).
  - Ví dụ từ `index.html`: `href="./more-info/conan.html"`, `src="./img/poster/c1.jfif"`.
  - Ví dụ từ `more-info/conan.html`: `href="../index.html"`, `src="../img/poster/c1.jfif"`.
- Đảm bảo đúng tên file mở rộng (`.jfif`, `.webp`, `.png`, `.jpg`, `.html` - không dùng `.htm` để đồng bộ).

---

## 3. NGUYÊN TẮC THIẾT KẾ GIAO DIỆN (UI/UX & DESIGN SYSTEM)

### 3.1. Bảng màu chủ đạo (Color Palette)
- **Nền chính (Background)**: Tối sâu (`#111111`, `#141414`, `#181818`).
- **Màu nhấn thương hiệu (Brand Accent)**: Đỏ Netflix (`#E50914`, `#B81D24` hoặc Gradient `#E50914` ➔ `#8B0000`).
- **Màu chữ (Typography)**:
  - Text chính: Trắng tinh khiết (`#FFFFFF`).
  - Text phụ/Mô tả: Xám khói (`#AAAAAA` hoặc `#B3B3B3`).
- **Hiệu ứng kính mờ (Glassmorphism)**: `background: rgba(20, 20, 20, 0.75); backdrop-filter: blur(12px);`.

### 3.2. Typography
- Sử dụng font hiện đại, dễ đọc trên mọi màn hình: `'Inter'`, `'Montserrat'`, `'Roboto'`, hoặc fallback `system-ui, -apple-system, sans-serif`.

### 3.3. Hiệu ứng & Chuyển động (Micro-interactions)
- **Movie Card Hover**: Phóng to nhẹ (`transform: scale(1.08)` hoặc `scale(1.05)`), nâng nhẹ trục Y (`translateY(-5px)`), đổ bóng neon/glow (`box-shadow: 0 10px 25px rgba(0,0,0,0.8)`).
- **Smooth Transition**: `transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);`.

---

## 4. QUY CHUẨN VIẾT CODE CHO AI (AI CODING RULES)

### 4.1. Quy chuẩn HTML5 (Clean HTML)
1. **Semantic Structure**:
   - Sử dụng đúng thẻ chức năng: `<header>`, `<nav>`, `<main>`, `<section class="movie-section">`, `<article class="movie-card">`, `<footer>`.
   - **Tuyệt đối không dùng `<pre>` để tạo thanh điều hướng/menu**. Phải dùng `<header><nav class="navbar">...</nav></header>`.
2. **Thuộc tính chuẩn**:
   - Không chèn dấu phẩy `,` giữa các thuộc tính thẻ HTML (Lỗi: `<a href="..." , class="...">` ➔ Sửa: `<a href="..." class="...">`).
   - Mọi thẻ `<img>` phải có thuộc tính `alt` mô tả và `loading="lazy"` để tối ưu hiệu năng.
3. **Accessibility & SEO**:
   - Khai báo đầy đủ `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, `<title>` rõ ràng, favicon.

### 4.2. Quy chuẩn CSS3 (Clean & Modern CSS)
1. **CSS Variables (Custom Properties)**: Định nghĩa ở `:root` để tái sử dụng:
   ```css
   :root {
     --bg-primary: #141414;
     --bg-card: #1f1f1f;
     --accent-color: #e50914;
     --text-primary: #ffffff;
     --text-secondary: #aaaaaa;
     --font-main: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
     --transition-smooth: 0.3s ease;
   }
   ```
2. **Tránh hoàn toàn các cú pháp sai**:
   - **KHÔNG** viết `background-color: none;` (Sai CSS) ➔ Viết `background: transparent;` hoặc `background: none;`.
   - **KHÔNG** viết `padding-top: 0 auto;` (Sai cú pháp) ➔ Viết `padding-top: 0;` hoặc `padding: 0;`.
   - **KHÔNG** viết `display: flex;` 2 lần trùng lặp trong cùng 1 rule.
3. **Bố cục Responsive (Mobile First / Adaptive)**:
   - Sử dụng CSS Grid cho danh sách phim: `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));` hoặc Flexbox cuộn ngang (`overflow-x: auto`).
   - Viết Media Queries rõ ràng cho Mobile (`< 768px`) và Tablet (`768px - 1024px`).

### 4.3. Quy chuẩn JavaScript (Interactive & Robust JS)
1. **Quản lý sự kiện sạch**:
   - Luôn chờ DOM sẵn sàng: `document.addEventListener('DOMContentLoaded', () => { ... })`.
   - Không viết JS inline dạng `onclick="..."` trong HTML; hãy dùng `addEventListener`.
2. **Tính năng khuyến khích phát triển**:
   - **Video Modal Popup**: Click vào phim mở popup video xịn xò (Play/Pause, Fullscreen, nút đóng).
   - **Hero Banner tự động đổi phim nổi bật (Featured Slider)**.
   - **Search / Filter Bar**: Tìm kiếm nhanh phim theo tiêu đề.
   - **Active Navigation**: Tự động active link tương ứng với trang đang xem.

---

## 5. BẢN ĐỒ DỮ LIỆU TÀI NGUYÊN (AVAILABLE ASSETS MAPPING)

AI có thể tham chiếu ngay danh sách assets này khi tạo hoặc cập nhật trang:

| Thể loại | Tên phim / Tiêu đề | Đường dẫn Poster | Video tương ứng |
| :--- | :--- | :--- | :--- |
| **Conan** | Bóng Ma Phố Baker | `img/baker.webp` | `video/cona1.mp4` |
| **Conan** | Viên Đạn Đỏ | `img/poster/c1.jfif` | `video/cona1.mp4` |
| **Conan** | Ngôi Sao Năm Cánh Triệu Đô | `img/poster/c2.jfif` | `video/cona1.mp4` |
| **Conan** | Cô Dâu Halloween | `img/poster/c3.jfif` | `video/cona1.mp4` |
| **Conan** | Dư Ảnh Độc Nhãn | `img/poster/c4.jfif` | `video/hdn.mp4` |
| **Conan** | Cú Đấm Saphire Xanh | `img/poster/c5.jfif` | `video/cona1.mp4` |
| **Conan** | Con Tàu Biến Mất Giữa Trời Xanh | `img/poster/c6.jfif` | `video/cona1.mp4` |
| **Conan** | Truy Lùng Tổ Chức Áo Đen | `img/poster/c7.jfif` | `video/cona1.mp4` |
| **Conan** | Ảo Thuật Gia Cuối Cùng Của Thế Kỷ | `img/poster/c8.jfif` | `video/cona1.mp4` |
| **Conan** | Thủ Phạm Trong Đôi Mắt | `img/poster/c9.jfif` | `video/cona1.mp4` |
| **Conan** | Mục Tiêu Thứ 14 | `img/poster/c10.jfif` | `video/cona1.mp4` |
| **Conan** | Âm Mưu Trên Biển | `img/poster/c11.jfif` | `video/cona1.mp4` |
| **Doraemon** | Thế Giới Trong Tranh | `img/poster/d1.jfif` | `video/cona1.mp4` |
| **Doraemon** | Đội Vệ Binh Ngân Hà | `img/poster/d2.jfif` | `video/cona1.mp4` |
| **Doraemon** | Bản Giao Hưởng Địa Cầu | `img/poster/d3.jfif` | `video/cona1.mp4` |
| **Doraemon** | Mặt Trăng Phiêu Lưu Ký | `img/poster/d4.jfif` | `video/cona1.mp4` |
| **Doraemon** | Cuộc Chiến Vũ Trụ Tí Hon | `img/poster/d5.jfif` | `video/cona1.mp4` |
| **One Piece** | Stampede | `img/poster/o1.jfif` | `video/cona1.mp4` |
| **One Piece** | Gold | `img/poster/o2.jfif` | `video/cona1.mp4` |
| **One Piece** | Pirate Party | `img/poster/o3.jfif` | `video/cona1.mp4` |
| **One Piece** | Red / Wano | `img/poster/o4.jfif` | `video/cona1.mp4` |
| **One Piece** | Egg Head Arc | `img/poster/o5.jfif` | `video/cona1.mp4` |
| **Dragon Ball**| Siêu Anh Hùng / Movie | `img/poster/db1.png`, `db2.png` | `video/test.mp4` |

---

## 6. CHECKLIST KIỂM THỬ TRƯỚC KHI HOÀN THÀNH (QA & VERIFICATION CHECKLIST)

Mỗi khi AI thực hiện chỉnh sửa hoặc tạo code mới, cần tự kiểm tra qua các mục sau:
- [ ] **Không có lỗi HTML**: Thẻ đóng mở đúng, không có thuộc tính chứa dấu phẩy sai chuẩn.
- [ ] **Không có lỗi CSS**: Không có giá trị không hợp lệ (`none` cho màu nền, sai cú pháp shorthand).
- [ ] **Đường dẫn assets chính xác 100%**: Ảnh và video hiển thị đúng, không bị gãy link (`404 Not Found`).
- [ ] **Responsive hoàn chỉnh**: Kiểm tra hiển thị tốt trên màn hình điện thoại (375px), tablet (768px) và desktop (1200px+).
- [ ] **Trải nghiệm người dùng (UX)**: Giao diện thẩm mỹ cao, đậm chất rạp chiếu phim/Netflix, nút bấm phản hồi mượt mà.
