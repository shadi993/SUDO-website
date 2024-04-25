import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubar from './menubar.jsx'
import JoinDiscord from './JoinDiscord.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menubar/>
    <JoinDiscord/>
    </>
  )
}

export default App
