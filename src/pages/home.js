import React , { useState } from 'react';
import '../App.css';
import Particles from 'react-particles-js';

function Home() {


  return (
  <>
     <div className="homepage">
     <p className="home-title">The Legendary TR-808 Drum Machine <span>    ReactJs Edition</span></p>
     <img className="s" src={ require('../logo.svg') } />
     <img className="imghome" src="https://flypaper.soundfly.com/wp-content/uploads/2016/08/808-facebook.png"/>
     <Particles className="parts"/>
     <a href="https://www.roland.com/global/promos/roland_tr-808/" target="_blank"><img className="logo" src="https://www.kindpng.com/picc/m/781-7815787_thumb-image-roland-music-logo-png-transparent-png.png"/></a>
     <a href="https://reactjs.org"><img className="rjslogo" src={ require('../pages/rjslogo.png') }/></a>
     <a href="https://howlerjs.com"><img className="hjslogo" src={ require('../pages/howlerjs.png') }/></a>
         </div>
      
    </>

   
  );
}

export default Home;