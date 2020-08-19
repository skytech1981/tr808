import React , { useState } from 'react';
import logo from './science-fiction.svg';
import logo2 from './logo.svg';
import './App.css';
import Beatbox from './pages/beatbox';
import Home from './pages/home';
import About from './pages/about';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Sequencer from './pages/sequencer';


function App() {

  return (
    <Router>
     
   <nav>
     <ul className="menulist">
         <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/beatbox">Beatbox</Link></li>
        <li><Link to="/Sequencer">Sequencer</Link></li>
     </ul>
   </nav>   
    <div className="main">
      <Route path="/home" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/beatbox" exact component={Beatbox}/>
      <Route path="/sequencer" exact component={Sequencer}/>
    </div>
    </Router>
  );
}

export default App;