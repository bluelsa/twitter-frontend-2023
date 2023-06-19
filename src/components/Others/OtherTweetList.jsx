import styles from "../User/User.module.scss";
import OtherTweet from "./OtherTweet";
import { useState, useEffect } from 'react'
import { getUserTweets } from "../../api/user";



const OtherTweetList = ({ 
  setSpecTweet,
  setReplyPop }) => {

  const [otherTweets, setOtherTweets] = useState([])

  const otherId = localStorage.getItem("otherId")

  useEffect(() => {
    const getUserTweetsAsync = async (otherId) => {
      try {
        const otherTweets = await getUserTweets(otherId);
        if (!otherTweets.status) {
          setOtherTweets(otherTweets);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetsAsync(otherId);
  }, [otherId]);

  return (
    <div className={styles.userList}>
      {otherTweets.map((otherTweet) => {
        return (
          <OtherTweet
          key={otherTweet.id}
            setSpecTweet={setSpecTweet}
            otherTweet={otherTweet}
            setReplyPop={setReplyPop}
          />
        );
      })}
    </div>
  );
};

export default OtherTweetList;
