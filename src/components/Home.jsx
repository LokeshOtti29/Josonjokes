import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='d-inline-flex'>
        <div>
            <h1 className='caveat-head'>JSON Jokes</h1>
        </div>
        <div>
            <button onClick={()=>navigate("/jokepage")}>Take Me to the Funny Side &#x1F606;</button>
        </div>
      
    </div>
  )
}

export default Home
