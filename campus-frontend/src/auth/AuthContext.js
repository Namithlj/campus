import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Dummy login (just sets user object)
  const login = (email, password) => {
    // In real app, validate using backend
    if (email === 'n@gmail.com' && password === '1234') {
      setUser({ email });
      return true;
    } else {
      return false;
    }
  };

  // Logout clears the user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
