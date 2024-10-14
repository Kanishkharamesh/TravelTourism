import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GetStarted from './FirstPage/GetStarted';
import Destinations from './TravelNavbar/DestinationsPage/Destinations';
import Flights from './TravelNavbar/FlightsPage/Flights';
import Villas from './TravelNavbar/VillasPage/Villas';
import Goa from './TravelNavbar/VillasPage/Places/Goa';
import Mumbai from './TravelNavbar/VillasPage/Places/Mumbai';
import Delhi from './TravelNavbar/VillasPage/Places/Delhi';





import Hotels from './TravelNavbar/HotelsPage/Hotels';
import HGoa from './TravelNavbar/HotelsPage/Places/HGoa';
import HJaipur from './TravelNavbar/HotelsPage/Places/HJaipur';
import HOoty from './TravelNavbar/HotelsPage/Places/HOoty';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted/>}/>
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/flights" element={<Flights />} />
          
          <Route path="/villas" element={<Villas/>}/>
          <Route path="/villas/goa" element={<Goa/>}/>
          <Route path="/villas/mumbai" element={<Mumbai/>}/>
          <Route path="/villas/delhi" element={<Delhi/>}/>





          <Route path="/hotels" element={<Hotels/>}/>
          <Route path='/hotels/goa' element={<HGoa/>}/>
          <Route path='/hotels/jaipur' element={<HJaipur/>}/>
          <Route path='/hotels/ooty' element={<HOoty/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
