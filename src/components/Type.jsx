import React from 'react'

const Type = () => {
  return (
    <div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
    Type of Joke
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">General</a></li>
    <li><a className="dropdown-item" href="#">Programming</a></li>
    <li><a className="dropdown-item" href="#">Dad</a></li>
    <li><a className="dropdown-item" href="#">Knock-Knock</a></li>
  </ul>
</div>
  )
}

export default Type
