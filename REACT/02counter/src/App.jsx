import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)

  //let counter = 5;
  const incValue = () => {
    counter = counter+1;
    setCounter(counter);
  }
  const decValue = () => {
    counter = counter-1;
    setCounter(counter);
  }

  return (
    <>
      <h1>WELCOME</h1>
      <h2>Counter Value : {counter}</h2>
      <button 
      onClick={incValue}
      >INCREASE</button>
      <br />
      <button
      onClick={decValue}
      >DECREASE</button>
    </>
  )
}

export default App
