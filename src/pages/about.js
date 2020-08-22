import React , { useState } from 'react';
import '../App.css';

function About() {



  return (
    <div className="aboutpage">
     <img className="fdtr808" src={ require('../pages/tr-8082.jpg') }/>
    <p className="about-title"> The Fasinating Journey of BeatBox</p>
    <h2 className="about-Desc">The TR-808 Software Synthesizer is a detailed replica of the legendary TR-808 . one of the most revered and sought-after electronic music instruments of all time. The plug-in version offers the sound and behavior of the original plus new features that virtually modify the hardware for more sound choices and faster, more fluid programming.</h2>
    </div>
  );
}

export default About;