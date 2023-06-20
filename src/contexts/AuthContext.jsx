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

  //get user
  useEffect(() => {
    const id = localStorage.getItem("userId");
    const getUsersAsync = async (id) => {
      if (!id) {
        navigate('/login')
      }
      try {
        const user = await getUser(id);
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUsersAsync(id);
  }, []);

  const value = {
    user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
