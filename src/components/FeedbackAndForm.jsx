import React, { useState } from 'react';
import { Star, Send, MapPin, CircleCheck } from 'lucide-react';
import './FeedbackAndForm.css';

const reviews = [
  { id: 1, img: '/spin-1.jpg', name: "Hải Anh", place: "Bún chân giò Cổng Sắt", rating: 5, text: "Thịt mềm, nước dùng siêu đậm đà!" },
  { id: 2, img: '/spin-2.jpg', name: "Minh Quân", place: "Cơm tấm Nhà C", rating: 4, text: "Sườn to bự chảng, cơm dẻo. Quá ổn áp." },
  { id: 3, img: '/spin-3.jpg', name: "Thu Hà", place: "Trà sữa ULIS", rating: 5, text: "Trân châu dai ngon, giá rẻ cực kỳ." },
  { id: 4, img: '/spin-4.jpg', name: "Đức Thịnh", place: "Bánh mì chảo", rating: 5, text: "Pate thơm phức, bánh mì giòn tan." },
  { id: 5, img: '/spin-5.jpg', name: "Mai Linh", place: "Phở bò Cổng Sắt", rating: 4, text: "Nước dùng thanh, ăn sáng rất hợp lý." },
  { id: 6, img: '/spin-6.jpg', name: "Hoàng Sơn", place: "Bún đậu mắm tôm", rating: 5, text: "Mắm tôm pha đỉnh, đậu rán giòn ngoài mềm trong." },
  { id: 7, img: '/spin-7.jpg', name: "Phương Thảo", place: "Nem nướng", rating: 5, text: "Rau sống nhiều và sạch, nem nướng siêu thơm." },
];

const FeedbackAndForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', activity: '', message: '' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', activity: '', message: '' });
  };

  return (
    <section id="feedback-form" className="section feedback-section">
      <div className="container">
        <div className="ff-grid">
          <div className="testimonials-col animate-fade-up">
            <h2 className="section-title text-left">Đánh Giá Từ Người Dùng</h2>
            <p className="section-subtitle text-left" style={{ marginInline: 0 }}>
              Khu vực phản hồi này cho thấy sản phẩm đã có nhận xét và cảm nhận từ những người đã trải nghiệm quán ăn hoặc sử dụng nội dung gợi ý trên trang.
            </p>
            <div className="slider-container">
              <div 
                className="slider-track" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((item) => (
                  <div key={item.id} className="review-slide">
                    <div className="review-card">
                      <div className="review-img-wrapper">
                        <img src={item.img} alt={item.place} className="review-img" />
                        <div className="review-place">
                          <MapPin size={14} /> <span>{item.place}</span>
                        </div>
                      </div>
                      <div className="review-content">
                        <div className="review-header">
                          <h4>{item.name}</h4>
                          <div className="stars">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} size={14} className="star-icon fill-primary" />
                            ))}
                          </div>
                        </div>
                        <p>"{item.text}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="form-col animate-fade-up delay-1">
            <div className="form-wrapper">
              <h3 className="form-title">Form Đăng Ký Tham Gia Hoạt Động</h3>
              <p className="form-desc">
                Người dùng có thể đăng ký tham gia đóng góp dữ liệu quán ăn, nhận thông báo địa điểm mới hoặc gửi đề xuất cải thiện cho ULIS Food Map.
              </p>

              <div className="registration-points">
                <span>Nhận thông tin cập nhật quán mới</span>
                <span>Đề xuất quán ăn yêu thích</span>
                <span>Tham gia cộng tác nội dung</span>
              </div>

              <form onSubmit={handleSubmit} className="ff-form">
                <div className="form-group">
                  <label htmlFor="name">Họ và tên</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="VD: Nguyễn Văn A"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="VD: email@vnu.edu.vn"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="activity">Hoạt động muốn tham gia</label>
                  <select
                    id="activity"
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Chọn một hoạt động</option>
                    <option value="contribute">Đóng góp địa điểm quán ăn</option>
                    <option value="updates">Nhận thông báo quán mới</option>
                    <option value="collaborator">Trở thành cộng tác viên nội dung</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Lời nhắn / Đề xuất quán</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="VD: Mình muốn đề xuất quán..."
                    rows="3"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full flex-center gap-2">
                  <span>Gửi Thông Tin</span>
                  <Send size={18} />
                </button>
              </form>

              {isSubmitted && (
                <div className="form-success" role="status">
                  <CircleCheck size={18} />
                  <span>Thông tin đăng ký đã được ghi nhận để trình bày trên landing page mẫu.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackAndForm;
