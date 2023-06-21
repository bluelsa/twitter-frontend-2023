import { useState, createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../api/user";

const defaultApiContext = {
  user: {},
  isAuthenticated: undefined,
};

const AuthContext = createContext(defaultApiContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const { pathname } = useLocation()
  const userId = localStorage.getItem("userId");

  //Authentication
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsAuthenticated(true)
    }
    if (!token) {
      setIsAuthenticated(false)
    }
  },[pathname])

  //get user
  useEffect(() => {
    if (isAuthenticated) {
    const userId = localStorage.getItem("userId");
    const getUsersAsync = async (userId) => {
      try {
        const user = await getUser(userId);
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUsersAsync(userId);
  }
  }, [userId, isAuthenticated]);

  const value = {
    user,
    setUser,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
