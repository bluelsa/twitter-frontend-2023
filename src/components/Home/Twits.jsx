import styles from "../../pages/HomeStyle.module.scss";
import MainTwitForm from "./MainTweetForm";
import Post from "./Post";
import { getTweetsAll } from "../../api/tweets";
import { useState, useEffect } from "react";

function Twits(props) {
  const [tweetsAll, setTweetsAll] = useState({});
  const id = localStorage.getItem("userId");
  console.log("吃到了沒？", tweetsAll);

  useEffect(
    () => {
      const getAllTweets = async () => {
        try {
          const allTweets = await getTweetsAll();
          if (!allTweets.status) {
            setTweetsAll(allTweets);
           }
         console.log('nonono:', allTweets)
        } catch (error) {
          console.log("get allTwits failed", error);
        }
      };
      getAllTweets(id);
    },
    { tweetsAll }
  );

  return (
    <>
      <header className={styles.header}>首頁</header>
      <div className={styles.twitsDivider}></div>
      <Post
        twit={props.twit}
        setTwit={props.setTwit}
        user={props.user}
        twitPop={props.twitPop}
        setTwitPop={props.setTwitPop}
      />
      <div className={styles.postDivider}></div>
      <div className={styles.tweets}>
        <MainTwitForm
          replyTwit={props.replyTwit}
          setReplyTwit={props.setReplyTwit}
          replyPop={props.replyPop}
          setReplyPop={props.setReplyPop}
          twit={props.twit}
          setTwit={props.setTwit}
          user={props.user}
        />
      </div>
    </>
  );
}

export default Twits;
