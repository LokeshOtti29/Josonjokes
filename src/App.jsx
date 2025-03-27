import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jokepage from './components/Jokepage'
import Createcontext from './Contextapi/Createcontext'

function App() {
 
  const paths = [{
    path:"/",
    element:<Home/>
  },
  {
    path:"/jokepage/:type",
    element:<Jokepage/>
  }
]

  return (
    <>
     <Router>
     <Createcontext>
      <Routes>
        {paths.map((value,index)=>{
          return(<Route key={index}path={value.path} element={value.element} />)
        })}
        {/* <Route path="/" element={<Home />} />
        <Route path="/jokepage/:type" element={<Jokepage/>} /> */}

      </Routes>
      </Createcontext>
    </Router>
    </>
  )
}

export default App
