import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as TalkIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/LikeIcon.svg";

const TwitForm = (props) => {
  return (
    <>
      <div
        className={styles.tweetContainer}
        onClick={() => props.setReplyTwit(true)}
      >
        <div className={styles.tweetCollection}>
          <div className={styles.twitAvatar}>{/* <Head /> */}</div>
          <div className={styles.tweetContent}>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>Apple</div>
              <div className={styles.tweetTime}>@apple &bull;3小時</div>
            </div>
            <div className={styles.tweetArticle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
              temporibus, non enim debitis ipsum repudiandae beatae nesciunt ea
              odio?
            </div>
            <div className={styles.tweetMessage}>
              <div
                className={styles.smallIcon}
                onClick={() => props.setReplyPop(true)}
              >
                <TalkIcon className={styles.interaction} />
                <div>13</div>
              </div>
              <div className={styles.smallIcon}>
                <LikeIcon className={styles.interaction} />
                <div>73</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainDivider}></div>
    </>
  );
};

export default TwitForm;
