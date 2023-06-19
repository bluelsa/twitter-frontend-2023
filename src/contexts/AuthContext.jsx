import { useState, createContext } from "react";
import { getUser } from "../api/user";

const defaultApiContext = {
  isAuthenticated: false,
  user: null,
};

const AuthContext = createContext(defaultApiContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const value = {
    isAuthenticated,
    user: async (id) => {
      try {
        const user = await getUser(id);
        if (!user.status) {
          setUser(user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      }
    },
  };

  return (
    <AuthContext.Provider value={{ value }}>{children}</AuthContext.Provider>
  );
};
