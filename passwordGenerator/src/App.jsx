import './App.css'

function App() {
  

  return (
    <>
      <div className="bg-gray-800 text-white w-screen h-screen flex items-center justify-center p-4">
        <div className='bg-gray-500 max-w-screen-lg w-1/2 p-4 rounded-md' >
          <div className='flex items-center justify-center'>
          <input 
          type="text" 
          name="" 
          id="" 
          className='rounded-l-md outline-none text-black px-2 py-1 w-full' 

          />
          <button className='bg-blue-600 px-3 py-1 rounded-r-md'>Copy</button>
          </div>
          <div className='flex items-center justify-evenly gap-2'>
            <div className=' my-2'>
              <input
              className='mr-2' 
              type="range" 
              name="" 
              id="" 
              min={8}
              max={30}
              />
              <label htmlFor="range-input">Length: {length}</label>
            </div>
            <div>
              <input 
              type="checkbox" 
              name="" 
              id="" 
              />
              <label htmlFor="checkbox">Numbers</label>
            </div>
            <div>
              <input 
              type="checkbox" 
              name="" 
              id="" 
              />
              <label htmlFor="checkbox">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
