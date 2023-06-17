import styles from './User.module.scss'
import UserTweet from "./UserTweet";

const UserTweetList = ({ userTweets,
  setMain,
  setSpecTweet, 
  setReplyPop }) => {
  return (
    <div className={styles.userList}>
      {userTweets.map((userTweet) => {
        return <UserTweet 
        key={userTweet.id}
        userTweet={userTweet} 
        setMain={setMain}
        setReplyPop={setReplyPop} 
        setSpecTweet={setSpecTweet}/>;
      })}
    </div>
  );
};

export default UserTweetList;
