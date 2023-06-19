import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api/user";
import { getUserTweets } from "../api/user";

const defaultApiContext = {
  user: {},
  userTweets: {},
  otherTweets: {},
};

const AuthContext = createContext(defaultApiContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userTweets, setUserTweets] = useState({})
  const [otherTweets, setOtherTweets] = useState({})
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const otherId = localStorage.getItem("otherId");

  //get user
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   navigate("/login");
    // }
    const id = localStorage.getItem("userId");
    const getUsersAsync = async (id) => {
      try {
        const user = await getUser(id);
        if (!user.status) {
          setUser(user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUsersAsync(id);
  }, [navigate]);

  //get user's all tweets
  useEffect(() => {
    const getUserTweetsAsync = async (userId) => {
      try {
        const userTweets = await getUserTweets(userId);
        if (!userTweets.status) {
          setUserTweets(userTweets);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetsAsync(userId);
  }, [userId]);

  //get other user's all tweets
  useEffect(() => {
    const getUserTweetsAsync = async (otherId) => {
      try {
        const otherTweets = await getUserTweets(otherId);
        if (!otherTweets.status) {
          setOtherTweets(otherTweets);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetsAsync(otherId);
  }, [otherId]);

  const value = {
    user,
    userTweets,
    otherTweets
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
