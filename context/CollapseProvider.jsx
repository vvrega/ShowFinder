'use client';

import { createContext, useState, useEffect } from 'react';

export const CollapseContext = createContext();

export const CollapseProvider = ({ children }) => {
  const getInitialCollapseState = () => {
    if (typeof window !== 'undefined') {
      const storedCollapse = localStorage.getItem('collapse');
      return storedCollapse !== null ? JSON.parse(storedCollapse) : false;
    }
    return false;
  };

  const [collapse, setCollapse] = useState(getInitialCollapseState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('collapse', JSON.stringify(collapse));
    }
  }, [collapse]);

  return (
    <CollapseContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};
