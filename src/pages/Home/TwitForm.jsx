import styles from "./HomeStyle.module.scss"
import { ReactComponent as LogoDark } from "../../assets/image/ac-logo copy.svg"
import { BiMessageRounded } from "react-icons/bi"
import { IoIosHeartEmpty } from "react-icons/io"

const TwitForm = () => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetCollection}>
        <div className={styles.logoWrap}>
          <LogoDark className={styles.darkLogo} />
        </div>
        <div className={styles.tweetContent}>
          <div className={styles.nameInfo}>
            <div className={styles.tweetName}>Apple</div>
            <div className={styles.tweetTime}>@apple &bull;3小時</div>
          </div>
          <div className={styles.tweetArticle} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo temporibus, non enim debitis ipsum repudiandae beatae nesciunt ea odio?
          </div>
          <div className={styles.tweetMessage}>
            <div className={styles.smallIcon}>
              <BiMessageRounded className={styles.icon} />
              <div>13</div>
            </div>
            <div className={styles.smallIcon}>
              <IoIosHeartEmpty className={styles.icon} />
              <div>73</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitForm;
