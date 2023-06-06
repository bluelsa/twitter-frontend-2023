import styles from './User.module.scss'
import UserReplyTweet from './UserReplyTweet'
import { Link } from 'react-router-dom'

const UserReplyList = () => {
  return (
    <>
      <nav className={styles.userNav}>
        <Link to="/user">
          <div>推文</div>
        </Link>
        <Link to="/user/replies">
          <div className={styles.active}>回覆</div>
        </Link>
        <Link to="/user/likes">
          <div>喜歡的內容</div>
        </Link>
      </nav>
      <UserReplyTweet />
      <UserReplyTweet />
      <UserReplyTweet />
      <UserReplyTweet />
    </>
  );
};

export default UserReplyList;