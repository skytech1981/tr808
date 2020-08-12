import React , { useState } from 'react';
import logo from './science-fiction.svg';
import logo2 from './logo.svg';
import './App.css';

function App() {


 const [count,setCount] = useState(0)
 const [theme,setTheme] = useState(0)

function decrementCount()
{
  setCount(prevCount => theme - 1 )
  setTheme(theme-1)
}
function incrementCount()
{
  setCount(prevCount => theme + 1 )
  setTheme(theme+1)
}
function multiplyCount()
{
  setCount(prevCount => theme * 2 )
  setTheme(theme * 2)
}
function divideCount()
{
  setCount(prevCount => theme / 2 )
  setTheme(theme / 2)
}
function reset()
{
  setCount(prevCount => theme * 0 )
  setTheme('')
}
function num1()
{
    setTheme(theme + 1)
}
function num2()
{
  setTheme(theme + 2)
}
function num3()
{
  setTheme(theme + 3)
}
function num4()
{
  setTheme(theme + 4)
}
function num5()
{
  setTheme(theme + 5)
}
function num6()
{
  setTheme(theme + 6)
}
function num7()
{
  setTheme(theme + 7)
}
function num8()
{
  setTheme(theme + 8)
}
function num9()
{
  setTheme(theme + 9)
}
function num0()
{
  setTheme(theme + 0)
}






  return (
    <div className="App">
      <header className="App-header">
        <div className="bord"><img src={logo} className="App-logo" alt="logo" /> </div>
        <img src={logo2} className="App-logo2" alt="logo" /> 
        <h1 className="counter">counter</h1>
        <span className="count"> {theme} </span>
       <div className="box">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
        <button onClick={multiplyCount}>*</button>
        <button onClick={divideCount}>/</button>
        <button onClick={num1}>1</button>
        <button onClick={num2}>2</button>
        <button onClick={num3}>3</button>
        <button onClick={num4}>4</button>
        <button onClick={num5}>5</button>
        <button onClick={num6}>6</button>
        <button onClick={num7}>7</button>
        <button onClick={num8}>8</button>
        <button onClick={num9}>9</button>
        <button onClick={num0}>0</button>





        <button className="reset" onClick={reset}>reset</button>
        
        </div>
       </header>
    </div>
  );
}

export default App;
