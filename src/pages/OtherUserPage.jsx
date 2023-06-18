import styles from "../pages/HomeStyle.module.scss";
import Popular from "../common/Popular";
import OtherMain from "../components/Others/OtherMain";
import NavbarOther from "../components/Others/NavbarOther";
import TwitPopUp from "../common/TwitPopUp";
import ReplyPopUp from "../components/Home/ReplyPopUp";
import SpecTweet from "../common/Reply/SpecTweet";
import { useState, useEffect } from "react";
import { getUser } from "../api/user";
import { useNavigate } from "react-router-dom";

const OtherUserPage = () => {
  const [user, setUser] = useState({});
  const [twitPop, setTwitPop] = useState(false);
  const [replyPop, setReplyPop] = useState(false);
  const [specTweet, setSpecTweet] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const getUserAsync = async (id) => {
      try {
        const user = await getUser(id);
        if (!user.status) {
          setUser(user);
           setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false)
      }
    };
    getUserAsync(id);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }
  }, [navigate, isAuthenticated, isLoading]);

  const handleOtherIdRemove = () => {
    localStorage.removeItem("otherId");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
          <NavbarOther
            twitPop={twitPop}
            setTwitPop={setTwitPop}
            onRemove={handleOtherIdRemove}
          />
        </div>
        <div className={styles.middleColumn}>
          <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
            {specTweet ? (
              <SpecTweet
                setSpecTweet={setSpecTweet}
                setReplyPop={setReplyPop}
              />
            ) : (
              <OtherMain
                user={user}
                setReplyPop={setReplyPop}
                setSpecTweet={setSpecTweet}
                onRemove={handleOtherIdRemove}
              />
            )}

            {/* 推文與回覆推文彈跳視窗 */}
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

export default OtherUserPage;
