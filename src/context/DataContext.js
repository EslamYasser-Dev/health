'use client';
import React, { createContext, useContext, useState } from 'react';

// Create a context
export const DataContext = createContext();

// Create a custom hook to use the context
export const useData = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
