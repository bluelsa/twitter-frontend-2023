import styles from "../User/User.module.scss";
import MainTweetForm from "./MainTweetForm";
import { useState, useEffect } from "react";
import { getTweetsAll } from "../../api/tweets";

const MainTweetList = ({ post, twitPop, replyPop, setSpecTweet, setReplyPop }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const twts = await getTweetsAll();
        setTweets(twts);
      } catch (error) {
        console.error(error);
      }
    };

    getTweetsAsync();
  }, [twitPop,replyPop,post]); 

  return (
    <div className={styles.list}>
      {tweets.map((tweet) => {
        return (
          <MainTweetForm
            key={tweet.id}
            tweet={tweet}
            setReplyPop={setReplyPop}
            setSpecTweet={setSpecTweet}
          />
        );
      })}
    </div>
  );
};

export default MainTweetList;
