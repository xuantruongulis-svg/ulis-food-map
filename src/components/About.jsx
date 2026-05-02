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
              ULIS Food Map là landing page giới thiệu sản phẩm bản đồ ẩm thực dành cho sinh viên Đại học Ngoại ngữ, được xây dựng để giải quyết nhu cầu tìm quán nhanh, rõ giá và dễ tiếp cận.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Target size={24} />
                </div>
                <div>
                  <h4>Sứ Mệnh</h4>
                  <p>Trở thành cẩm nang ẩm thực trực quan giúp sinh viên dễ làm quen với môi trường mới và tìm quán ăn ngon, hợp túi tiền quanh khu Xuân Thủy - Phạm Văn Đồng.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Heart size={24} />
                </div>
                <div>
                  <h4>Mục Tiêu Kết Nối</h4>
                  <p>Kết nối sinh viên với các quán ăn gần trường bằng thông tin rõ ràng, hình ảnh thực tế và trải nghiệm được mô tả trực quan trên cùng một trang.</p>
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
