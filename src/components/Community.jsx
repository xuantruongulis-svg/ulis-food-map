import React, { useState } from 'react';
import { ThumbsUp } from 'lucide-react';
import './Community.css';

const Community = () => {
  const [votes, setVotes] = useState({ congSat: 65, nhaC: 35 });

  const handleVote = (place) => {
    if (place === 'congSat') {
      setVotes({ congSat: votes.congSat + 1, nhaC: votes.nhaC });
    } else {
      setVotes({ congSat: votes.congSat, nhaC: votes.nhaC + 1 });
    }
  };

  const totalVotes = votes.congSat + votes.nhaC;
  const congSatPercent = Math.round((votes.congSat / totalVotes) * 100);
  const nhaCPercent = 100 - congSatPercent;

  return (
    <section id="community" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Góc Cộng Đồng</h2>
        <p className="section-subtitle">
          Cùng bình chọn cho khu vực ẩm thực yêu thích nhất của sinh viên ULIS.
        </p>

        <div className="community-flex-container animate-fade-up">
          {/* Ảnh bên trái */}
          <div className="community-image-side">
            <img 
              src="/community-poll.jpg" 
              alt="ULIS Food Community" 
              className="poll-side-img"
            />
            <div className="image-overlay-text">
              <h4>ULIS Choice</h4>
              <p>Tiếng nói của thực thần</p>
            </div>
          </div>

          {/* Nội dung bình chọn bên phải */}
          <div className="community-poll-side">
            <div className="card-icon-header">
              <ThumbsUp className="icon-primary" />
              <h3>Đại chiến Thánh Địa Ẩm Thực</h3>
            </div>
            <p className="poll-desc">Tháng này, khu vực nào đang chiếm trọn trái tim (và bao tử) của bạn? Hãy để lại một phiếu bầu cho "chân ái" của mình nhé!</p>
            
            <div className="vote-container">
              <div className="vote-bar-wrapper">
                <div className="vote-labels">
                  <span className="place-name">Cổng Sắt</span>
                  <span className="place-percent">{congSatPercent}%</span>
                </div>
                <div className="vote-bar-bg">
                  <div className="vote-bar-fill" style={{ width: `${congSatPercent}%` }}></div>
                </div>
                <button onClick={() => handleVote('congSat')} className="btn btn-primary btn-sm w-full">
                  Bình chọn Cổng Sắt
                </button>
              </div>

              <div className="vote-bar-wrapper mt-6">
                <div className="vote-labels">
                  <span className="place-name">Nhà C / Canteen</span>
                  <span className="place-percent">{nhaCPercent}%</span>
                </div>
                <div className="vote-bar-bg">
                  <div className="vote-bar-fill fill-secondary" style={{ width: `${nhaCPercent}%` }}></div>
                </div>
                <button onClick={() => handleVote('nhaC')} className="btn btn-outline btn-sm w-full">
                  Bình chọn Canteen
                </button>
              </div>
            </div>

            <div className="poll-footer mt-6">
              <p>Tổng số lượt bình chọn: <strong>{totalVotes}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
