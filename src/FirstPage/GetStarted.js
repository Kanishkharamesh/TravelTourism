// src/FirstPage/GetStarted.js
import React from 'react';
import './GetStarted.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  FaMapMarkedAlt,
  FaPlane,
  FaHotel,
  FaHome,
  FaSuitcaseRolling,
  FaTrain,
  FaBus,
  FaTaxi,
  FaMoneyCheckAlt,
  FaShieldAlt,
} from 'react-icons/fa';

const GetStarted = () => {

  return (
    <div className="travel-page">
      {/* Combined Header Container */}
      <header className="travel-header">
        {/* Navigation Bar */}
        <nav className="travel-navbar">
          <div className="travel-navbar-container">
            {/* Left Side: Logo */}
            <div className="travel-navbar-left">
              <div className="travel-logo-img">
                {/* <img src="/images/logo.png" alt="TravelPie Logo" /> */}
              </div>
              <div className="travel-logo-text">
                <span className="travel-logo-text">TravelPie</span>
              </div>
            </div>

            {/* Center: Navigation Links */}
            <div className="travel-navbar-center">
              <a href="/destinations" className="travel-nav-link">
                <FaMapMarkedAlt
                  className="nav-icon"
                  aria-label="Destinations Icon"
                  />
                Destinations
              </a>
              <a href="/flights" className="travel-nav-link">
                <FaPlane
                  className="nav-icon"
                  aria-label="Flights Icon"
                />
                Flights
              </a>
              <a href="/hotels" className="travel-nav-link">
                <FaHotel className="nav-icon" aria-label="Hotels Icon" />
                Hotels
              </a>
              <a href="/villas" className="travel-nav-link">
                <FaHome
                  className="nav-icon"
                  aria-label="Homestays & Villas Icon"
                />
                Villas
              </a>
              <a href="/vacation-packages" className="travel-nav-link">
                <FaSuitcaseRolling
                  className="nav-icon"
                  aria-label="Vacation Packages Icon"
                />
                Holiday Packages
              </a>
              <a href="/train" className="travel-nav-link">
                <FaTrain className="nav-icon" aria-label="Train Icon" />
                Train
              </a>
              <a href="/bus" className="travel-nav-link">
                <FaBus className="nav-icon" aria-label="Bus Icon" />
                Bus
              </a>
              <br></br>
              <a href="/cab-taxi" className="travel-nav-link">
                <FaTaxi className="nav-icon" aria-label="Cab/Taxi Icon" />
                Cab
              </a>
              <br></br>
              <a href="/money-exchange" className="travel-nav-link">
                <FaMoneyCheckAlt
                  className="nav-icon"
                  aria-label="Money Exchange Icon"
                />
                Money Exchange
              </a>
              <a href="/travel-insurance" className="travel-nav-link">
                <FaShieldAlt
                  className="nav-icon"
                  aria-label="Travel Insurance Icon"
                />
                Travel Insurance
              </a>
            </div>

            {/* Right Side: Buttons and Selector */}
            <div className="travel-navbar-right">
              <select
                className="travel-language-selector"
                defaultValue="EN"
                aria-label="Language Selector"
              >
                <option value="EN">EN</option>
                <option value="ES">ES</option>
                <option value="FR">FR</option>
                <option value="DE">DE</option>
              </select>
              <button className="travel-login-btn">Login</button>
              <button className="travel-signup-btn">Sign Up</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="travel-main-content">
        <div className="travel-text-section">
          <br></br>
          <p className="travel-subtitle">BEST DESTINATIONS AROUND THE WORLD</p>
          <br></br>
          <h1 className="travel-title">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="travel-description">
            Travelers find joy in exploring new places, experiencing different
            cultures, and discovering hidden beauty. Whether it’s relaxing by
            the beach or walking through vibrant cities, every journey offers
            something unique and exciting.
          </p>
          <button className="travel-findout-btn">Find out more</button>
        </div>
        <div className="travel-carousel-container">
          <Carousel
            className="travel-carousel"
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            interval={5000}
            transitionTime={600}
            swipeable
            emulateTouch
            dynamicHeight={false}
          >
            <div className="carousel-slide">
              <img
                src="https://th.bing.com/th/id/R.bf0c4b12ad0940c813ee24fad8d5d52d?rik=Qk7fu66Bbmhv1w&riu=http%3a%2f%2fmedia4.onsugar.com%2ffiles%2f2014%2f02%2f17%2f838%2fn%2f1922441%2ff0bd144ded7b1bfd_shutterstock_89720368.jpg.xxxlarge_2x.jpg&ehk=fUmcMGiEracjw25Rik1ns8A1fL7txR4m1agzy%2bHZHsI%3d&risl=&pid=ImgRaw&r=0"
                alt="Destination 1"
              />
            </div>
            <div className="carousel-slide">
              <img
                src="https://tourismteacher.com/wp-content/uploads/2020/09/pexels-photo-753626.jpeg"
                alt="Destination 2"
              />
            </div>
            <div className="carousel-slide">
              <img
                src="https://www.thetopvillas.com/blog/wp-content/uploads/2020/01/shutterstock_380725909-1-1140x760.jpg"
                alt="Destination 3"
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Radio Button Box */}
      {/*<div className="travel-radio-box">
        <label className="travel-radio-label">
          <input
            type="radio"
            name="tripType"
            value="oneWay"
            checked={tripType === 'oneWay'}
            onChange={handleTripTypeChange}
          />
          One Way
        </label>
        <label className="travel-radio-label">
          <input
            type="radio"
            name="tripType"
            value="roundTrip"
            checked={tripType === 'roundTrip'}
            onChange={handleTripTypeChange}
          />
          Round Trip
        </label>
        <label className="travel-radio-label">
          <input
            type="radio"
            name="tripType"
            value="multiCity"
            checked={tripType === 'multiCity'}
            onChange={handleTripTypeChange}
          />
          Multi-City
        </label>
      </div>*/}
    </div>
  );
};

export default GetStarted;
