import React from 'react';
import './GetStarted.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GetStarted = () => {
  return (
    <div className="travel-page">
      {/* Logo at the top left */}
      <div className="travel-logo">
        <img src="/path-to-logo.png" alt="Travel Logo" />
      </div>

      {/* Login and Signup buttons at the top right */}
      <div className="travel-auth-buttons">
        <button className="travel-login-btn">Login</button>
        <button className="travel-signup-btn">Sign Up</button>
      </div>

      {/* Carousel for background images */}
      <Carousel
        className="travel-carousel"
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img src="https://images.pexels.com/photos/18077985/pexels-photo-18077985/free-photo-of-venice-italy-the-grand-canal-the-doge-s-palace-and-the-bell-tower-of-the-basilica-di-san-marco.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Destination 1" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg" alt="Destination 2" />
        </div>
        <div>
          <img src="" alt="Destination 3" />
        </div>
      </Carousel>

      {/* Get Started button at the center */}
      <div className="travel-getstarted-container">
        <button className="travel-getstarted-btn">Get Started</button>
      </div>
    </div>
  );
};

export default GetStarted;
