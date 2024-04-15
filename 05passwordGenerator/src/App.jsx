import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    const pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
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
      <div className='w-full max-w-md mx-auto py-2 rounded-xl text-orange-500 bg-gray-600'>
        <div className='w-full gap-2'>
          <input 
          type="password" 
          name="password" 
          id="password"
          placeholder='Password'
          className='px-3 py-1 rounded-md ml-3 m-3'/>
          <button className='bg-blue-400 text-white px-3 py-1 rounded-md'>Copy</button>
        </div>
        <div className='flex justify-center'>
          <div>
            <input 
            type="range" 
            name="input_range" 
            id="input_range"
            min={8}
            max={20} 
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input 
            type="checkbox" 
            defaultChecked={specialCharAllowed}
            name="input_nums" 
            id="input_nums"
            value={length}
            className='cursor-pointer'
            onChange={() => {
                numAllowed((prev) => !prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div>
            <input 
            type="checkbox" 
            defaultChecked={specialCharAllowed}
            name="input_nums" 
            id="input_nums"
            value={length}
            className='cursor-pointer'
            onChange={() => {
                setSpecialCharAllowed((prev) => !prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
