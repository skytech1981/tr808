import React ,{Component}from 'react';
import Kick from '../drums/kickdrum.wav';
import Snare from '../drums/snare.wav';
import clap from '../drums/clap.wav';
import chihat from '../drums/chihat.wav';
import drumfill from '../drums/synth.wav';
import {Howl,Howler} from 'howler';
import '../pages/sequencer.css';


const audioClips =  [
                      {sound:Kick,label:"",id:1},
                      {sound:Snare,label:"",id:2},
                      {sound:chihat,label:"",id:3},
                      {sound:clap,label:"",id:4},
                     ]
const audioClips2 =  [
                      {sound:drumfill,label:"",id:5},
                      {sound:Snare,label:"",id:6},
                      {sound:chihat,label:"",id:7},
                      {sound:clap,label:"",id:8},
                     ]
const audioClips3 =  [
                      {sound:Kick,label:"",id:9},
                      {sound:Snare,label:"",id:10},
                      {sound:chihat,label:"",id:11},
                      {sound:clap,label:"",id:12},
                     ]


class Sequencer extends Component {
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

render(){
    Howler.volume(1.0)
            return <div className="window">
            <img className="tr808" src={ require('../pages/tr-808.jpg') } />
              <div className="frame">
                        {this.rendButtonAndSound()}
                        {this.rendButtonAndSound2()}
                        {this.rendButtonAndSound3()}
                   </div>
                   </div>
                   
                   ;
        }
 }

export default Sequencer; 

 
  
