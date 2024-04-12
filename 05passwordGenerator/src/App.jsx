import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    const pass = ""
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += '0123456789'
    if(setSpecialCharAllowed) str += '!@#$%^&*-_+='

    for (let i = 1; i <= length.length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      char = str.charAt(index)
    }

    setPassword(char)
  }, [length, numAllowed, specialCharAllowed, setPassword])

 
  return (
    <>
      <div className='w-full max-w-screen-sm mx-auto py-2 rounded-xl text-orange-500 bg-gray-600'>text</div>
    </>
  )
}

export default App
