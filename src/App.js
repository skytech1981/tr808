import React , { useState } from 'react';
import logo from './science-fiction.svg';
import logo2 from './logo.svg';
import './App.css';
import Beatbox from './pages/beatbox';
import Home from './pages/home';
import About from './pages/about';
function App() {

  return (
    <div className="main">
      <Home/>
      <About/>
       <Beatbox/>
    </div>
  );
}

export default App;