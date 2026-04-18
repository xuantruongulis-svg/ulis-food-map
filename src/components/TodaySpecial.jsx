import React from 'react';
import './TodaySpecial.css';

const images = [
  { id: 1, src: '/today-1.jpg', alt: 'Trà đá vỉa hè' },
  { id: 2, src: '/today-2.jpg', alt: 'Nước sấu' },
  { id: 3, src: '/today-3.jpg', alt: 'Bánh khúc' },
  { id: 4, src: '/today-4.jpg', alt: 'Đa dạng món ăn' },
  { id: 5, src: '/today-5.jpg', alt: 'Combo sáng' },
];

const TodaySpecial = () => {
  return (
    <section id="today-special" className="section today-special-bg">
      <div className="container">
        <div className="today-header-glass animate-fade-up">
          <h2 className="section-title">Hôm Nay Ăn Gì?</h2>
          <p className="section-subtitle">
            Khám phá những món ăn quen thuộc, đậm đà bản sắc sinh viên Ngoại Ngữ.
          </p>
        </div>

        <div className="special-gallery-wrapper animate-fade-up delay-1">
          <div className="special-marquee-track">
            <div className="special-marquee-group">
              {images.map((img) => (
                <div key={`group1-${img.id}`} className="special-item">
                  <img src={img.src} alt={img.alt} className="special-img" />
                </div>
              ))}
            </div>
            <div className="special-marquee-group" aria-hidden="true">
              {images.map((img) => (
                <div key={`group2-${img.id}`} className="special-item">
                  <img src={img.src} alt={img.alt} className="special-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaySpecial;
