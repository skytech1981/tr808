import React ,{Component}from 'react';
import Kick from '../drums/kickdrum.wav';
import Snare from '../drums/snare.wav';
import clap from '../drums/clap.wav';
import chihat from '../drums/chihat.wav';
import ride from '../drums/ride.wav';
import shake from '../drums/shake.wav';
import tom from '../drums/tom.wav';
import cowba from '../drums/cowba.wav';
import clave from '../drums/clave.wav';
import congalo from '../drums/congalo.wav';
import snaree from '../drums/snaree.wav';
import softhit from '../drums/softhit.wav';
import tropicalclap from '../drums/tropicalclap.wav';
import Perc from '../drums/Perc.wav';
import shot from '../drums/shot.wav';
import hatt from '../drums/hatt.wav';

import {Howl,Howler} from 'howler';

import '../pages/sequencer.css';


const audioClips =   [
                      {sound:Kick,label:"",id:1},
                      {sound:Snare,label:"",id:2},
                      {sound:chihat,label:"",id:3},
                      {sound:clap,label:"",id:4},
                     ]
const audioClips2 =  [
                      {sound:ride,label:"",id:5},
                      {sound:shake,label:"",id:6},
                      {sound:tom,label:"",id:7},
                      {sound:cowba,label:"",id:8},
                     ]
const audioClips3 =  [
                      {sound:clave,label:"",id:9},
                      {sound:congalo,label:"",id:10},
                      {sound:snaree,label:"",id:11},
                      {sound:hatt,label:"",id:12},
                     ]
const audioClips4 =  [
                      {sound:softhit,label:"",id:13},
                      {sound:tropicalclap,label:"",id:14},
                      {sound:Perc,label:"",id:15},
                      {sound:shot,label:"",id:16},
                     ]



class Tr808 extends Component {
soundPlay= (src) => {

  const sound= new Howl({
    src
  })
sound.play();
}

  rendButtonAndSound = () => {
        return audioClips.map((soundObj, index) => {
          return (
            
            <div className="contain">
                <button
                    className="synth" 
                    style={{color:"white"}} 
                    key={index} 
                    onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label} 
                    <img className="keypad" src={ require('../pages/keypad1.png') } />
               </button>
               
          </div>
         )
      })
  }

  rendButtonAndSound2 = () => {
    return audioClips2.map((soundObj, index) => {
      return (
        
        <div className="contain2">
            <button
                className="synth" 
                style={{color:"white"}} 
                key={index} 
                onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label} 
                <img className="keypad2" src={ require('../pages/keypad3.png') } />
           </button>
           
      </div>
     )
  })
}

rendButtonAndSound3 = () => {
  return audioClips3.map((soundObj, index) => {
    return (
      
      <div className="contain3">
          <button
              className="synth" 
              style={{color:"white"}} 
              key={index} 
              onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label} 
              <img className="keypad3" src={ require('../pages/keypad4.png') } />
         </button>
         
    </div>
   )
})
}

rendButtonAndSound4 = () => {
  return audioClips4.map((soundObj, index) => {
    return (
      
      <div className="contain4">
          <button
              className="synth" 
              style={{color:"white"}} 
              key={index} 
              onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label} 
              <img className="keypad4" src={ require('../pages/keypad4.png') } />
         </button>
         
    </div>
   )
})
}

render(){
    Howler.volume(1.0)
            return <div className="window">
               <img className="lether" src={ require('../pages/1234.jpg') }/>
            <img className="tr808" src={ require('../pages/tr-808.jpg') } />
              <div className="frame">
                        {this.rendButtonAndSound()}
                        {this.rendButtonAndSound2()}
                        {this.rendButtonAndSound3()}
                        {this.rendButtonAndSound4()}
                   </div>
                   </div>
                   
                   ;
        }
 }

export default Tr808; 

 
  
