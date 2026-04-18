import React from 'react';
import { Target, Users, Heart } from 'lucide-react';
import './About.css';
const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#fffdf8' }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-content animate-fade-up">
            <h2 className="section-title text-left">Về Chúng Tôi</h2>
            <p className="about-intro">
              ULIS Food Map không chỉ là một dự án môn học, mà là tâm huyết của chúng tôi dành cho cộng đồng sinh viên Đại học Ngoại ngữ.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Target size={24} />
                </div>
                <div>
                  <h4>Sứ Mệnh</h4>
                  <p>Trở thành cuốn cẩm nang ẩm thực hữu ích giúp sinh viên dễ dàng làm quen với môi trường mới, bớt sự bỡ ngỡ khi tìm kiếm quán ăn ngon, rẻ quanh khu Xuân Thủy - Phạm Văn Đồng.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Heart size={24} />
                </div>
                <div>
                  <h4>Mục Tiêu Kết Nối</h4>
                  <p>Giúp người mua (sinh viên) và người bán (các hộ kinh doanh gần trường) có thể chủ động tìm đến nhau một cách dễ dàng và minh bạch nhất.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Users size={24} />
                </div>
                <div>
                  <h4>Đội Ngũ Phát Triển</h4>
                  <p>Dự án được nghiên cứu, tổ chức và phát triển bởi <strong>Nhóm 122</strong>, thuộc bộ môn Công nghệ thông tin và truyền thông.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual animate-fade-up delay-1">
            <div className="image-stack illustrative">
              <img
                src="/about-main.jpg"
                alt="Hình ảnh minh họa ULIS Food Map"
                className="img-main"
              />
              <div className="experience-badge custom-badge">
                <span className="number">122</span>
                <span className="text">Nhóm<br />Phát triển</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
