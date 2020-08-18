import React , { useState } from 'react';
import logo from './science-fiction.svg';
import logo2 from './logo.svg';
import './App.css';
import Beatbox from './pages/beatbox';
import Home from './pages/home';
import About from './pages/about';
import {Route, BrowserRouter as Router} from "react-router-dom";
function App() {

  return (
    <Router>



   
    <div className="main">
      <Route path="/home" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/beatbox" exact component={Beatbox}/>
     
    </div>
    </Router>
  );
}

export default App;