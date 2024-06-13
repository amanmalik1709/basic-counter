import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setcounter] = useState(0);


  const add = () => {
    if (count === 20) {
      alert('count cant go more than 20');
      console.log(hello);
    }
    setcounter(count + 1);
    console.log(count);
  }
  const sub = () => {
    if (count === 0) {
      alert('count cant go less than 0');

      console.log(hello);
    }
    count=count-1;
    setcounter(count);
    console.log(count);
  }

  return (
    <>
      <h1>React project 1</h1>
      <h2>Count: {count}</h2>
      <br></br>

      <button onClick={add}>ADD</button>
      <br />
      <br />
      <button onClick={sub}>SUB</button>
    </>
  )
}

export default App
