import React, { useContext, useState } from 'react'
import Pagination from './Pagination';
import { contextapi } from '../Contextapi/Createcontext';

const Center = React.memo(() => {
    const {initial}= useContext(contextapi);
    console.log(initial)
    const [items, setitems] =useState([
        {
          "title": "Item One",
          "description": "This is the description for item one."
        },
        {
          "title": "Item Two",
          "description": "This is the description for item two."
        },
        {
          "title": "Item Three",
          "description": "This is the description for item three."
        },
        {
          "title": "Item Four",
          "description": "This is the description for item four."
        },
        {
          "title": "Item Five",
          "description": "This is the description for item five."
        },
        {
          "title": "Item Six",
          "description": "This is the description for item six."
        }
      ]
      );
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="border rounded shadow-lg p-4 bg-white" style={{ width: "50%", maxHeight: "70vh", overflowY: "auto" }}>
        <h5 className="text-center fw-bold mb-3">😂 Jokes 😂</h5>
        <div className="d-flex flex-column gap-3">
            {
                initial.map((val)=>{
                   return( <div className="border rounded p-3 bg-light shadow-sm w-100" key={val.id}>
                      <div>😂 Joke 1:{val.setup}</div>
                      <div>{val.punchline}</div> 
                  </div>)
                })
            }
        </div>
      </div>
      <div>
        <Pagination/>
      </div>
    </div>
  )
})

export default Center
