import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { contextapi } from "../Contextapi/Createcontext";

const Center = React.memo(() => {
  const { initial } = useContext(contextapi);
  const [Initial, setInitial] = useState([]);

  const observer = useRef(null);
  const lastJokeRef = useRef(null);

  useEffect(() => {
    if (initial.length > 0) {
      setInitial(initial.slice(0, 1));
    }
  }, [initial]);

  const loadMoreJokes = useCallback(() => {
    setInitial((prevData) => {
      const nextJokes = initial.slice(0, prevData.length + 1);
      return nextJokes;
    });
  }, [initial]);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      const lastEntry = entries[0];
      if (lastEntry.isIntersecting) {
        loadMoreJokes();
      }
    }, { threshold: 1.0 });

    if (lastJokeRef.current) {
      observer.current.observe(lastJokeRef.current);
    }

    return () => observer.current.disconnect();
  }, [Initial, loadMoreJokes]);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="col-12 col-md-8 col-lg-6 border rounded shadow-lg p-4 bg-white"
        style={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        <h5 className="text-center fw-bold mb-3">😂 Jokes 😂</h5>
        <div className="row g-3">
          {Initial.length > 0 ? (
            Initial.map((val, index) => (
              <div
                className="col-12 pagination"
                key={val.id || index}
                ref={index === Initial.length - 1 ? lastJokeRef : null}
              >
                <div className="border rounded p-3 bg-light shadow-sm w-100">
                  <div>
                    <strong>😂 Joke {index + 1}:</strong> {val.setup}
                  </div>
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
