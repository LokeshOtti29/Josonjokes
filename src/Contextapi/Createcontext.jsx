import axios, { Axios } from 'axios';
import React, { useCallback, useEffect } from 'react'
import { createContext, useContext, useState } from "react";
import { useParams } from 'react-router-dom';
export const contextapi = createContext();
const Createcontext = ({children}) => {
    const [initial, setInitial] = useState([]);
  const Fetch = useCallback(async(type)=>{
    
        try {
            let a = await axios.get(`https://official-joke-api.appspot.com/jokes/${type}/ten`);
            setInitial(a.data);
            
        } catch (error) {
            console.log(error);
        }
    
  },[initial])
 
  return (
    <div>
        <contextapi.Provider value={{Fetch ,initial}}>
            {children}
        </contextapi.Provider>
      
    </div>
  )
}

export default Createcontext
