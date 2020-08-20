import React , { useState } from 'react';
import '../App.css';

function Beatbox() {


const [theme,setTheme] = useState('')
const [color,setColor] = useState('white')


function box1()
{
    setTheme(theme + "  ")
    
   }
function box2()
{
    setTheme(theme + "  ")
}
function box3()
{
    setTheme(theme + "  ")
}
function box4()
{
    setTheme(theme + "  ")
}
function box5()
{
    setTheme(theme + "  ")
}
function box6()
{
    setTheme(theme + "  ")
}
function box7()
{
    setTheme(theme + "  ")
}
function box8()
{
    setTheme(theme + "  ")
}
function box9()
{
    setTheme(theme + "  ")
   }
function box10()
{
    setTheme(theme + "  ")
}
function box11()
{
    setTheme(theme + "  ")
}
function box12()
{
    setTheme(theme + "  ")
}
function box13()
{
    setTheme(theme + "  ")
}
function box14()
{
    setTheme(theme + "  ")
}
function box15()
{
    setTheme(theme + "  ")
}
function box16()
{
    setTheme(theme + "  ")
}






  return (
    <div className="beatboxpage">
      <header className="App-header"><p className="beatboxTitle">Modern BeatBox</p>
        <div className="bord"></div>
        <div className="boxes">
        <span>{theme}</span>
        <button className="box1" onClick={box1}/>
        <button className="box2" onClick={box2}/>
        <button className="box3" onClick={box3}/>
        <button className="box4" onClick={box4}/>
        <button className="box5" onClick={box5}/>
        <button className="box6" onClick={box6}/>
        <button className="box7" onClick={box7}/>
        <button className="box8" onClick={box8}/>
        <button className="box9" onClick={box9}/>
        <button className="box10" onClick={box10}/>
        <button className="box11" onClick={box11}/>
        <button className="box12" onClick={box12}/>
        <button className="box13" onClick={box13}/>
        <button className="box14" onClick={box14}/>
        <button className="box15" onClick={box15}/>
        <button className="box16" onClick={box16}/>
        </div>
        <div className="Sboxes">
        <span>{theme}</span>
        <button className="Sbox1" onClick={box1}/>
        <button className="Sbox2" onClick={box2}/>
        <button className="Sbox3" onClick={box3}/>
        <button className="Sbox4" onClick={box4}/>
        <button className="Sbox5" onClick={box5}/>
        <button className="Sbox6" onClick={box6}/>
        <button className="Sbox7" onClick={box7}/>
        <button className="Sbox8" onClick={box8}/>
        <button className="Sbox9" onClick={box9}/>
        <button className="Sbox10" onClick={box10}/>
        <button className="Sbox11" onClick={box11}/>
        <button className="Sbox12" onClick={box12}/>
        <button className="Sbox13" onClick={box13}/>
        <button className="Sbox14" onClick={box14}/>
        <button className="Sbox15" onClick={box15}/>
        <button className="Sbox16" onClick={box16}/>
        </div>
        <div className="Hboxes">
        <span>{theme}</span>
        <button className="Hbox1" onClick={box1}/>
        <button className="Hbox2" onClick={box2}/>
        <button className="Hbox3" onClick={box3}/>
        <button className="Hbox4" onClick={box4}/>
        <button className="Hbox5" onClick={box5}/>
        <button className="Hbox6" onClick={box6}/>
        <button className="Hbox7" onClick={box7}/>
        <button className="Hbox8" onClick={box8}/>
        <button className="Hbox9" onClick={box9}/>
        <button className="Hbox10" onClick={box10}/>
        <button className="Hbox11" onClick={box11}/>
        <button className="Hbox12" onClick={box12}/>
        <button className="Hbox13" onClick={box13}/>
        <button className="Hbox14" onClick={box14}/>
        <button className="Hbox15" onClick={box15}/>
        <button className="Hbox16" onClick={box16}/>
        </div>
        <div className="Cboxes">
        <span>{theme}</span>
        <button className="Cbox1" onClick={box1}/>
        <button className="Cbox2" onClick={box2}/>
        <button className="Cbox3" onClick={box3}/>
        <button className="Cbox4" onClick={box4}/>
        <button className="Cbox5" onClick={box5}/>
        <button className="Cbox6" onClick={box6}/>
        <button className="Cbox7" onClick={box7}/>
        <button className="Cbox8" onClick={box8}/>
        <button className="Cbox9" onClick={box9}/>
        <button className="Cbox10" onClick={box10}/>
        <button className="Cbox11" onClick={box11}/>
        <button className="Cbox12" onClick={box12}/>
        <button className="Cbox13" onClick={box13}/>
        <button className="Cbox14" onClick={box14}/>
        <button className="Cbox15" onClick={box15}/>
        <button className="Cbox16" onClick={box16}/>
        </div>
       </header>
    </div>
  );
}

export default Beatbox;