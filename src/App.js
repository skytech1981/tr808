import React , { useState, Component } from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Tr808 from './pages/tr808';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";



function App() {
  const [currentVol, setCurrentVol] = useState(0.5);
  console.log(currentVol)
  return (
    <div>
        <Router>
         <nav>
          <ul className="menulist">
            <li className="li"><Link to="/home" style={{color:"white",paddingLeft: 13, textDecoration: 'none'}}>Home</Link></li>
            <li className="li"><Link to="/about" style={{color:"white",paddingLeft: 13, textDecoration: 'none'}}>About</Link></li>
            <li className="li"><Link to="/tr808" style={{color:"white",paddingLeft: 13, textDecoration: 'none'}}>Tr-808</Link></li>
         </ul>
      </nav> 
     
          <div className="main">
          <Route path="/" component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/tr808" exact /*component={Tr808}*/>
            <Tr808 currentVol={currentVol} callback={(volume) => setCurrentVol(volume)}/>
          </Route>
          
         </div>
         
  
    </Router>
    </div>
  );
}

export default App;