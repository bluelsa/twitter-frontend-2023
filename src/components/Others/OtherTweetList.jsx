import styles from "../User/User.module.scss";
import OtherTweet from "./OtherTweet";
import { useAuth } from "../../contexts/AuthContext";



const OtherTweetList = ({ 
  setSpecTweet,
  setReplyPop }) => {

  const { otherTweets } = useAuth()

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
