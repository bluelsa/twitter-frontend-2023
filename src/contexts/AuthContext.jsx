import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api/user";

const defaultApiContext = {
  user: {},
};

const AuthContext = createContext(defaultApiContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

const userId = localStorage.getItem("userId")
  //get user
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const getUsersAsync = async (userId) => {
      if (!userId) {
        navigate("/login");
      }
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
  }, [userId, navigate]);

  const value = {
    user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
