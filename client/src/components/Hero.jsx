 
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this is from React Router v6
import './Hero.css';
import arrow_icon from '../images/arrow.png';
const Hero = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <p>WELCOME !!</p>
        <div>
          <div className="hero-hand-icon">
            <p>Find Your Dream Properties Here</p>
            <div className="log"></div>
          </div>
        </div>
        <div className="hero-latest-btn">
          <div>look out!</div>
          <img src={arrow_icon} alt="Arrow icon" />
        </div>
        </div>
      <div className="hero-right">
        <div className="zoom-card" onClick={handleImageClick}>
          <div className="card-front"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;