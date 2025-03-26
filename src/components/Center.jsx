import React, { useState } from 'react'

const Center = () => {
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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="border rounded shadow-lg p-4 bg-white" style={{ width: "50%", maxHeight: "70vh", overflowY: "auto" }}>
        <h5 className="text-center fw-bold mb-3">😂 Jokes 😂</h5>
        <div className="d-flex flex-column gap-3">
          <div className="border rounded p-3 bg-light shadow-sm">
            😂 Joke 1: Why don’t skeletons fight each other? They don’t have the guts.
          </div>
          <div className="border rounded p-3 bg-light shadow-sm">
            🤣 Joke 2: Parallel lines have so much in common. It’s a shame they’ll never meet.
          </div>
          <div className="border rounded p-3 bg-light shadow-sm">
            😍 Joke 3: I told my wife she should embrace her mistakes. She gave me a hug.
          </div>
          <div className="border rounded p-3 bg-light shadow-sm">
            😋 Joke 4: I'm on a seafood diet. I see food, and I eat it.
          </div>
          <div className="border rounded p-3 bg-light shadow-sm">
            😂 Joke 5: Why don’t scientists trust atoms? Because they make up everything!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Center
