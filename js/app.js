/**
 * ANIME / MOVIE STREAMING - NETFLIX STYLE INTERACTIVE SCRIPT
 * Quản lý Video Modal, hiệu ứng Navbar cuộn, và tương tác thẻ phim.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements Modal
  const videoModal = document.getElementById('videoModal');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalVideoSource = document.getElementById('modalVideoSource');
  const modalMovieTitle = document.getElementById('modalMovieTitle');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const navbar = document.querySelector('.navbar');

  /**
   * Mở Video Modal
   * @param {string} videoSrc - Đường dẫn video file
   * @param {string} movieTitle - Tiêu đề phim
   */
  function openVideoModal(videoSrc, movieTitle) {
    if (!videoModal || !modalVideoPlayer) return;

    // Cập nhật tiêu đề
    if (modalMovieTitle) {
      modalMovieTitle.textContent = movieTitle || 'Đang xem phim';
    }

    // Nạp source video và phát
    if (modalVideoSource) {
      modalVideoSource.src = videoSrc;
    } else {
      modalVideoPlayer.src = videoSrc;
    }
    
    modalVideoPlayer.load();

    // Hiển thị modal
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang nền

    // Tự động phát khi người dùng đã tương tác (click)
    modalVideoPlayer.play().catch((err) => {
      console.log('Tự động phát bị giới hạn, người dùng có thể bấm nút Play:', err);
    });
  }

  /**
   * Đóng Video Modal và dừng phát video
   */
  function closeVideoModal() {
    if (!videoModal || !modalVideoPlayer) return;

    // Dừng video ngay lập tức
    modalVideoPlayer.pause();
    modalVideoPlayer.currentTime = 0;

    // Ẩn modal
    videoModal.classList.remove('active');
    document.body.style.overflow = ''; // Cho phép cuộn lại trang
  }

  // Gắn sự kiện cho tất cả các thẻ/nút mở phim có thuộc tính [data-video-src]
  const playTriggers = document.querySelectorAll('[data-video-src]');
  playTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = trigger.getAttribute('data-video-src');
      const movieTitle = trigger.getAttribute('data-movie-title') || 
                         trigger.querySelector('.movie-card__title, p, h2, h3')?.textContent?.trim() || 
                         'Xem Phim';
      if (videoSrc) {
        openVideoModal(videoSrc, movieTitle);
      }
    });
  });

  // Đóng khi click nút X
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeVideoModal();
    });
  }

  // Đóng khi click ra vùng nền tối bên ngoài (Backdrop)
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', () => {
      closeVideoModal();
    });
  }

  // Đóng khi nhấn phím Escape (ESC) trên bàn phím
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      closeVideoModal();
    }
  });

  // Hiệu ứng đổi màu Navbar khi cuộn trang
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }
    });
  }
});
