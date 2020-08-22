import React , { useState } from 'react';
import '../App.css';



function Home() {



  return (
    <div className="homepage">
     <p className="home-title">BeatBox And Audio Documentry</p>
     
     <img className="imghome" src="https://flypaper.soundfly.com/wp-content/uploads/2016/08/808-facebook.png"/>
     <a href="https://www.roland.com/global/promos/roland_tr-808/" target="_blank"><img className="logo" src="https://www.kindpng.com/picc/m/781-7815787_thumb-image-roland-music-logo-png-transparent-png.png"/></a>
     <a href="https://reactjs.org"><img className="rjslogo" src={ require('../pages/rjslogo.png') }/></a>
     <a href="https://howlerjs.com"><img className="hjslogo" src={ require('../pages/howlerjs.png') }/></a>
    </div>
  );
}

export default Home;