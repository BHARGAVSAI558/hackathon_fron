import React from 'react';
import image1 from '../images/image7.png';
import image2 from '../images/property8.jpg';
import image4 from '../images/image4.png';
import image8 from '../images/image8.png';
import VILLAIMAGE from '../images/VILLAIMAGE.webp';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <p className="home-description">
        <b>
          <i>
            Discover your ideal home or investment property with us. Whether you're looking for a rental, a flat, a villa, or a plot of land, we have a range of options to suit your needs. Explore the sections below to find out more!
          </i>
        </b>
      </p>
      <div className="symbol-container">
        <img src={image8} alt="Logo" className="home-logo" />
      </div>
      <table className="home-table">
        <tbody>
          <tr>
            <td className="home-table-cell">
              <Link to="/rent">
                <div
                  className="image-container"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.07)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow =
                      '0 0 20px 5px rgba(0, 255, 255, 0.7), 0 0 20px 10px rgba(255, 0, 255, 0.7), 0 0 30px 10px rgba(255, 255, 0, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = 'grey';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                  }}
                >
                  <img src={image1} alt="Rental" className="home-image" />
                  <span className="image-label">Find Your Dream Rental</span>
                </div>
              </Link>
            </td>
            <td className="home-table-cell">
              <Link to="/flat">
                <div
                  className="image-container"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.07)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow =
                      '0 0 20px 5px rgba(0, 255, 255, 0.7), 0 0 20px 10px rgba(255, 0, 255, 0.7), 0 0 30px 10px rgba(255, 255, 0, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = 'grey';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                  }}
                >
                  <img src={image2} alt="Flat" className="home-image" />
                  <span className="image-label">Find Your Dream Flat</span>
                </div>
              </Link>
            </td>
            <td className="home-table-cell">
              <Link to="/villa">
                <div
                  className="image-container"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.07)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow =
                      '0 0 20px 5px rgba(0, 255, 255, 0.7), 0 0 20px 10px rgba(255, 0, 255, 0.7), 0 0 30px 10px rgba(255, 255, 0, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = 'grey';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                  }}
                >
                  <img src={VILLAIMAGE} alt="Villa" className="home-image" />
                  <span className="image-label">Find Your Dream Villa</span>
                </div>
              </Link>
            </td>
            <td className="home-table-cell">
              <Link to="/land">
                <div
                  className="image-container"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.07)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow =
                      '0 0 20px 5px rgba(0, 255, 255, 0.7), 0 0 20px 10px rgba(255, 0, 255, 0.7), 0 0 30px 10px rgba(255, 255, 0, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = 'grey';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                  }}
                >
                  <img src={image4} alt="Land" className="home-image" />
                  <span className="image-label">Find Your Dream Plot</span>
                </div>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;