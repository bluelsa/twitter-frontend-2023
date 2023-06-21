import styles from "./TweetList.module.scss";
import { ReactComponent as DeleteIcon } from "../../assets/image/delete-icon.svg";

const TweetContent = ({tweet, onDelete}) => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetCollection}>
        <div className={styles.avatarWrap}>
          <img
            src={tweet.TweetUser.avatar}
            alt="avatar"
          />
        </div>

        <div className={styles.tweetContent}>
          <div>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>{tweet.TweetUser.name}</div>
              <div className={styles.tweetTime}>
                @{tweet.TweetUser.account} &bull;3小時
              </div>
              <div>
                <DeleteIcon
                  className={styles.deleteIcon}
                  onClick={() => onDelete?.(tweet.id)}
                />
              </div>
            </div>
          </div>
          <div className={styles.tweetArticle}>{tweet.description}</div>
        </div>
      </div>
    </div>
  );
};

export default TweetContent;
