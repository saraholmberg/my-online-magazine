import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-border" />
      <nav className="footer-navigation">
        <ul className="navigation-list">
          <li className="navigation-item">FASHION</li>
          <li className="navigation-item">LIFESTYLE</li>
          <li className="navigation-item" style={{ fontWeight: 'bold' }}>CLIMATE</li>
          <li className="navigation-item">ABOUT</li>
          <li className="navigation-item">BEAUTY</li>
        </ul>
      </nav>
      <div className="footer-search-container">
        <p className="search-text">What do you want to read about?</p>
        <form className="footer-search-form">
          <input
            type="text"
            placeholder="Vad vill du läsa om nu?"
            className="footer-search-input"
          />
          <button type="submit" className="search-button">
            Sök
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

