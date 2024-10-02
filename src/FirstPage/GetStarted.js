// src/FirstPage/GetStarted.js
import React, { useState, useEffect, useRef } from 'react';
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
  FaExchangeAlt,
} from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const airportOptions = [
  { code: 'DEL', name: 'Delhi Airport, India' },
  { code: 'BOM', name: 'Mumbai Airport, India' },
  { code: 'LHR', name: 'London Heathrow, UK' },
  { code: 'BLR', name: 'Bengaluru International Airport, India' },
  { code: 'MAA', name: 'Chennai Airport, India' },
  { code: 'DXB', name: 'Dubai International, UAE' },
  // Add more airports as needed
];

const GetStarted = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [travellers, setTravellers] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    class: 'Economy',
  });
  const [fromAirport, setFromAirport] = useState('DEL');
  const [toAirport, setToAirport] = useState('BLR');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const travellerRef = useRef();
  const departureRef = useRef();
  const returnRef = useRef();

  useEffect(() => {
    setShowReturnDate(tripType === 'roundTrip');
    if (tripType !== 'roundTrip') {
      setReturnDate('');
    }
  }, [tripType]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        travellerRef.current &&
        !travellerRef.current.contains(event.target)
      ) {
        setShowTravellerDropdown(false);
      }
      if (
        departureRef.current &&
        !departureRef.current.contains(event.target)
      ) {
        setShowDeparturePicker(false);
      }
      if (returnRef.current && !returnRef.current.contains(event.target)) {
        setShowReturnPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTripTypeChange = (e) => {
    const selectedTripType = e.target.value;
    setTripType(selectedTripType);
  };

  const handleTravellerChange = (e) => {
    const { name, value } = e.target;
    setTravellers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwap = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  const handleApplyTravellers = () => {
    setShowTravellerDropdown(false);
  };

  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    return { day, month, year, weekday };
  };

  const departureDisplay = formatDateDisplay(departureDate);
  const returnDisplay = formatDateDisplay(returnDate);

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
              <a href="#destinations" className="travel-nav-link">
                <FaMapMarkedAlt
                  className="nav-icon"
                  aria-label="Destinations Icon"
                />
                Destinations
              </a>
              <a href="#flights" className="travel-nav-link">
                <FaPlane
                  className="nav-icon"
                  aria-label="Flights Icon"
                />
                Flights
              </a>
              <a href="#hotels" className="travel-nav-link">
                <FaHotel className="nav-icon" aria-label="Hotels Icon" />
                Hotels
              </a>
              <a href="#homestays" className="travel-nav-link">
                <FaHome
                  className="nav-icon"
                  aria-label="Homestays & Villas Icon"
                />
                Villas
              </a>
              <a href="#vacation-packages" className="travel-nav-link">
                <FaSuitcaseRolling
                  className="nav-icon"
                  aria-label="Vacation Packages Icon"
                />
                Holiday Packages
              </a>
              {/* Merged Additional Links */}
              <a href="#train" className="travel-nav-link">
                <FaTrain className="nav-icon" aria-label="Train Icon" />
                Train
              </a>
              <a href="#bus" className="travel-nav-link">
                <FaBus className="nav-icon" aria-label="Bus Icon" />
                Bus
              </a>
              <br></br>
              <a href="#cab-taxi" className="travel-nav-link">
                <FaTaxi className="nav-icon" aria-label="Cab/Taxi Icon" />
                Cab
              </a>
              <br></br>
              <a href="#money-exchange" className="travel-nav-link">
                <FaMoneyCheckAlt
                  className="nav-icon"
                  aria-label="Money Exchange Icon"
                />
                Money Exchange
              </a>
              <a href="#travel-insurance" className="travel-nav-link">
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
          <p className="travel-subtitle">BEST DESTINATIONS AROUND THE WORLD</p>
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
      <div className="travel-radio-box">
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
      </div>

      {/* Booking Form */}
      <div className="travel-booking-container">
        <div className="travel-booking-form">
          <div className="booking-row">
            {/* From Section */}
            <div className="booking-column">
              <h3>From</h3>
              <div className="booking-location-picker">
                <strong className="city-name">
                  {airportOptions.find((a) => a.code === fromAirport)?.code}{' '}
                  {airportOptions.find((a) => a.code === fromAirport)?.name.split(',')[0]}
                </strong>
                <p className="airport-code">
                  {fromAirport},{' '}
                  {
                    airportOptions.find((a) => a.code === fromAirport)?.name
                  }
                </p>
                <select
                  value={fromAirport}
                  onChange={(e) => setFromAirport(e.target.value)}
                  className="location-dropdown"
                  aria-label="From Airport"
                >
                  {airportOptions.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.code} - {airport.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Toggle Button */}
            <div className="booking-column toggle-column">
              <button
                className="swap-button"
                onClick={handleSwap}
                aria-label="Swap From and To"
              >
                <FaExchangeAlt size={24} />
              </button>
            </div>

            {/* To Section */}
            <div className="booking-column">
              <h3>To</h3>
              <div className="booking-location-picker">
                <strong className="city-name">
                  {airportOptions.find((a) => a.code === toAirport)?.code}{' '}
                  {airportOptions.find((a) => a.code === toAirport)?.name.split(',')[0]}
                </strong>
                <p className="airport-code">
                  {toAirport},{' '}
                  {
                    airportOptions.find((a) => a.code === toAirport)?.name
                  }
                </p>
                <select
                  value={toAirport}
                  onChange={(e) => setToAirport(e.target.value)}
                  className="location-dropdown"
                  aria-label="To Airport"
                >
                  {airportOptions.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.code} - {airport.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Departure Date */}
            <div className="booking-column" ref={departureRef}>
              <h3>Departure</h3>
              <div
                className="date-picker-container"
                onClick={() => setShowDeparturePicker(!showDeparturePicker)}
              >
                <IoMdArrowDropdown className="dropdown-icon" />
                <div className="date-display">
                  <span className="date-number">
                    {departureDisplay.day || 'DD'}
                  </span>
                  <span className="date-month">
                    {departureDisplay.month
                      ? `${departureDisplay.month}'${departureDisplay.year}`
                      : 'MMM\'YY'}
                  </span>
                </div>
                <span className="day-info">
                  {departureDisplay.weekday || 'Day'}
                </span>
              </div>
              {showDeparturePicker && (
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="date-input"
                />
              )}
            </div>

            {/* Return Date (Only for Round Trip) */}
            {showReturnDate && (
              <div className="booking-column" ref={returnRef}>
                <h3>Return</h3>
                <div
                  className="date-picker-container"
                  onClick={() => setShowReturnPicker(!showReturnPicker)}
                >
                  <IoMdArrowDropdown className="dropdown-icon" />
                  <div className="date-display">
                    <span className="date-number">
                      {returnDisplay.day || 'DD'}
                    </span>
                    <span className="date-month">
                      {returnDisplay.month
                        ? `${returnDisplay.month}'${returnDisplay.year}`
                        : 'MMM\'YY'}
                    </span>
                  </div>
                  <span className="day-info">
                    {returnDisplay.weekday || 'Day'}
                  </span>
                  {returnDate && (
                    <button
                      className="cancel-return-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setReturnDate('');
                      }}
                      aria-label="Cancel Return Date"
                    >
                      &times;
                    </button>
                  )}
                </div>
                {showReturnPicker && (
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="date-input"
                  />
                )}
              </div>
            )}

            {/* Traveller and Class Selection */}
            <div className="booking-column traveller-column" ref={travellerRef}>
              <h3>Travellers & Class</h3>
              <div
                className="traveller-selector"
                onClick={() => setShowTravellerDropdown(!showTravellerDropdown)}
              >
                <IoMdArrowDropdown className="dropdown-icon" />
                <span className="traveller-text">
                  {travellers.adults} Adult(s), {travellers.children} Child(ren), {travellers.infants} Infant(s) - {travellers.class}
                </span>
              </div>
              {showTravellerDropdown && (
                <div className="traveller-dropdown">
                  <div className="traveller-section">
                    <label htmlFor="adults">Adults</label>
                    <input
                      type="number"
                      name="adults"
                      id="adults"
                      value={travellers.adults}
                      onChange={handleTravellerChange}
                      min="1"
                    />
                  </div>
                  <div className="traveller-section">
                    <label htmlFor="children">Children</label>
                    <input
                      type="number"
                      name="children"
                      id="children"
                      value={travellers.children}
                      onChange={handleTravellerChange}
                      min="0"
                    />
                  </div>
                  <div className="traveller-section">
                    <label htmlFor="infants">Infants</label>
                    <input
                      type="number"
                      name="infants"
                      id="infants"
                      value={travellers.infants}
                      onChange={handleTravellerChange}
                      min="0"
                    />
                  </div>
                  <div className="class-section">
                    <label htmlFor="class">Class</label>
                    <select
                      name="class"
                      id="class"
                      value={travellers.class}
                      onChange={handleTravellerChange}
                    >
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First">First Class</option>
                    </select>
                  </div>
                  <button
                    className="apply-travellers-btn"
                    onClick={handleApplyTravellers}
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Apply Button */}
          <div className="apply-button-container">
            <button className="apply-button">Apply</button>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="get-started-button-container">
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default GetStarted;
