import styles from "../User/User.module.scss";
import OtherTweet from "./OtherTweet";
import { useState, useEffect } from 'react'
import { getUserTweets } from "../../api/user";



const OtherTweetList = ({ setReplyPop }) => {

  const [otherTweets, setOtherTweets] = useState([])

  const otherId = localStorage.getItem("otherId")

  useEffect(() => {
    const getUserTweetsAsync = async (otherId) => {
      try {
        const otherTweets = await getUserTweets(otherId);
        if (!otherTweets.status) {
          setOtherTweets(otherTweets);
        }
        // console.log('otherTweets '+ JSON.stringify(otherTweets))
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
            otherTweet={otherTweet}
            setReplyPop={setReplyPop}
          />
        );
      })}
    </div>
  );
};

export default OtherTweetList;
