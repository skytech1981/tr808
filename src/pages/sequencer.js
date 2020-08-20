import React ,{useState }from 'react';
import kick from '../drums/kickdrum.wav';
import snare from '../drums/snare.wav';
import { Tone } from 'tone/build/esm/core/Tone';
import useSound from 'use-sound';




function Sequencer() {


   function Sequence() {
   const kick = new Tone.player('../drums/kickdrum.wav').toDestination();
   const snare = new Tone.player('../drums/snare.wav').toDestination();
   let index=0;

   Tone.transport.scheduleRepeat(repeat,'8n')
   Tone.transport.start();

    function repeat(){
      let step = index % 8;
      const kickInputs = document.querySelector('.kick input:nth-child(${step + 1})');
      const snareInputs = document.querySelector('.snare input:nth-child(${step + 1})');
      if (kickInputs.checked){
        kick.start();
      }
      if (snareInputs.checked){
        snare.start();
      }
      index ++;
    }
  
   }



    return (
        <div className="sequence">
        <div className="kick">
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        </div>
        <div className="snare">
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        </div>
        
       </div>
       
      );
      
    }
    
    export default Sequencer;


// function Demo() {
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
//     <Checkbox
//       name="demo-checkbox"
//       checked={isChecked}
//       size={24}
//       label="I agree to self-isolate"
//       onChange={() => setIsChecked(!isChecked)}
//       onMouseDown={playActive}
//       onMouseUp={() => {
//         isChecked ? playOff() : playOn();
//       }}
//     />
//   );
// }
// export default Demo;