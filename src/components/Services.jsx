import React, { useState, useCallback } from 'react';
import { Dices } from 'lucide-react';
import './Services.css';

const foodCards = [
  { id: 1, src: '/spin-1.jpg', name: 'Bún chân giò Hà Nội', price: '35k' },
  { id: 2, src: '/spin-2.jpg', name: 'Cơm tấm sườn', price: '40k' },
  { id: 3, src: '/spin-3.jpg', name: 'Trà sữa trân châu', price: '25k' },
  { id: 4, src: '/spin-4.jpg', name: 'Bánh mì chảo', price: '30k' },
  { id: 5, src: '/spin-5.jpg', name: 'Phở bò tái', price: '45k' },
  { id: 6, src: '/spin-6.jpg', name: 'Bún đậu mắm tôm', price: '40k' },
  { id: 7, src: '/spin-7.jpg', name: 'Nem nướng Nha Trang', price: '35k' },
];

const Services = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const totalCards = foodCards.length;

  const spin = useCallback(() => {
    if (isSpinning) return;
    setIsSpinning(true);

    // Quay nhanh qua nhiều thẻ rồi dừng lại
    let spins = 0;
    const totalSpins = 12 + Math.floor(Math.random() * 8); // 12-20 lần quay
    let speed = 80;

    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % totalCards);
      spins++;

      // Giảm tốc dần
      if (spins > totalSpins - 5) {
        speed += 80;
      }

      if (spins >= totalSpins) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, speed);

    // Cleanup nếu component unmount
    return () => clearInterval(interval);
  }, [isSpinning, totalCards]);

  // Tính vị trí của mỗi thẻ tương đối so với center
  const getCardStyle = (index) => {
    let offset = index - centerIndex;
    // Wrap around
    if (offset > Math.floor(totalCards / 2)) offset -= totalCards;
    if (offset < -Math.floor(totalCards / 2)) offset += totalCards;

    const absOffset = Math.abs(offset);

    if (absOffset > 3) {
      return { display: 'none' };
    }

    const translateX = offset * 100;
    const scale = 1 - absOffset * 0.15;
    const zIndex = 10 - absOffset;
    const opacity = 1 - absOffset * 0.25;
    const rotateY = offset * -8;

    return {
      transform: `translateX(${translateX}px) scale(${scale}) perspective(800px) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
      transition: isSpinning ? 'all 0.08s linear' : 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };
  };

  const currentFood = foodCards[centerIndex];

  return (
    <section id="features" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Quay Món Ăn Ngẫu Nhiên</h2>
        <p className="section-subtitle">
          Không biết hôm nay ăn gì? Hãy để vận may quyết định! Bấm nút và xem món ăn dành cho bạn.
        </p>

        <div className="spinner-wrapper animate-fade-up">
          {/* Vùng chứa các thẻ */}
          <div className="spinner-stage">
            {foodCards.map((card, index) => (
              <div
                key={card.id}
                className={`spin-card ${index === centerIndex ? 'spin-card-active' : ''}`}
                style={getCardStyle(index)}
              >
                <img src={card.src} alt={card.name} className="spin-card-img" />
                <div className="spin-card-overlay">
                  <span className="spin-card-name">{card.name}</span>
                  <span className="spin-card-price">{card.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Thông tin món đang chọn */}
          <div className={`spin-result ${!isSpinning ? 'visible' : ''}`}>
            <h3 className="spin-result-name">{currentFood.name}</h3>
            <span className="spin-result-price">~ {currentFood.price}</span>
          </div>

          {/* Nút quay */}
          <button
            className={`btn btn-primary btn-spin ${isSpinning ? 'spinning' : ''}`}
            onClick={spin}
            disabled={isSpinning}
          >
            <Dices size={24} className={isSpinning ? 'dice-animate' : ''} />
            {isSpinning ? 'Đang quay...' : 'Quay ngẫu nhiên!'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
