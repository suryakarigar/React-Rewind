import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let userOne = {
    username: "Surya",
    email: "karigarsurya@gmail.com"
  }

  let userTwo = {
    username: "Chandru",
    email: "chandrudaykarigar@gmail.com"
  }

  let newArr = [1,2,3,4,5]
  
  return (
    <>
        <h1 className="p-4 rounded-xl bg-green-500 mb-4 text-2xl">Taiwind Test</h1>

        {/* ------------------------------ */}

        {/* <Card channel="Chai Aur Code" userDetails = {userOne}/>
        <Card channel="Chai Aur Code" userDetails = {userTwo} arr = {newArr}/> */}
        <Card 
        username="Hitesh Choudhary" 
        quote="I make coding videos on youtube and for courses. My youtube channel explains my work more."
        twitterHandle="@hiteshdotcom"
        />

    </>
  )
}

export default App
