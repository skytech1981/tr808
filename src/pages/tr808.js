import React ,{Component } from 'react';
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
import a from '../drums/fx2.wav';

import {Howl,Howler} from 'howler';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import '../pages/sequencer.css';



const drumLoops =   [ 
                    {intro:a}
                    ]



const audioClips1 =   [ 
                      {sound:Kick,label:"",id:1},
                      {sound:Snare,label:"",id:2},
                      {sound:chihat,label:"",id:3},
                      {sound:clap,label:"",id:4}
                     ]
const audioClips2 =  [
                      {sound:ride,label:"",id:5},
                      {sound:shake,label:"",id:6},
                      {sound:tom,label:"",id:7},
                      {sound:cowba,label:"",id:8}
                     ]
const audioClips3 =  [
                      {sound:clave,label:"",id:9},
                      {sound:congalo,label:"",id:10},
                      {sound:snaree,label:"",id:11},
                      {sound:hatt,label:"",id:12}
                     ]
const audioClips4 =  [
                      {sound:softhit,label:"",id:13},
                      {sound:tropicalclap,label:"",id:14},
                      {sound:Perc,label:"",id:15},
                      {sound:shot,label:"",id:16}
                     ]
const audioClips5 =  [
                      {sound:shot,label:"",id:17},
                      {sound:shot,label:"",id:18},
                      {sound:shot,label:"",id:19},
                      {sound:shot,label:"",id:20}
                     ]
const audioClips6 =  [
                      {sound:shot,label:"",id:21},
                      {sound:shot,label:"",id:22},
                      {sound:shot,label:"",id:23},
                      {sound:shot,label:"",id:24}
                     ]
const audioClips7 =  [
                      {sound:shot,label:"",id:25},
                      {sound:shot,label:"",id:26},
                      {sound:shot,label:"",id:27},
                      {sound:shot,label:"",id:28}
                     ]
const audioClips8 =  [
                      {sound:shot,label:"",id:29},
                      {sound:shot,label:"",id:30},
                      {sound:shot,label:"",id:31},
                      {sound:shot,label:"",id:32}
                     ]
const audioClips9 =  [
                      {sound:hatt,label:"",id:29},
                      {sound:hatt,label:"",id:30},
                      {sound:hatt,label:"",id:31},
                      {sound:hatt,label:"",id:32}
                     ]
const audioClips10 =  [
                      {sound:hatt,label:"",id:29},
                      {sound:hatt,label:"",id:30},
                      {sound:hatt,label:"",id:31},
                      {sound:hatt,label:"",id:32}
                     ]
const audioClips11 =  [
                      {sound:hatt,label:"",id:29},
                      {sound:hatt,label:"",id:30},
                      {sound:hatt,label:"",id:31},
                      {sound:hatt,label:"",id:32}
                     ]
const audioClips12 =  [
                      {sound:hatt,label:"",id:29},
                      {sound:hatt,label:"",id:30},
                      {sound:hatt,label:"",id:31},
                      {sound:hatt,label:"",id:32}
                     ]
const audioClips13 =  [
                      {sound:ride,label:"",id:29},
                      {sound:ride,label:"",id:30},
                      {sound:ride,label:"",id:31},
                      {sound:ride,label:"",id:32}
                     ]
const audioClips14 =  [
                      {sound:ride,label:"",id:29},
                      {sound:ride,label:"",id:30},
                      {sound:ride,label:"",id:31},
                      {sound:ride,label:"",id:32}
                     ]
const audioClips15 =  [
                      {sound:ride,label:"",id:29},
                      {sound:ride,label:"",id:30},
                      {sound:ride,label:"",id:31},
                      {sound:ride,label:"",id:32}
                     ]
const audioClips16 =  [
                      {sound:ride,label:"",id:29},
                      {sound:ride,label:"",id:30},
                      {sound:ride,label:"",id:31},
                      {sound:ride,label:"",id:32}
                     ]
const audioClips17 =  [
                      {sound:cowba,label:"",id:29},
                      {sound:cowba,label:"",id:30},
                      {sound:cowba,label:"",id:31},
                      {sound:cowba,label:"",id:32}
                     ]
const audioClips18 =  [
                      {sound:cowba,label:"",id:29},
                      {sound:cowba,label:"",id:30},
                      {sound:cowba,label:"",id:31},
                      {sound:cowba,label:"",id:32}
                     ]
const audioClips19 =  [
                      {sound:cowba,label:"",id:29},
                      {sound:cowba,label:"",id:30},
                      {sound:cowba,label:"",id:31},
                      {sound:cowba,label:"",id:32}
                     ]
const audioClips20 =  [
                      {sound:cowba,label:"",id:29},
                      {sound:cowba,label:"",id:30},
                      {sound:cowba,label:"",id:31},
                      {sound:cowba,label:"",id:32}
                     ]
const audioClips21 =  [
                      {sound:snaree,label:"",id:29},
                      {sound:snaree,label:"",id:30},
                      {sound:snaree,label:"",id:31},
                      {sound:snaree,label:"",id:32}
                     ]
const audioClips22 =  [
                      {sound:snaree,label:"",id:29},
                      {sound:snaree,label:"",id:30},
                      {sound:snaree,label:"",id:31},
                      {sound:snaree,label:"",id:32}
                     ]
const audioClips23 =  [
                      {sound:cowba,label:"",id:29},
                      {sound:cowba,label:"",id:30},
                      {sound:cowba,label:"",id:31},
                      {sound:cowba,label:"",id:32}
                     ]
