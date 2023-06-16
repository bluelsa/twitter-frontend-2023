import styles from "./replyStyle.module.scss";

const UserSpecReply = ({ reply, replyAccount }) => {
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
              @{reply.RepliedUser.account} &bull;3小時
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

export default UserSpecReply;
