// auth/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setUser({ token, ...decoded }); // Includes role, id, sub
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = JSON.parse(atob(token.split('.')[1]));
    setUser({ token, ...decoded });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
