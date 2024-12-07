import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this line
import './Navbar.css';
import plogo from './plogo.png';
import log from './log.png';

const pages = [
  { name: 'Home', path: '/home' },
  { name: 'Doc-Management', path: '/documentmanagement' },
  { name: 'Property-Upload', path: '/propertyupload' },
  { name: 'ChatBot', path: '/chatbot' },
  
];

const settings = [
  { name: 'Login/Register', path: '/login' },
  { name: 'Account', path: '/account' },
  { name: 'About', path: '/about' },
 
];

function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // Change this line

  const handleNavigate = (path) => {
    setShowUserMenu(false);
    setShowMenu(false);
    navigate(path); // Change this line
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={plogo} alt="Logo" onClick={() => navigate('/')} /> {/* Change this line */}
      </div>

      {/* Hamburger Menu for Mobile */}
      {isMobile && (
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      {/* Menu Buttons */}
      <div className={`navbar-menu ${showMenu ? 'show' : ''}`}>
        {pages.map((page) => (
          <button key={page.name} onClick={() => handleNavigate(page.path)}>
            {page.name}
          </button>
        ))}
      </div>

      {/* User Menu */}
      <div className="user-menu">
        <img
          src={log}
          alt="User"
          className="user-avatar"
          onClick={() => setShowUserMenu(!showUserMenu)}
        />
        <div className={`user-dropdown ${showUserMenu ? 'show' : ''}`}>
          {settings.map((setting) => (
            <div
              key={setting.name}
              className="user-dropdown-item"
              onClick={() => handleNavigate(setting.path)}
            >
              {setting.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
