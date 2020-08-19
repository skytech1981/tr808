import React , { useState } from 'react';
import kick from '../drums/kickdrum.wav';
import { Tone } from 'tone/build/esm/core/Tone';


function Sequencer() {

   function Sequence() {
   const kick = new Tone.player('../drums/kickdrum.wav').toMaster();
   }



    return (
        <div className="sequence">
          <div className="kicks">
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