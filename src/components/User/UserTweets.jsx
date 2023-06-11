import styles from "../../pages/HomeStyle.module.scss";
import TwitForm from "./TwitForm";
import Post from "./Post";
import { getUserTweets } from "../../api/user";
import { useEffect, useState } from 'react'

function UserTweets({userId}) {
const [userTweets, setUserTweets] = useState([]);

useEffect(() => {
  const getUsersAsync = async (userId) => {
    try {
      const user = await getUserTweets(userId);
      if (!user.status) {
        setUserTweets(userTweets);
      }
    } catch (error) {
      console.error(error);
    }
  };
  getUsersAsync(userId);
}, [userTweets, userId]);

  return (
    <>
      <header className={styles.header}>首頁</header>
      <div className={styles.twitsDivider}></div>
      {/* <Post twit={props.twit} setTwit={props.setTwit} /> */}
      <div className={styles.postDivider}>s</div>
      <div className={styles.tweets}>
        <TwitForm
          // replyTwit={props.replyTwit}
          // setReplyTwit={props.setReplyTwit}
          // replyPop={props.replyPop}
          // setReplyPop={props.setReplyPop}
          // twit={props.twit}
          // setTwit={props.setTwit}
        />
      </div>
    </>

    // </div>
  );
}

export default UserTweets;
