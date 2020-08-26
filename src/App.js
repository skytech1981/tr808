import React , { useState } from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Tr808 from './pages/tr808';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";

function App() {

  
  
  return (
    <Router>
       <nav>
          <ul className="menulist">
            <li className="li"><Link to="/" style={{color:"white",paddingLeft: 13, textDecoration: 'none'}}>Home</Link></li>
            <li className="li"><Link to="/about" style={{color:"white",paddingLeft: 13, textDecoration: 'none'}}>About</Link></li>
            <li className="li"><Link to="/tr808" style={{color:"white",paddingLeft: 13, textDecoration: 'none'}}>Tr-808</Link></li>
         </ul>
      </nav>   
        <div className="main">
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/tr808" exact component={Tr808}/>
        </div>
    </Router>
  );
}

export default App;