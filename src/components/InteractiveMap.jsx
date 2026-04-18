import React, { useState } from 'react';
import { 
  MapPin, 
  Utensils, 
  Coffee, 
  CupSoda, 
  Sandwich, 
  Soup, 
  IceCream, 
  Pizza, 
  Flame,
  Dessert
} from 'lucide-react';
import './InteractiveMap.css';

const mapData = {
  'cong-sat': {
    title: 'Cổng sắt',
    locations: [
      { id: 12, name: 'Nem Nướng Nha Trang Anh Béo', type: 'Nem nướng', price: '30k - 45k', top: '38%', left: '30%', icon: Utensils },
      { id: 13, name: 'Okitoki', type: 'Trà sữa, kem', price: '25k - 50k', top: '20%', left: '54%', icon: IceCream },
      { id: 14, name: 'Tiệm Trà Bun', type: 'Trà chanh, trà tắc', price: '15k - 25k', top: '30%', left: '38%', icon: Coffee },
      { id: 15, name: 'Tiệm Vương Trà', type: 'Đồ uống', price: '20k - 40k', top: '44%', left: '22%', icon: Coffee },
      { id: 16, name: 'Nhất Quán', type: 'Cơm rang, mì xào', price: '30k - 50k', top: '44%', left: '60%', icon: Utensils },
      { id: 17, name: 'Quán Ngon Hải Yến', type: 'Cơm bình dân', price: '25k - 40k', top: '44%', left: '78%', icon: Utensils },
      { id: 18, name: 'San Tokboki', type: 'Đồ Hàn Quốc', price: '40k - 80k', top: '60%', left: '54%', icon: Flame },
      { id: 19, name: 'Mập Quán', type: 'Bún chả', price: '35k - 50k', top: '70%', left: '38%', icon: Soup },
      { id: 20, name: 'Cơm Bống A2', type: 'Cơm văn phòng', price: '30k - 50k', top: '60%', left: '70%', icon: Utensils },
      { id: 21, name: 'Chè Trang', type: 'Chè các loại', price: '15k - 25k', top: '80%', left: '38%', icon: Dessert },
      { id: 22, name: 'Bánh Mỳ Doner Kebab', type: 'Bánh mỳ', price: '20k - 30k', top: '80%', left: '54%', icon: Sandwich },
    ]
  },
  'toa-b3': {
    title: 'Tòa B3',
    locations: [
      { id: 1, name: 'Canteen Phúc Hưng', type: 'Cơm, bún', price: '25k - 40k', top: '68%', left: '25%', icon: Utensils },
      { id: 2, name: 'Trường Sa Quán', type: 'Đồ uống, ăn vặt', price: '15k - 30k', top: '68%', left: '36%', icon: CupSoda },
      { id: 3, name: 'Cây Xoài Quán', type: 'Nước ép, sinh tố', price: '20k - 35k', top: '50%', left: '42%', icon: CupSoda },
      { id: 4, name: 'TZone Food-Drink', type: 'Trà sữa, ăn vặt', price: '25k - 50k', top: '40%', left: '56%', icon: Coffee },
      { id: 5, name: 'Matcha Mee', type: 'Trà xanh, bánh', price: '30k - 55k', top: '68%', left: '56%', icon: Dessert },
      { id: 6, name: 'Bánh Mỳ Cô Huỳnh', type: 'Bánh mỳ các loại', price: '15k - 25k', top: '75%', left: '70%', icon: Sandwich },
    ]
  },
  'ktx': {
    title: 'Kí túc xá',
    locations: [
      { id: 7, name: 'YOLO', type: 'Đồ ăn nhanh', price: '20k - 45k', top: '15%', left: '42%', icon: Pizza },
      { id: 8, name: 'Nước Ép KTX', type: 'Nước ép trái cây', price: '15k - 25k', top: '35%', left: '42%', icon: CupSoda },
      { id: 23, name: 'MIXUE', type: 'Trà sữa, kem', price: '10k - 25k', top: '75%', left: '18%', icon: IceCream },
      { id: 9, name: 'Các Quán Bún', type: 'Bún bò, bún chả', price: '30k - 40k', top: '75%', left: '35%', icon: Soup },
      { id: 10, name: 'Chè Bên Trong', type: 'Chè thập cẩm', price: '15k - 20k', top: '75%', left: '62%', icon: Dessert },
      { id: 11, name: 'Chè Bên Lề', type: 'Chè Thái', price: '15k - 20k', top: '75%', left: '78%', icon: Dessert },
    ]
  }
};

