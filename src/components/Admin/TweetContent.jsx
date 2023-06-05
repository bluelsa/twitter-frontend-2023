import styles from "./TweetList.module.scss";
import { ReactComponent as LogoDark } from "../../assets/image/ac-logo copy.svg";
import { ReactComponent as DeleteIcon } from "../../assets/image/delete-icon.svg";

const TweetContent = () => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetCollection}>
        <div className={styles.logoWrap}>
          <LogoDark className={styles.darkLogo} />
        </div>

        <div className={styles.tweetContent}>
          <div>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>Apple</div>
              <div className={styles.tweetTime}>@apple &bull;3小時</div>
              <div>
                <DeleteIcon className={styles.deleteIcon} />
              </div>
            </div>
          </div>
          <div className={styles.tweetArticle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
            temporibus, non enim debitis ipsum repudiandae beatae nesciunt ea
            odio?
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetContent;
