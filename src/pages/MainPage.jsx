import styles from "./HomeStyle.module.scss";
import NavBar from "../common/NavBar";
import Popular from "../common/Popular";
import Twits from "../components/Home/Twits";
import TwitPopUp from "../common/TwitPopUp";
import ReplyPopUp from "../components/Home/ReplyPopUp";
import { useState } from "react";
import SpecTweet from "../common/Reply/SpecTweet";

const MainPage = () => {
  const [twitPop, setTwitPop] = useState(false);
  const [specTweet, setSpecTweet] = useState(false);
  const [replyPop, setReplyPop] = useState(false);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
          <NavBar twitPop={twitPop} setTwitPop={setTwitPop} />
        </div>
        {/* 中間推文部分 */}

        <div className={styles.middleColumn}>
          <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
            {specTweet ? (
              <SpecTweet
                setSpecTweet={setSpecTweet}
                setReplyPop={setReplyPop}
              />
            ) : (
              <Twits
                twitPop={twitPop}
                setTwitPop={setTwitPop}
                specTweet={specTweet}
                setSpecTweet={setSpecTweet}
                replyPop={replyPop}
                setReplyPop={setReplyPop}
              />
            )}

            {replyPop && (
              <ReplyPopUp
                replyPop={replyPop}
                setReplyPop={setReplyPop}
              />
            )}
            {twitPop && (
              <TwitPopUp
                twitPop={twitPop}
                setTwitPop={setTwitPop}
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
