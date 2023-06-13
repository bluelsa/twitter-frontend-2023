import styles from './User.module.scss'
import UserTweet from "./UserTweet";

const UserTweetList = ({ user, userTweets }) => {
  return (
    <div className={styles.userList}>
      {userTweets.map((userTweet) => {
        return <UserTweet user={user} userTweet={userTweet} />;
      })}
    </div>
  );
};

export default UserTweetList;
