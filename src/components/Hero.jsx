import React from 'react';
import { ArrowRight, MapPinned, Users, UtensilsCrossed } from 'lucide-react';
import './Hero.css';

const marqueeImages = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
  '/hero-5.jpg'
];

const Hero = () => {
  return (
    <section id="home" className="hero-split">
      <div className="hero-background-blob"></div>

      <div className="hero-layout">
        {/* CỘT TRÁI: TEXT */}
        <div className="hero-text animate-fade-up">
          <div className="badge">
            <span className="badge-dot"></span>
            Bản đồ quán ăn dành riêng cho sinh viên ULIS
          </div>

          <h1 className="hero-heading">
            TÌM QUÁN ĂN NHANH
            <span className="text-gradient"> CÙNG ULIS FOOD MAP</span>
          </h1>

          <p className="hero-slogan">
            <strong>Mở bản đồ là biết ăn gì, ở đâu, giá bao nhiêu.</strong>
          </p>

          <p className="hero-desc">
            ULIS Food Map là landing page giới thiệu dịch vụ bản đồ ẩm thực cho sinh viên Đại học Ngoại ngữ. Người dùng có thể xem khu vực quán ăn, mức giá tham khảo, hình ảnh món ăn và gửi đăng ký tham gia đóng góp cho dự án.
          </p>

          <div className="hero-actions">
            <a href="#interactive-map" className="btn btn-primary btn-hero-cta">
              Mở bản đồ ngay
              <ArrowRight size={20} />
            </a>
            <a href="#feedback-form" className="btn btn-outline btn-hero-secondary">
              Đăng ký tham gia
            </a>
          </div>

          <div className="hero-proof-list">
            <div className="hero-proof-item">
              <MapPinned size={18} />
              <span>3 khu vực quán ăn chính</span>
            </div>
            <div className="hero-proof-item">
              <UtensilsCrossed size={18} />
              <span>Nhiều món ăn phổ biến của sinh viên</span>
            </div>
            <div className="hero-proof-item">
              <Users size={18} />
              <span>Có đánh giá và khu vực đăng ký góp ý</span>
            </div>
          </div>
        </div>

        <div className="hero-images animate-fade-up delay-1">
          <div className="hero-marquee-box">
            <div className="hero-marquee-track">
              <div className="hero-marquee-group">
                {marqueeImages.map((src, idx) => (
                  <img key={`a-${idx}`} src={src} alt="" className="hero-slide-img" />
                ))}
              </div>
              <div className="hero-marquee-group" aria-hidden="true">
                {marqueeImages.map((src, idx) => (
                  <img key={`b-${idx}`} src={src} alt="" className="hero-slide-img" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
