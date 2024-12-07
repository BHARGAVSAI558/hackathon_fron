import React from 'react';
import './Footer.css';
import plogo from './plogo.png';
import instagramIcon from '../images/insta.png';
import whatsappIcon from '../images/what.png';
import pinterestIcon from '../images/pin.png';

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section: Logo and Navigation */}
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={plogo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav" >
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/termsofservice">Terms of Service</a>
          <a href="/privacypolicy">Privacy Policy</a>
        </nav>
      </div>

      {/* Social Media Icons */}
      <div className="footer-icons">
        <img
          src={instagramIcon}
          alt="Instagram"
          onClick={() => window.open('https://www.instagram.com/psrm.in?igsh=NWwwcjV6d3k0OWV1', '_blank')}
        />
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          onClick={() => window.open('https://www.whatsapp.com', '_blank')}
        />
        <img
          src={pinterestIcon}
          alt="Pinterest"
          onClick={() => window.open('https://www.pinterest.com', '_blank')}
        />
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        © 2024 Property Sale and Rental Management. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
