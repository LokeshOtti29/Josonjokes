import React, { useContext, useEffect, useRef } from 'react';
import Pagination from './Pagination';
import { contextapi } from '../Contextapi/Createcontext';

const Center = React.memo(() => {
    const { initial } = useContext(contextapi);
    const observer = useRef(null);
    useEffect(() => {
      observer.current = new IntersectionObserver((enteries)=>{
        enteries.forEach((values)=>{
            if(values.isIntersecting){
                values.target.classList.add("show");
            }else{
                values.target.classList.remove("show");
            }
        })
      })
      document.querySelectorAll(".card").forEach((card) => {
        observer.current.observe(card);
      });
      return () => {
        observer.current.disconnect();
      }
    }, [observer])
    
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
            <div className="col-12 col-md-8 col-lg-6 border rounded shadow-lg p-4 bg-white" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                <h5 className="text-center fw-bold mb-3">😂 Jokes 😂</h5>
                <div className="row g-3 pagination">
                    {initial.length > 0 ? (
                        initial.map((val, index) => (
                            <div className="col-12" key={val.id || index}>
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
            <div className="mt-3">
                <Pagination />
            </div>
        </div>
    );
});

export default Center;
