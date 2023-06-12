import styles from "../../pages/HomeStyle.module.scss";
// import TwitForm from "../User/TwitForm";
import Post from "./Post";

function Twits(props) {
  return (
    <>
      <header className={styles.header}>首頁</header>
      <div className={styles.twitsDivider}></div>
      <Post twit={props.twit} setTwit={props.setTwit} />
      <div className={styles.postDivider}></div>
      <div className={styles.tweets}>
        {/* <TwitForm
          replyTwit={props.replyTwit}
          setReplyTwit={props.setReplyTwit}
          replyPop={props.replyPop}
          setReplyPop={props.setReplyPop}
          twit={props.twit}
          setTwit={props.setTwit}
        /> */}
      </div>
    </>

    // </div>
  );
}

export default Twits;
