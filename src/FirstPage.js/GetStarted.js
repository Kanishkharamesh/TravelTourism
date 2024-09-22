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
          <img src="https://pixabay.com/photos/landscape-sea-cliffs-church-rocks-7115513/" alt="Destination 1" />
        </div>
        <div>
          <img src="https://pixabay.com/photos/maldives-tropics-tropical-1993704/" alt="Destination 2" />
        </div>
        <div>
          <img src="https://pixabay.com/photos/to-stage-surf-breakwater-beach-7345735/" alt="Destination 3" />
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
