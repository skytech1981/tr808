import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


 const [count,setCount] = useState(0)


function decrementCount()
{
  setCount(count - 1 )
}

function incrementCount()
{
  setCount(count + 1 )
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <div>
        <button onClick={decrementCount}>-</button>
        <span> {count} </span>
        <button onClick={incrementCount}>+</button>

       </div>
      </header>
    </div>
  );
}

export default App;
