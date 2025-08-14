import React from 'react'
import { createContext, useState, useContext } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updatecaptain = (CaptainData) => {
        setCaptain(CaptainData);
    }

    const value = {
        captain,
        setCaptain, 
        isLoading,
        setIsLoading,
        error,
        setError,
        updatecaptain
    };


  return (
    <CaptainDataContext.Provider value={value}>
        {children}
    </CaptainDataContext.Provider>
  )
}

export default CaptainContext