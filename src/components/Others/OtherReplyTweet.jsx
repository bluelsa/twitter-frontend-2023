import styles from "../User/User.module.scss";
import ElapsedTime from "../../common/ElapsedTime";

const OtherReplyTweet = ({otherReply}) => {

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.tweetAvatarWrap}>
            <img src={otherReply.RepliedUser.avatar} alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>
                  {otherReply.RepliedUser.name}{" "}
                </div> 
                <div className={styles.tweetTime}>
                  @{otherReply.RepliedUser.account} &bull;
                  <ElapsedTime createdAt={otherReply.createdAt} />
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
