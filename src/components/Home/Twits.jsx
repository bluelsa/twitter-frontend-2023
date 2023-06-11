import styles from "../../pages/HomeStyle.module.scss";
import TwitForm from "./TwitForm";
import Post from "./Post";
import { useState, useEffect } from "react";


function Twits(props) {
  // const [tweets, setTweets] = useState([]);
  
  //   useEffect(() => {
  // const getAsyncTweets = async () => {
  //   try {
  //     const allTweets = await getTweetsAll();
  //     console.log(allTweets);
  //     console.log("推特專案");

  //     setTweets(allTweets.map((item) =>item));

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getAsyncTweets();
  //   }, []);

  // console.log(tweets);

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
  );
}

export default Twits;
