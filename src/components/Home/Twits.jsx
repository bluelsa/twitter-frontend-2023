import styles from "../../pages/HomeStyle.module.scss";
import Post from "./Post";
import MainTweetList from "./MainTweetList";

function Twits({
  user,
  twitPop,
  setTwitPop,
  replyTwit,
  replyPop,
  setReplyPop,
  setReplyTwit,
}) {

  return (
    <>
      <header className={styles.header}>首頁</header>
      <div className={styles.twitsDivider}></div>
      <Post
        user={user}
        twitPop={twitPop}
        setTwitPop={setTwitPop}
      />
      <div className={styles.postDivider}></div>
      <div className={styles.tweets}>
        <MainTweetList
          replyTwit={replyTwit}
          setReplyTwit={setReplyTwit}
          replyPop={replyPop}
          setReplyPop={setReplyPop}
          user={user}
        />
      </div>
    </>
  );
}

export default Twits;
