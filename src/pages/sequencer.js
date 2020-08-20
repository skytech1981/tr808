import React ,{Component}from 'react';
import Kick from '../drums/kickdrum.wav';
import Snare from '../drums/snare.wav';
import clap from '../drums/clap.wav';
import chihat from '../drums/chihat.wav';
import drumfill from '../drums/synth.wav';
import {Howl,Howler} from 'howler';
import '../pages/sequencer.css';


const audioClips = [
                      {sound:Kick,label:"",id:1},
                      {sound:Snare,label:"",id:2},
                      {sound:chihat,label:"",id:3},
                      {sound:clap,label:"",id:4},
                      {sound:drumfill,label:"",id:5},
                      
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

render(){
    Howler.volume(1.0)
            return <div className="window">
            <img className="tr808" src={ require('../pages/tr-808.jpg') } />
              <div className="frame">
                        {this.rendButtonAndSound()}
                   </div>
                   </div>
                   
                   ;
        }
 }

export default Sequencer; 

 
  

  //  function Sequence() {
  //  const kick = new Tone.player('../drums/kickdrum.wav').toDestination();
  //  const snare = new Tone.player('../drums/snare.wav').toDestination();
  //  let index=0;

  //  Tone.transport.scheduleRepeat(Repeat,'8n')
  //  Tone.transport.start();

  //   function Repeat(){
  //     let step = index % 8;
  //     const kickInputs = document.querySelector('.kick input:nth-child(${step + 1})');
  //     const snareInputs = document.querySelector('.snare input:nth-child(${step + 1})');
  //     if (kickInputs.checked){
  //       kick.start();
  //     }
  //     if (snareInputs.checked){
  //       snare.start();
  //     }
  //     index ++;
  //   }
  
  //  }



    // return (
      
    //     <div className="sequence">
    //      <button onClick={play()}>PLAY MY AUDIO</button>
    //     <div className="kick">
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     </div>
    //     <div className="snare">
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     <input type="checkbox"></input>
    //     </div>
        
    //     </div>
        
    //   );
      
    // }
    
    // export default Sequencer;


// function Sequencer() {
//   const [isChecked, setIsChecked] = React.useState(
//     false
//   );

//   const [playActive] = useSound(
//     '../drums/kickdrum.wav',
//     { volume: 0.25 }
//   );
//   const [playOn] = useSound(
//     '../drums/kickdrum.wav',
//     { volume: 0.25 }
//   );
//   const [playOff] = useSound(
//     '../drums/snare.wav',
//     { volume: 0.25 }
//   );

//   return (
//         <Checkbox
//             name="demo-checkbox"
//             checked={isChecked}
//             size={24}
//             label="I agree to self-isolate"
//             onChange={() => setIsChecked(!isChecked)}
//             onMouseDown={playActive}
//             onMouseUp={() => {
//             isChecked ? playOff() : playOn();
//          }}
//         />
//   );
// }

// export default Sequencer;