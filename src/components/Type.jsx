import React, { useContext } from 'react'
import { contextapi } from '../Contextapi/Createcontext'
import { useNavigate } from 'react-router-dom';

const Type = () => {
  const {Fetch,initial}= useContext(contextapi);
  const navigate = useNavigate();
  const categorychange =(e)=>{
     e.preventDefault();
     navigate(`/jokepage/${e.target.closest("a")?.dataset.category}`);
     console.log(e.target.closest("a")?.dataset.category)
  }
  return (
    <div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true" >
    Type of Joke
  </button>
  <ul className="dropdown-menu" onClick={categorychange}>
    <li><a className="dropdown-item" href="#" >General</a></li>
    <li><a className="dropdown-item" href="#">Programming</a></li>
    <li><a className="dropdown-item" href="#" >Dad Jokes</a></li>
    <li><a className="dropdown-item" href="#" >Knock-Knock</a></li>
  </ul>
</div>
  )
}

export default Type
