import styles from "./replyStyle.module.scss";

const SpecReplyTweet = () => {
  return (
    <div className={styles.replyContainer}>
          <div className={styles.avatarWrap}>
            <img src="https://i.pravatar.cc" alt="avatar" />
          </div>
          <div className={styles.replyContent}>
            <div>
              <div className={styles.replyInfo}>
                <div className={styles.tweetName}>Apple</div>
                <div className={styles.tweetTime}>
                  @apple &bull;3小時
                </div>
              </div>
              <div className={styles.reply}>
                <span>回覆</span>
                <span className={styles.replyTo}>
                  @banana
                </span>
              </div>
            </div>

            <div className={styles.tweetReplyArticle}>geruisopa;hgiowelfiashloihgelork ghieowa;hgik gheiowaj gdhisa gdhisoa hioewhvwg </div>
          </div>
    </div>
  );
};

export default SpecReplyTweet;
