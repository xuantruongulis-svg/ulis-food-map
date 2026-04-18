import React from 'react';
import { ArrowRight } from 'lucide-react';
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
            Được yêu thích bởi 10.000+ sinh viên
          </div>
          
          <h1 className="hero-heading">
            KHÁM PHÁ THẾ GIỚI<br />ẨM THỰC
            <span className="text-gradient"> ĐẠI HỌC NGOẠI NGỮ</span>
          </h1>
          
          <p className="hero-desc">
            Hàng trăm món ngon đang chờ bạn thưởng thức. Khám phá bản đồ ẩm thực và tìm quán ăn yêu thích ngay!
          </p>
          
          <a href="#today-special" className="btn btn-primary btn-hero-cta">
            Khám phá ngay
            <ArrowRight size={20} />
          </a>
        </div>

        {/* CỘT PHẢI: MARQUEE HÌNH ẢNH */}
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
