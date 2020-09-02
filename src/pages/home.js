import React , { useState } from 'react';
import '../App.css';
import a from '../drums/fx2.wav';
import {Howl,Howler} from 'howler';
import Particles from 'react-particles-js';



const drumLoops =   [ 
  {intro:a}
  ]




class Home extends React.Component {
constructor(props){
  super(props);

 

  this.soundPlay= (src) => {

   
    const intro = new Howl({
  src: ['drumloop.webm', 'intro.mp3'],
  currentVol:Howler.volume(0.2)
     });

intro.play();
  
const sound= new Howl({
  src,
  loop:false,
  volume:0.5
  
})
sound.play();
}
 






}
keyPlay = () => {
    return drumLoops.map((soundObj, index) => {
return (
<>
<button className="keyPlay" onClick={this.soundPlay(soundObj.intro)}>click</button>
</>
)

})}

render(){
  return (
  <>
     <div className="homepage">
     <p className="home-title">The Legendary TR-808 Drum Machine <span>    ReactJs Edition</span></p>
     <img className="s" src={ require('../logo.svg') } />
     {/* <img className="imghome" src={ require('../pages/1.png') }/> */}
     <div className="slider"></div>
     <Particles className="parts"/>
     <a href="https://www.roland.com/global/promos/roland_tr-808/" target="_blank"><img className="logo" src="https://www.kindpng.com/picc/m/781-7815787_thumb-image-roland-music-logo-png-transparent-png.png"/></a>
     <a href="https://reactjs.org"><img className="rjslogo" src={ require('../pages/rjslogo.png') }/></a>
     <a href="https://howlerjs.com"><img className="hjslogo" src={ require('../pages/howlerjs.png') }/></a>
          {this.keyPlay()}
         </div>
      
    </>

   
  );
 }
}
export default Home;