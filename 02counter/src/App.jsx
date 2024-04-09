import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15;

  // function for Adding value 

  const increaseCount = () => {
    if (counter <20 && counter >=0) {
      counter = counter + 1;
    }
    setCounter(counter)
    console.log("Increased", counter);
  }

  // function for Removing value 

  const decreaseCount = () => {
    if (counter > 0)
    counter = counter - 1;
    setCounter(counter)
    console.log("Decreased", counter);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Coutner using React Hook:{counter}</p>
      <p>Coutner using React Hook:{counter}</p>
      <p>Coutner using React Hook:{counter}</p>

      <button 
        onClick={increaseCount}
      >Increase Count</button>
      <button
        onClick={decreaseCount}
      >Decrease Count</button>
    </>
  )
}

export default App
