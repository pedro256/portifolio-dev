import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DevModeContextType {
  devMode: boolean;
  toggleDevMode: () => void;
}

const DevModeContext = createContext<DevModeContextType | undefined>(undefined);

export const useDevMode = (): DevModeContextType => {
  const context = useContext(DevModeContext);
  if (context === undefined) {
    throw new Error('useDevMode must be used within a DevModeProvider');
  }
  return context;
};

export const DevModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [devMode, setDevMode] = useState(false);

  const toggleDevMode = () => {
    setDevMode((prev) => !prev);
  };

  return (
    <DevModeContext.Provider value={{ devMode, toggleDevMode }}>
      {children}
    </DevModeContext.Provider>
  );
};