import styles from "./replyStyle.module.scss";
import ElapsedTime from "../ElapsedTime";

const SpecReplyTweet = ({reply, replyAccount}) => {
  return (
    <div className={styles.replyContainer}>
      <div className={styles.tweetAvatarWrap}>
        <img
          className={styles.tweetAvatar}
          src={reply.RepliedUser.avatar}
          alt="avatar"
        />
      </div>
      <div className={styles.replyContent}>
        <div>
          <div className={styles.replyInfo}>
            <div className={styles.tweetName}>{reply.RepliedUser.name}</div>
            <div className={styles.tweetTime}>
              @{reply.RepliedUser.account} &bull;
              <ElapsedTime createdAt={reply.createdAt} />
            </div>
          </div>
          <div className={styles.reply}>
            <span>回覆</span>
            <span className={styles.replyTo}>@{replyAccount}</span>
          </div>
        </div>

        <div className={styles.tweetReplyArticle}>{reply.comment} </div>
      </div>
    </div>
  );
};

export default SpecReplyTweet;
