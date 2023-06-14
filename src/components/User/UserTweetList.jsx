import styles from './User.module.scss'
import UserTweet from "./UserTweet";

const UserTweetList = ({ user, userTweets, setReplyPop }) => {
  return (
    <div className={styles.userList}>
      {userTweets.map((userTweet) => {
        return <UserTweet user={user} userTweet={userTweet} setReplyPop={setReplyPop}/>;
      })}
    </div>
  );
};

export default UserTweetList;
