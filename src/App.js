import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GetStarted from './FirstPage.js/GetStarted';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
