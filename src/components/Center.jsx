import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { contextapi } from '../Contextapi/Createcontext';

const Center = React.memo(() => {
    const { initial } = useContext(contextapi);
    const [Initial,setInitial] = useState(initial.slice(0,5));
    const observer = useRef(null);
    const lastobjref = useRef(null);
    const loadmorejoke = useCallback(()=>{
        setInitial((prevdata)=>{
               const nextjoke = Initial.slice(0,prevdata.length+5);
               return nextjoke;
        })
    },[Initial]);
    useEffect(() => {
        if(!observer.current){
            observer.current = new IntersectionObserver((enteries)=>{
                const lastentry = enteries[enteries.length-1];
                if(lastentry.isIntersecting){
                    loadmorejoke();
                }
              },{threshold:1.0})
        }
      
      if(lastobjref.current){
        observer.current.observe(lastobjref.current);
      }
      return () => {
        if(observer.current)observer.current.disconnect();
      }
    }, [Initial,loadmorejoke])
    
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
            <div className="col-12 col-md-8 col-lg-6 border rounded shadow-lg p-4 bg-white" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                <h5 className="text-center fw-bold mb-3">😂 Jokes 😂</h5>
                <div className="row g-3">
                    {initial.length > 0 ? (
                        initial.map((val, index) => (
                            <div className="col-12  pagination" key={val.id || index}>
                                <div className="border rounded p-3 bg-light shadow-sm w-100">
                                    <div><strong>😂 Joke {index + 1}:</strong> {val.setup}</div>
                                    <div className="text-muted">{val.punchline}</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-muted">No jokes available. Try another category! 🤔</div>
                    )}
                </div>
            </div>
           
        </div>
    );
});

export default Center;
