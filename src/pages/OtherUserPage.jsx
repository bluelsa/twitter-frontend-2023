import styles from "../pages/HomeStyle.module.scss";
import Popular from "../common/Popular";
import OtherMain from "../components/Others/OtherMain";
import NavbarOther from "../components/Others/NavbarOther";
import TwitPopUp from "../common/TwitPopUp";
import ReplyPopUp from "../components/Home/ReplyPopUp";
import SpecTweet from "../common/Reply/SpecTweet";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const OtherUserPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [twitPop, setTwitPop] = useState(false);
  const [replyPop, setReplyPop] = useState(false);
  const [specTweet, setSpecTweet] = useState(false);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

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
                replyPop={replyPop}
                setSpecTweet={setSpecTweet}
                setReplyPop={setReplyPop}
              />
            ) : (
              <OtherMain
                replyPop={replyPop}
                setReplyPop={setReplyPop}
                setSpecTweet={setSpecTweet}
                onRemove={handleOtherIdRemove}
              />
            )}

            {/* 推文與回覆推文彈跳視窗 */}
            {replyPop && (
              <ReplyPopUp replyPop={replyPop} setReplyPop={setReplyPop} />
            )}
            {twitPop && <TwitPopUp twitPop={twitPop} setTwitPop={setTwitPop} />}
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
