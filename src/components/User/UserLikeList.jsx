import styles from "./User.module.scss";
import UserLikeTweet from "./UserLikeTweet";
import { Link } from "react-router-dom";

const UserLikeList = () => {
  return (
    <>
      <nav className={styles.userNav}>
        <Link to="/user">
          <div>推文</div>
        </Link>
        <Link to="/user/replies">
          <div>回覆</div>
        </Link>
        <Link to="/user/likes">
          <div className={styles.active}>喜歡的內容</div>
        </Link>
      </nav>
      <UserLikeTweet />
      <UserLikeTweet />
      <UserLikeTweet />
    </>
  );
};

export default UserLikeList;
