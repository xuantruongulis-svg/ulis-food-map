import React from 'react';
import { MapPin, Mail, Phone, Map } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <MapPin size={28} className="logo-icon" />
              <span>ULIS Food Map</span>
            </a>
            <p className="footer-desc mt-4">
              Giải quyết trăn trở "Hôm nay ăn gì?" của sinh viên. Bản đồ ẩm thực đầy đủ và chi tiết nhất dành riêng cho ULISers.
            </p>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Thông tin liên hệ</h4>
            <ul className="contact-list">
              <li>
                <Map size={20} className="contact-icon" />
                <div>
                  <strong>Đơn vị quản lý:</strong><br />
                  ULIS FOOD MAP - Nhóm 122 lớp FLF1007-02
                </div>
              </li>
              <li>
                <MapPin size={20} className="contact-icon" />
                <div>
                  <strong>Địa chỉ:</strong><br />
                  Số 2, Phạm Văn Đồng, Cầu Giấy, Hà Nội
                </div>
              </li>
              <li>
                <Mail size={20} className="contact-icon" />
                <div>
                  <strong>Email hỗ trợ/hợp tác:</strong><br />
                  <a href="mailto:xuantruongulis@gmail.com">xuantruongulis@gmail.com</a>
                </div>
              </li>
              <li>
                <Phone size={20} className="contact-icon" />
                <div>
                  <strong>Hotline (Đại diện - Vũ Xuân Trường):</strong><br />
                  <a href="tel:0964796430">0964796430</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ULIS Food Map. Dự án môn học Công nghệ thông tin và truyền thông.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
