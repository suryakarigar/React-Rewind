import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className=" w-full h-screen duration-200 shadow-md" style={{backgroundColor: color}}>
        <div className="fixed flex justify-center flex-wrap inset-x-0 bottom-4 rounded-full">
          <div className="flex gap-2 bg-white p-2 rounded-full">
            <button 
            onClick={() => setColor('blue')}
            className="px-4 text-white py-0.5 flex justify-center rounded-full text-xs" 
            style={{backgroundColor: 'blue'}}
            >BLUE
            </button>
            <button 
            onClick={() => setColor('red')}
            className="px-4 text-white py-0.5 flex justify-center rounded-full text-xs" 
            style={{backgroundColor: 'red'}}
            >RED
            </button>
            <button 
            onClick={() => setColor('violet')}
            className="px-4 text-white py-0.5 flex justify-center rounded-full text-xs" 
            style={{backgroundColor: 'violet'}}
            >VIOLET
            </button>
            <button 
            onClick={() => setColor('yellow')}
            className="px-4 text-black py-0.5 flex justify-center rounded-full text-xs" 
            style={{backgroundColor: 'yellow'}}
            >YELLOW
            </button>
            <button 
            onClick={() => setColor('orange')}
            className="px-4 text-black py-0.5 flex justify-center rounded-full text-xs" 
            style={{backgroundColor: 'orange'}}
            >ORANGE
            </button>
            <button 
            onClick={() => setColor('purple')}
            className="px-4 text-white py-1 flex justify-center rounded-full text-xs" 
            style={{backgroundColor: 'purple'}}
            >PURPLE
            </button>
            <button 
            onClick={() => setColor('black')}
            className="px-4 text-white py-0.5 flex justify-center rounded-full text-xs" 
            style={{backgroundColor: 'black'}}
            >BLACK
            </button>
            <button 
            onClick={() => setColor('gray')}
            className="px-4 text-black py-0.5 flex justify-center rounded-full text-xs" 
            style={{backgroundColor: 'gray'}}
            >GRAY
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
