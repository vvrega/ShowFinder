'use client';

import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedName = localStorage.getItem('userName');
      return savedName ? savedName : 'Guest';
    }
    return 'Guest';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
