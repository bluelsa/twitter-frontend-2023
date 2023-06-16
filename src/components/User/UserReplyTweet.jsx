import styles from "./User.module.scss";

const UserReplyTweet = ({ userReply }) => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.tweetAvatarWrap}>
            <img src={userReply.RepliedUser.avatar} alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>
                  {userReply.RepliedUser.name}
                </div>
                <div className={styles.tweetTime}>
                  @{userReply.RepliedUser.account} &bull;3小時
                </div>
              </div>
              <div className={styles.reply}>
                <span>回覆</span>
                <span className={styles.replyTo}>
                  @{userReply.Tweet.TweetUser.account}
                </span>
              </div>
            </div>

            <div className={styles.tweetReplyArticle}>{userReply.comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReplyTweet;