const audioClips24 =  [
                      {sound:cowba,label:"",id:29},
                      {sound:cowba,label:"",id:30},
                      {sound:cowba,label:"",id:31},
                      {sound:cowba,label:"",id:32}
                     ]

const clips ={
clips1:[audioClips1,audioClips2,audioClips3,audioClips4],
clips2:[audioClips5,audioClips6,audioClips7,audioClips8],
clips3:[audioClips9,audioClips10,audioClips11,audioClips12],
clips4:[audioClips13,audioClips14,audioClips15,audioClips16],
clips5:[audioClips17,audioClips18,audioClips19,audioClips20],
clips6:[audioClips21,audioClips22,audioClips23,audioClips24]

}


class Tr808 extends Component {
constructor(props){
super(props);

let time=new Date().toLocaleTimeString()

this.state = {

           time:new Date().toLocaleTimeString(),
           clips1:audioClips1,
           clips2:audioClips2,
           clips3:audioClips3,
           clips4:audioClips4,
        





          }

}
 
onChange=(e)=> {
 console.log(e.target.value )
  this.setState({
          // clips1:  e.target.value === 'clips1' ? audioClips1: e.target.value === 'clips2' ? audioClips5 : audioClips9 ,
          // clips2:  e.target.value === 'clips1' ? audioClips2: e.target.value === 'clips2' ? audioClips6 : audioClips10,
          // clips3:  e.target.value === 'clips1' ? audioClips3: e.target.value === 'clips2' ? audioClips7 : audioClips11,
          // clips4:  e.target.value === 'clips1' ? audioClips4: e.target.value === 'clips2' ? audioClips8 : audioClips12 ,
          // clips1: e.target.value === 'clips1' ? audioClips1: e.target.value === 'clips2' ? audioClips13 :audioClips17,
          // clips2: e.target.value === 'clips1' ? audioClips2: e.target.value === 'clips2' ? audioClips14 :audioClips18,
          // clips3: e.target.value === 'clips1' ? audioClips3: e.target.value === 'clips2' ? audioClips15 : audioClips19,
          // clips4: e.target.value === 'clips1' ? audioClips4: e.target.value === 'clips2' ? audioClips16 :audioClips20,

   clips1:clips[e.target.value][0],
   clips2:clips[e.target.value][1],
   clips3:clips[e.target.value][2],
   clips4:clips[e.target.value][3],
   clips5:clips[e.target.value][4],
   clips6:clips[e.target.value][5],

      });
    
   
}

componentDidMount() {
  this.intervalID = setInterval(
() => this.setState({time:new Date().toLocaleTimeString()})
  );
}
componentWillUnmount() {
  clearInterval(this.intervalID);
}


soundPlay= (src) => {


 


const intro = new Howl({
  src: ['drumloop.webm', 'intro.mp3'],

     });
intro.play();



 const sound= new Howl({
    src
  })
 sound.play();
 }









  rendButtonAndSound = () => {
    Howler.volume(1.0)
        return this.state.clips1.map((soundObj, index) => {
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
    return this.state.clips2.map((soundObj, index) => {
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
  return this.state.clips3.map((soundObj, index) => {
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
  return this.state.clips4.map((soundObj, index) => {
    return (
      
      <div className="contain4">
          <button
              className="synth" 
              style={{color:"white"}} 
              key={index} 
              onClick={() => this.soundPlay(soundObj.sound)}>{soundObj.label} 
              <img className="keypad4" src={ require('../pages/keypad5.png') } />
         </button>
         
    </div>
   )
})
}

rendButtonAndSound5 = () => {
  return drumLoops.map((soundObj, index) => {
    return (
      
      <div className="contain4">
          <button
              className="synth" 
              style={{color:"white"}} 
              key={index} 
              onClick={() => this.soundPlay(soundObj.drumLoop)}>{soundObj.label} 
              <img className="keypad4" src={ require('../pages/keypad5.png') } />
         </button>
         
    </div>
   )
})
}

keyPlay = () => {
    return drumLoops.map((soundObj, index) => {
return (
<>
<button className="keyPlay" onClick={this.soundPlay(soundObj.intro)}>click</button>
</>
)

})}
 




// handleChange = (e) => {
//   console.log(e.target.value);
//   return (e.target.value)
// }




render(){
  console.log(this.state)
    Howler.volume(1.0)

            return( 
              (
                <div className="container">
              <div className="window">
              <img className="lether" src={ require('../pages/1234.jpg') }/>
              <img className="tr808" src={ require('../pages/tr-808.jpg') } />
              <div className="frame">
                        {this.rendButtonAndSound()}
                        {this.rendButtonAndSound2()}
                        {this.rendButtonAndSound3()}
                        {this.rendButtonAndSound4()}
                        {/* {this.keyPlay()} */}
                      
                        
                        
                                <select onChange={this.onChange}className="currentPreset" id="preset">
                                <option value="clips1">Soft Beats</option>
                                <option value="clips2">Chill Vibes</option>
                                <option value="clips3">Deep & Percsive</option>
                                <option value="clips4">HiTech Beats</option>
                                <option value="clips5">LoFi</option>
                                <option value="clips6">Oldies Filterd</option>
                          </select>
                          <h3 className="time">{this.state.time}</h3>
                         
                      </div>
                    </div>
                  </div>
            )
            );
        }
 }

 
 
export default Tr808; 


 
  














  


