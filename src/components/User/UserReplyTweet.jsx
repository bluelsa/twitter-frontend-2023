import styles from "./User.module.scss";


const UserReplyTweet = ({user, userReply}) => {
  return (
    <div className={styles.tweetContainer}>
    <div className={styles.tweetCollection}>
      <div className={styles.avatarWrap}>
        <img src="https://i.pravatar.cc" alt="" />
      </div>
      <div className={styles.tweetContent}>
        <div>
          <div className={styles.nameInfo}>
            <div className={styles.tweetName}>{user.name}</div>
            <div className={styles.tweetTime}>@{user.account} &bull;3小時</div>
          </div>
          <div className={styles.reply}>
            <span>回覆</span>
            <span className={styles.replyTo}>@{userReply.Tweet.userId}</span>
          </div>
        </div>

        <div className={styles.tweetReplyArticle}>
          {userReply.comment}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserReplyTweet;
