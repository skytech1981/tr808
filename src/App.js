import React , { useState } from 'react';
import logo from './science-fiction.svg';
import logo2 from './logo.svg';
import './App.css';

function App() {


 const [count,setCount] = useState(0)
 

function decrementCount()
{
  setCount(prevCount => prevCount - 1 )
}
function incrementCount()
{
  setCount(prevCount => prevCount + 1 )
}
function multiplyCount()
{
  setCount(prevCount => prevCount * 2 )
}
function divideCount()
{
  setCount(prevCount => prevCount / 2 )
}
function reset()
{
  setCount(prevCount => prevCount * 0 )
}




  return (
    <div className="App">
      <header className="App-header">
        <div className="bord"><img src={logo} className="App-logo" alt="logo" /> </div>
        <img src={logo2} className="App-logo2" alt="logo" /> 
        <h1 className="counter">counter</h1>
        <span className="count"> {count} </span>
       <div className="box">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
        <button onClick={multiplyCount}>*</button>
        <button onClick={divideCount}>/</button>
        <button className="reset" onClick={reset}>reset</button>
        
        </div>
       </header>
    </div>
  );
}

export default App;
