import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubar from './menubar.jsx'
import JoinDiscord from './JoinDiscord.jsx'
import AboutDiscord from './AboutDiscord.jsx'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home.jsx'
import { Projects } from './Projects.jsx'
import { OurTeam } from './OurTeam.jsx'
import { Contact } from './Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/our-team" element={<OurTeam/>}/>
        <Route path="/contact" element={<Contact/>}/>  

      </Routes>
      
    </>
  )
}

export default App
