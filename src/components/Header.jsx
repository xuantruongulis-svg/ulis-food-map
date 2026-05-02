import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { name: 'Giới thiệu', href: '#benefits' },
    { name: 'Bản đồ', href: '#interactive-map' },
    { name: 'Hình ảnh', href: '#today-special' },
    { name: 'Đăng ký', href: '#feedback-form' },
    { name: 'Liên hệ', href: '#footer-contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo-wrapper">
          <div className="logo-circle">
            <img src="/logo.png" alt="ULIS Food Map Logo" className="header-logo" />
          </div>
          <div className="logo-copy">
            <span className="logo-text">ULIS FOOD MAP</span>
            <span className="logo-tagline">Mở bản đồ là biết ăn gì</span>
          </div>
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
          <a href="#feedback-form" className="btn btn-primary btn-sm nav-btn">
            Đăng ký tham gia
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
