import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GetStarted from './FirstPage/GetStarted';
import Destinations from './DestinationsPage/Destinations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted/>}/>
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
