import styles from "./HomeStyle.module.scss";
import NavBar from "../common/NavBar";
import Popular from "../common/Popular";
import Twits from "../components/Home/Twits";
import TwitPopUp from "../common/TwitPopUp";
import ReplyPopUp from "../components/Home/ReplyPopUp";
import { useState, useEffect } from "react";
import { getUser } from "../api/user";
import { useNavigate } from "react-router-dom";
import ReplyTwits from "../common/Reply/ReplyTwits";

const MainPage = () => {
  const [twitPop, setTwitPop] = useState(false);
  const [replyTwit, setReplyTwit] = useState(false);
  const [replyPop, setReplyPop] = useState(false);
  const [user, setUser] = useState({});

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const getUsersAsync = async (id) => {
      try {
        const user = await getUser(id);
        if (!user.status) {
          setUser(user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUsersAsync(id);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }
  }, [navigate, isAuthenticated, isLoading]);

  

  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
          <NavBar twitPop={twitPop} setTwitPop={setTwitPop} />
        </div>
        {/* 中間推文部分 */}
       
        <div className={styles.middleColumn}>
          <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
             {replyTwit? (<ReplyTwits setReplyTwit={setReplyTwit} setReplyPop={setReplyPop}/>) : (<Twits
                twitPop={twitPop}
                setTwitPop={setTwitPop}
                replyTwit={replyTwit}
                replyPop={replyPop}
                setReplyPop={setReplyPop}
                setReplyTwit={setReplyTwit}
                user={user}
              />) }
              
            {replyPop && (
              <ReplyPopUp
                replyPop={replyPop}
                setReplyPop={setReplyPop}
                user={user}
              />
            )}
            {twitPop && (
              <TwitPopUp
                twitPop={twitPop}
                setTwitPop={setTwitPop}
                user={user}
              />
            )}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Popular />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
