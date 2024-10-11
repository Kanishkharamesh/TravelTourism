import React, { useState } from 'react';
import './Flights.css';
import { Link } from 'react-router-dom';

// List of airport locations
const airportLocations = [
    "Delhi (DEL), Indira Gandhi International Airport",
    "Mumbai (BOM), Chhatrapati Shivaji International Airport",
    "Bangalore (BLR), Kempegowda International Airport",
    "Chennai (MAA), Chennai International Airport",
    "Kolkata (CCU), Netaji Subhas Chandra Bose International Airport",
    "Hyderabad (HYD), Rajiv Gandhi International Airport",
    "Ahmedabad (AMD), Sardar Vallabhbhai Patel International Airport",
    "Pune (PNQ), Pune Airport",
    "Goa (GOI), Goa International Airport",
    "Jaipur (JAI), Jaipur International Airport",
    "Kochi (COK), Cochin International Airport",
    "Lucknow (LKO), Chaudhary Charan Singh International Airport",
    "Bhubaneswar (BBS), Biju Patnaik International Airport",
    "Coimbatore (CJB), Coimbatore International Airport",
    "Mangalore (IXE), Mangalore International Airport",
    "Vadodara (BDQ), Vadodara Airport",
    "Surat (STV), Surat Airport",
    "Patna (PAT), Jay Prakash Narayan International Airport",
    "Ranchi (IXR), Birsa Munda Airport",
    "Dehradun (DED), Jolly Grant Airport",
    "Srinagar (SXR), Sheikh ul-Alam International Airport",
    // Add more airports up to 100 locations...
];

const Flights = () => {
    const [formData, setFormData] = useState({
        from: 'Delhi',
        to: 'Mumbai',
        departureDate: '',
        returnDate: '',
        travellers: 1,
        classType: 'Economy',
    });

    const [isFromDropdownVisible, setFromDropdownVisible] = useState(false);
    const [isToDropdownVisible, setToDropdownVisible] = useState(false);
    const [searchTermFrom, setSearchTermFrom] = useState('');
    const [searchTermTo, setSearchTermTo] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleToggle = () => {
        setFormData((prevState) => ({
            ...prevState,
            from: prevState.to,
            to: prevState.from,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert(`Searching flights from ${formData.from} to ${formData.to}`);
    };

    const filteredAirportsFrom = airportLocations.filter((location) =>
        location.toLowerCase().includes(searchTermFrom.toLowerCase())
    );

    const filteredAirportsTo = airportLocations.filter((location) =>
        location.toLowerCase().includes(searchTermTo.toLowerCase())
    );

    return (
        <div className="flights-page">
            {/* Breadcrumbs */}
            <br></br><br></br>
            <div className="flight-breadcrumbs">
                <Link to="/" className="flight-breadcrumb-link">
                    <b>Home</b>&nbsp;&nbsp;
                </Link>{' '}
                &gt; <span className="flight-current-page">&nbsp;&nbsp;<b>Flights</b></span>
            </div>

            

            <div className="flights-container">
                <div className="search-box">
                    <form onSubmit={handleSubmit}>
                        <h2>Search Flights</h2>
                        <br></br>
                        <div className="booking-form">
                            <div className="search-row">
                                {/* From */}
                                <div className="search-column background-box">
                                    <label>From</label>
                                    <div className="dropdown-container">
                                        <div
                                            className="dropdown-input"
                                            onClick={() => setFromDropdownVisible(!isFromDropdownVisible)}
                                        >
                                            {formData.from}
                                        </div>
                                        {isFromDropdownVisible && (
                                            <div className="dropdown-menu">
                                                <input
                                                    type="text"
                                                    placeholder="Search Airports"
                                                    value={searchTermFrom}
                                                    onChange={(e) => setSearchTermFrom(e.target.value)}
                                                    className="airport-search"
                                                />
                                                {filteredAirportsFrom.map((airport, index) => (
                                                    <div
                                                        key={index}
                                                        className="dropdown-item"
                                                        onClick={() => {
                                                            setFormData((prevState) => ({
                                                                ...prevState,
                                                                from: airport.split(",")[0],
                                                            }));
                                                            setFromDropdownVisible(false);
                                                        }}
                                                    >
                                                        {airport}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className='flight-toogle-btn'>
                                    <button type="button" className="toggle-button" onClick={handleToggle}>
                                        ↔️
                                    </button>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                
                                {/* To */}
                                <div className="search-column background-box">
                                    <label>To</label>
                                    <div className="dropdown-container">
                                        <div
                                            className="dropdown-input"
                                            onClick={() => setToDropdownVisible(!isToDropdownVisible)}
                                        >
                                            {formData.to}
                                        </div>
                                        {isToDropdownVisible && (
                                            <div className="dropdown-menu">
                                                <input
                                                    type="text"
                                                    placeholder="Search Airports"
                                                    value={searchTermTo}
                                                    onChange={(e) => setSearchTermTo(e.target.value)}
                                                    className="airport-search"
                                                />
                                                {filteredAirportsTo.map((airport, index) => (
                                                    <div
                                                        key={index}
                                                        className="dropdown-item"
                                                        onClick={() => {
                                                            setFormData((prevState) => ({
                                                                ...prevState,
                                                                to: airport.split(",")[0],
                                                            }));
                                                            setToDropdownVisible(false);
                                                        }}
                                                    >
                                                        {airport}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Departure Date */}
                                <div className="search-column background-box">
                                    <label>Departure</label>
                                    <input
                                        type="date"
                                        name="departureDate"
                                        value={formData.departureDate}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                {/* Return Date */}
                                <div className="search-column background-box">
                                    <label>Return</label>
                                    <input
                                        type="date"
                                        name="returnDate"
                                        value={formData.returnDate}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Travellers & Class */}
                                <div className="search-column background-box">
                                    <label>Travellers  & </label>
                                    <label>Class</label>
                                    <select
                                        name="classType"
                                        value={formData.classType}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Economy">Economy</option>
                                        <option value="Premium Economy">Premium Economy</option>
                                        <option value="Business">Business</option>
                                        <option value="First Class">First Class</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Discounts Section */}
                        <div className="discounts-section">
                            <h2>Available Discounts</h2>
                            <br></br>
                            <div className="discounts-row">
                                <div className="discount-column">
                                    <label>Discount 1</label>
                                    <p>10% off on international flights</p>
                                </div>
                                <div className="discount-column">
                                    <label>Discount 2</label>
                                    <p>15% off for group bookings</p>
                                </div>
                                <div className="discount-column">
                                    <label>Discount 3</label>
                                    <p>Free baggage for flights over $500</p>
                                </div>
                                <div className="discount-column">
                                    <label>Discount 4</label>
                                    <p>20% off for students</p>
                                </div>
                                <div className="discount-column">
                                    <label>Discount 5</label>
                                    <p>Free meal for first-class tickets</p>
                                </div>
                            </div>
                        </div>

                        <br></br>
                        <button type="submit" className="search-button">
                            Search
                        </button>
                        <br></br>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Flights;
