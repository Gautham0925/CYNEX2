import React, { createContext, useState, useContext } from 'react';

// Create a context to hold the authentication state
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock login function
  const login = (username, password) => {
    // Simple check (you can replace it with actual API calls)
    if (username === "admin" && password === "admin123") {
      setUser({ username, role: "maintenance" });
    } else {
      setUser(null);
    }
  };

  // Mock logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
