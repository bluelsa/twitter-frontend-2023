import styles from "../../pages/HomeStyle.module.scss";
import Post from "./Post";
import MainTwitForm from "./MainTweetForm";
import { useState, useEffect } from "react";
import {getTweetsAll} from '../../api/tweets'

function Twits(props) {
  const [tweets, setTweets] = useState({});

  const id = localStorage.getItem("userId");
  console.log("replies吃到了嗎?", tweets);

  useEffect(
    () => {
      const getAllReplyAsync = async () => {
        try {
          const allReply = await getTweetsAll();
          // if (!allReply.status) {
          setTweets(allReply);
          // }
          console.log("nonono:", allReply);
        } catch (error) {
          console.log("get allTwits failed", error);
        }
      };
      getAllReplyAsync();
    },
    [tweets]
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
