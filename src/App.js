import React,{useState} from 'react';
import Message from './message.js';
import './App.css';
function App() {
  let [count,setCount]=useState(0);
  let [isMorning,setMorning]=useState(false);
  return (

    <div className={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1>{isMorning ? '' : ''}</h1>

       
      <Message counter={count} />
      <br/><br/><br/><br/>

      <button onClick={()=>setCount(++count)} >Update Counter</button>
      <button onClick={()=>setCount(0)}> Reset Counter</button><br/><br></br>
      <button onClick={()=>setMorning(!isMorning)}>change background </button>
    </div>
  );
}

export default App;
