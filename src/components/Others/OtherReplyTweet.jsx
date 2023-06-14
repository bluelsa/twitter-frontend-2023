import styles from "../User/User.module.scss";

const OtherReplyTweet = ({otherReply}) => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.avatarWrap}>
            <img src={otherReply.RepliedUser.avatar} alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>
                  {otherReply.RepliedUser.name}{" "}
                </div>
                <div className={styles.tweetTime}>
                  @{otherReply.RepliedUser.account} &bull;3小時
                </div>
              </div>
              <div className={styles.reply}>
                <span>回覆</span>
                <span className={styles.replyTo}>
                  @{otherReply.Tweet.TweetUser.account}{" "}
                </span>
              </div>
            </div>

            <div className={styles.tweetReplyArticle}>{otherReply.comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherReplyTweet;
