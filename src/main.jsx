import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )
}

//React expect an object that can be parsed but here we've already destructured it that's why react is unable to understand it
const ReactElement = {
  type: "a",
  props: {
      href: "google.com",
      target: "_blank",
  },
  children: "Click to visit google.com"
}

// Here react can easily parse this becuase we're giving it plain HTML (timestamp - 30:00)
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


ReactDOM.createRoot(document.getElementById('root')).
render(
  anotherElement
)