const mapLayouts = {
  'cong-sat': (
    <div className="map-elements-container">
      {/* Nền cỏ xanh */}
      <div className="map-grass" style={{ top: '0', left: '0', width: '40%', height: '45%' }}></div>
      <div className="map-grass" style={{ top: '0', left: '52%', width: '36%', height: '45%' }}></div>
      <div className="map-grass" style={{ top: '58%', left: '0', width: '40%', height: '42%' }}></div>
      <div className="map-grass" style={{ top: '58%', left: '52%', width: '36%', height: '42%' }}></div>
      
      {/* Đường chính */}
      <div className="map-road" style={{ top: '0', left: '40%', width: '12%', height: '100%' }}>
        <div className="road-dashed-v"></div>
      </div>
      <div className="map-road" style={{ top: '45%', left: '0', width: '100%', height: '13%' }}>
        <div className="road-dashed-h"></div>
      </div>
      
      {/* Tên đường */}
      <div className="map-label" style={{ top: '0', left: '88%', width: '12%', height: '100%', writingMode: 'vertical-rl' }}>Đ. Trần Quốc Hoàn</div>
      <div className="map-label" style={{ top: '0', left: '0', width: '12%', height: '45%', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Khu Vực Cổng Sắt</div>

      {/* Cây xanh trang trí */}
      <div className="map-tree" style={{ top: '8%', left: '8%' }}>🌳</div>
      <div className="map-tree" style={{ top: '20%', left: '35%' }}>🌴</div>
      <div className="map-tree" style={{ top: '65%', left: '8%' }}>🌳</div>
      <div className="map-tree" style={{ top: '75%', left: '82%' }}>🌴</div>
      <div className="map-tree" style={{ top: '30%', left: '62%' }}>🌳</div>
    </div>
  ),
  'toa-b3': (
    <div className="map-elements-container">
      {/* Nền cỏ xanh phân chia bởi đường */}
      <div className="map-grass" style={{ top: '0', left: '0', width: '43%', height: '65%' }}></div>
      <div className="map-grass" style={{ top: '0', left: '55%', width: '45%', height: '65%' }}></div>
      <div className="map-grass" style={{ top: '85%', left: '0', width: '43%', height: '15%' }}></div>
      <div className="map-grass" style={{ top: '85%', left: '55%', width: '45%', height: '15%' }}></div>
      
      {/* Đường dọc chính */}
      <div className="map-road" style={{ top: '0', left: '43%', width: '12%', height: '100%' }}>
        <div className="road-dashed-v"></div>
      </div>
      {/* Đường ngang */}
      <div className="map-road" style={{ top: '65%', left: '0', width: '100%', height: '20%' }}>
        <div className="road-dashed-h"></div>
      </div>

      {/* Nhãn đường */}
      <div className="map-label" style={{ top: '0', left: '0', width: '8%', height: '65%', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Sân Trường</div>
      <div className="map-label" style={{ top: '90%', left: '55%', width: '45%', height: '10%' }}>Khu Canteen</div>

      {/* Toà nhà */}
      <div className="map-building b-purple" style={{ top: '5%', left: '56%', width: '15%', height: '25%' }}>B3</div>
      <div className="map-building b-purple" style={{ top: '5%', left: '78%', width: '18%', height: '25%' }}>C3</div>
      <div className="map-building b-purple" style={{ top: '35%', left: '60%', width: '18%', height: '22%' }}>C4</div>
      <div className="map-building b-orange" style={{ top: '10%', left: '10%', width: '28%', height: '35%' }}>G3</div>
      <div className="map-building b-orange" style={{ top: '50%', left: '10%', width: '28%', height: '12%' }}>E2</div>

      {/* Cây xanh */}
      <div className="map-tree" style={{ top: '5%', left: '5%' }}>🌳</div>
      <div className="map-tree" style={{ top: '48%', left: '5%' }}>🌴</div>
      <div className="map-tree" style={{ top: '5%', left: '50%' }}>🌳</div>
      <div className="map-tree" style={{ top: '35%', left: '82%' }}>🌴</div>
      <div className="map-tree" style={{ top: '60%', left: '35%' }}>🌳</div>
      <div className="map-tree" style={{ top: '90%', left: '40%' }}>🌴</div>
      <div className="map-tree" style={{ top: '90%', left: '90%' }}>🌳</div>
    </div>
  ),
  'ktx': (
    <div className="map-elements-container">
      {/* Nền cỏ xanh - 4 ô chia bởi đường chữ thập */}
      <div className="map-grass" style={{ top: '0', left: '0', width: '42%', height: '58%' }}></div>
      <div className="map-grass" style={{ top: '0', left: '58%', width: '42%', height: '58%' }}></div>
      <div className="map-grass" style={{ top: '78%', left: '0', width: '42%', height: '22%' }}></div>
      <div className="map-grass" style={{ top: '78%', left: '58%', width: '42%', height: '22%' }}></div>
      
      {/* Đường dọc */}
      <div className="map-road" style={{ top: '0', left: '42%', width: '16%', height: '58%' }}>
        <div className="road-dashed-v"></div>
      </div>
      {/* Đường ngang lớn */}
      <div className="map-road" style={{ top: '58%', left: '0', width: '100%', height: '20%' }}>
        <div className="road-dashed-h"></div>
      </div>

      {/* Nhãn đường */}
      <div className="map-label" style={{ top: '60%', left: '0', width: '15%', height: '15%' }}>🅿️ Bãi xe</div>
      <div className="map-label" style={{ top: '0', left: '88%', width: '12%', height: '58%', writingMode: 'vertical-rl' }}>Đ. Xuân Thủy</div>

      {/* Toà nhà KTX */}
      <div className="map-building b-purple" style={{ top: '8%', left: '8%', width: '28%', height: '42%' }}>KTX B</div>
      <div className="map-building b-purple" style={{ top: '8%', left: '62%', width: '22%', height: '42%' }}>KTX A</div>
      <div className="map-building b-orange" style={{ top: '82%', left: '62%', width: '22%', height: '14%' }}>Nhà Ăn</div>

      {/* Đài phun nước / sân chơi */}
      <div className="map-tree" style={{ top: '25%', left: '48%', fontSize: '2rem' }}>⛲</div>

      {/* Cây xanh */}
      <div className="map-tree" style={{ top: '5%', left: '4%' }}>🌳</div>
      <div className="map-tree" style={{ top: '5%', left: '56%' }}>🌳</div>
      <div className="map-tree" style={{ top: '45%', left: '38%' }}>🌴</div>
      <div className="map-tree" style={{ top: '85%', left: '4%' }}>🌳</div>
      <div className="map-tree" style={{ top: '85%', left: '50%' }}>🌴</div>
      <div className="map-tree" style={{ top: '92%', left: '90%' }}>🌳</div>
    </div>
  )
};

const InteractiveMap = () => {
  const [activeMap, setActiveMap] = useState('cong-sat');

  const currentMap = mapData[activeMap];

  return (
    <section id="interactive-map" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Bản Đồ Ẩm Thực</h2>
        <p className="section-subtitle">
          Khám phá các quán ăn quanh khu vực ULIS. Chọn phân khu và di chuột vào các biểu tượng để xem thông tin quán.
        </p>

        <div className="map-selector">
          {Object.entries(mapData).map(([key, data]) => (
            <button
              key={key}
              className={`btn ${activeMap === key ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveMap(key)}
            >
              {data.title}
            </button>
          ))}
        </div>

        <div className="map-container animate-fade-up">
          <div className="map-wrapper">
            {/* Render minimalist CSS map layout */}
            {mapLayouts[activeMap]}
            
            {currentMap.locations.map((loc) => {
              const IconComponent = loc.icon || MapPin;
              
              return (
                <div 
                  key={loc.id}
                  className="map-pin"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="pin-icon-wrapper">
                    <IconComponent className="pin-icon" size={28} />
                    <div className="pin-pulse"></div>
                  </div>
                  
                  <div className="pin-tooltip">
                    <h4>{loc.name}</h4>
                    <span className="tooltip-type">{loc.type}</span>
                    <span className="tooltip-price">{loc.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
