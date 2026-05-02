import React, { useState, useRef } from 'react';
import { MapPinned, Wallet, Clock3, MessagesSquare, Play, Pause } from 'lucide-react';
import './Benefits.css';

const benefitItems = [
  {
    icon: MapPinned,
    title: 'Tìm quán đúng khu vực',
    desc: 'Xem nhanh các quán quanh Cổng Sắt, tòa B3 và khu ký túc xá để không mất thời gian đi lòng vòng.',
  },
  {
    icon: Wallet,
    title: 'Biết trước mức giá',
    desc: 'Mỗi địa điểm đều có khoảng giá tham khảo để sinh viên dễ chọn món phù hợp với ngân sách hằng ngày.',
  },
  {
    icon: Clock3,
    title: 'Quyết định ăn gì nhanh hơn',
    desc: 'Bản đồ, gợi ý món và ảnh thực tế giúp rút ngắn thời gian phân vân khi đến giờ ăn.',
  },
  {
    icon: MessagesSquare,
    title: 'Kết nối cộng đồng ULIS',
    desc: 'Sinh viên có thể để lại phản hồi, đề xuất quán quen và tham gia đóng góp dữ liệu cho dự án.',
  },
];

const Benefits = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="benefits" className="section benefits-section">
      <div className="container">
        <h2 className="section-title">ULIS Food Map Mang Lại Gì?</h2>
        <p className="section-subtitle">
          Đây là khu vực mô tả rõ những lợi ích chính của sản phẩm đối với sinh viên mới, sinh viên nội trú và cả những bạn thường xuyên học tại khu Xuân Thủy.
        </p>

        <div className="benefits-main-content">
          <div className="benefits-video-container animate-fade-in">
            <div className="video-wrapper">
              <video
                ref={videoRef}
                className="benefits-video"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/0427.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>


            <button
              className={`video-play-button ${isPlaying ? 'playing' : ''}`}
              onClick={togglePlay}
              aria-label={isPlaying ? "Dừng video" : "Phát video"}
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />}
            </button>

            <div className="video-overlay-text">
              <span>Khám phá ULIS Food Map</span>
            </div>
          </div>
        </div>

        <div className="benefits-grid">
          {benefitItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="benefit-card animate-fade-up">
                <div className="benefit-icon">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
    </section >
  );
};

export default Benefits;
