import React, { useContext } from 'react'
import { contextapi } from '../Contextapi/Createcontext'
import { useNavigate } from 'react-router-dom';

const Type = React.memo(() => {
  const {Fetch}= useContext(contextapi);
  const navigate = useNavigate();
  const categorychange =(e)=>{
     e.preventDefault();
     navigate(`/jokepage/${e.target.dataset.value}`);
     Fetch(e.target.dataset.value)
     console.log(e.target.dataset.value)
  }
  return (
    <div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true" >
    Type of Joke
  </button>
  <ul className="dropdown-menu" onClick={categorychange}>
    <li><span className='dropdown-item' data-value="general">General</span></li>
    <li><span className='dropdown-item' data-value="programming">Programming</span></li>
    <li><span className='dropdown-item' data-value="dad">Dad Jokes</span></li>
    <li><span className='dropdown-item' data-value="knock-knock">Knock-Knock</span></li>
  </ul>
</div>
  )
})
export default Type
