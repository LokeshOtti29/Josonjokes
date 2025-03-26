import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='d-inline-flex flex-column'>
        <div>
            <h1 className='caveat-head m-5'>JSON Jokes</h1>
        </div>
        <div>
            <button className='rounded-3' onClick={()=>navigate("/jokepage/general")}>Take Me to the Funny Side &#x1F606;</button>
        </div>
      
    </div>
  )
}

export default Home
