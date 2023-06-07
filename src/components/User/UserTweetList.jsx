import styles from "./User.module.scss";
import UserTweet from "./UserTweet";
import { Link } from "react-router-dom";

const UserTweetList = () => {
  return (
    <>
      <nav className={styles.userNav}>
        <Link to="/user">
          <div className={styles.active}>推文</div>
        </Link>
        <Link to="/user/replies">
          <div>回覆</div>
        </Link>
        <Link to="/user/likes">
          <div>喜歡的內容</div>
        </Link>
      </nav>
      <UserTweet />
      <UserTweet />
      <UserTweet />
      <UserTweet />
      <UserTweet />
    </>
  );
};

export default UserTweetList;
