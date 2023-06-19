import styles from "../../pages/HomeStyle.module.scss";
import Post from "./Post";
import MainTweetList from "./MainTweetList";

function Twits({
  twitPop,
  setTwitPop,
  replyPop,
  setReplyPop,
  specTweet,
  setSpecTweet
}) {

  return (
    <>
      <header className={styles.header}>首頁</header>
      <div className={styles.twitsDivider}></div>
      <Post 
      twitPop={twitPop} 
      setTwitPop={setTwitPop} />
      <div className={styles.postDivider}></div>
      <div className={styles.tweets}>
        <MainTweetList
          specTweet={specTweet}
          setSpecTweet={setSpecTweet}
          replyPop={replyPop}
          setReplyPop={setReplyPop}
        />
      </div>
    </>
  );
}

export default Twits;
