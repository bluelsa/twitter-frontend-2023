import styles from "./User.module.scss";
import { ReactComponent as LogoDark } from "../../assets/image/DarkLogo.svg";

const UserReplyTweet = () => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetCollection}>
        <div className={styles.logoWrap}>
          <LogoDark className={styles.darkLogo} />
        </div>
        <div className={styles.tweetContent}>
          <div>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>John Doe</div>
              <div className={styles.tweetTime}>@heyjohn &bull;3小時</div>
            </div>
            <div className={styles.reply}>
              <span>回覆</span>
              <span className={styles.replyTo}>@apple</span>
            </div>
          </div>

          <div className={styles.tweetArticle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo temporibus
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReplyTweet;
