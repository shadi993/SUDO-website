import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubar from './menubar.jsx'
import JoinDiscord from './JoinDiscord.jsx'
import AboutDiscord from './assets/AboutDiscord.jsx'

function App() {
  const [count, setCount] = useState(0)

  function HomeClicked(){
    alert("i got clicked");
  }

  return (
    <>
    <Menubar/>
    <JoinDiscord/>
    <AboutDiscord/>
    </>
  )
}

export default App
