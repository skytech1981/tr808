import React , { useState } from 'react';
import '../App.css';



function Home() {



  return (
    <div className="homepage">
     <p className="home-title">BeatBox And Audio Documentry</p>
     <img className="imghome" src="https://flypaper.soundfly.com/wp-content/uploads/2016/08/808-facebook.png"/>
     <img className="logo" src="https://www.kindpng.com/picc/m/781-7815787_thumb-image-roland-music-logo-png-transparent-png.png"/>
     <img className="rjslogo" src={ require('../pages/rjslogo.png') }/>
    </div>
  );
}

export default Home;