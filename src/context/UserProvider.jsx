import React, { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Por defecto está en true

  const logout = () => setToken(false);
  const login = () => setToken(true);

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};