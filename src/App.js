import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GetStarted from './FirstPage/GetStarted';
import Destinations from './TravelNavbar/DestinationsPage/Destinations';
import Flights from './TravelNavbar/FlightsPage/Flights'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted/>}/>
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/flights" element={<Flights />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
