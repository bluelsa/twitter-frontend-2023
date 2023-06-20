import styles from "../../pages/HomeStyle.module.scss";
import Post from "./Post";
import MainTweetList from "./MainTweetList";

function Twits({
  post,
  setPost,
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
      setPost={setPost}
      twitPop={twitPop} 
      setTwitPop={setTwitPop} />
      <div className={styles.postDivider}></div>
      <div className={styles.tweets}>
        <MainTweetList
        post={post}
          twitPop={twitPop}
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
