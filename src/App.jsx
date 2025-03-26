import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jokepage from './components/Jokepage'
import Createcontext from './Contextapi/Createcontext'

function App() {
 

  return (
    <>
     
     <Router>
     <Createcontext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jokepage/:type" element={<Jokepage/>} />
      </Routes>
      </Createcontext>
    </Router>
     
     
      
     
    </>
  )
}

export default App
