import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Hôm nay ăn gì', href: '#features' },
    { name: 'Cộng đồng', href: '#community' },
    { name: 'Đánh giá', href: '#feedback-form' },
    { name: 'Về chúng tôi', href: '#about' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo-wrapper">
          <div className="logo-circle">
            <img src="/logo.png" alt="ULIS Food Map Logo" className="header-logo" />
          </div>
          <span className="logo-text">ULIS FOOD MAP</span>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#features" className="btn btn-primary btn-sm nav-btn">
            Khám phá ngay
          </a>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
