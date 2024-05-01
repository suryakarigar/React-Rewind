import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef hook
  // const passwordRef = useRef(null)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += '0123456789'
    if(specialCharAllowed) str += '!@#$%^&*-_+='

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index)
    }

    setPassword(pass)
  }, [length, numAllowed, specialCharAllowed, setPassword])

  // const copyPasswordToClipboard = useCallback( () => {
  //   passwordRef.current?.select();
  //   passwordRef.current?.setSelectionRange(0, 20);
  //   window.navigator.clipboard.writeText(password)
  // }, [password] )

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(password)
  },[password] )

  useEffect( () => {
    passwordGenerator();
  },[length, numAllowed, specialCharAllowed, passwordGenerator] )

 
  return (
    <>
      <div className='w-full max-w-md mx-auto py-2 rounded-xl text-orange-500 bg-gray-600'>
        <div className='w-full gap-2'>
          <input 
          type="text" 
          name="password" 
          id="password"
          value={password}
          placeholder='Password'
          readOnly
          // ref={passwordRef}
          ref={passwordRef}
          className='px-3 py-1 rounded-md ml-3 m-3'/>
          <button onClick={copyPasswordToClipboard} className='bg-blue-400 text-white px-3 py-1 rounded-md'>Copy</button>
        </div>
        <div className='flex justify-center align-middle'>
          <div className='flex justify-center align-middle mr-4'>
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
          <div className='flex justify-center align-middle mr-4'>
            <input 
            type="checkbox" 
            defaultChecked={specialCharAllowed}
            name="input_nums" 
            id="input_nums"
            value={length}
            className='cursor-pointer'
            onChange={() => {
                setNumAllowed((prev) => !prev)
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
