import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GetStarted from './FirstPage/GetStarted';
import Destinations from './TravelNavbar/DestinationsPage/Destinations';
import Flights from './TravelNavbar/FlightsPage/Flights';
import Hotels from './TravelNavbar/HotelsPage/Hotels';
import Villas from './TravelNavbar/VillasPage/Villas';
import HotelDetails from './TravelNavbar/HotelsPage/HotelDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted/>}/>
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/villas" element={<Villas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
