import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as TalkIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/LikeIcon.svg";
import { Link } from "react-router-dom";

const UserSingleTweet = ({ userTweet }) => {
  return (
    <>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetCollection}>
          <div className={styles.tweetContent}>
            <div>
              <Link to="/otheruser">
                <img
                  src="https://i.pravatar.cc"
                  alt="avatar"
                  className={styles.twitAvatar}
                />
              </Link>
            </div>
            <div
              className={styles.nameInfo}

            >
              <div className={styles.tweetName}>Apple</div>
              <div className={styles.tweetTime}>@apple &bull;3小時</div>
            </div>
            <div
              className={styles.tweetArticle}
            >
              {userTweet.description}
            </div>
            {/* </Link> */}
            <div className={styles.tweetMessage}>
              <div className={styles.smallIcon}>
                <TalkIcon
                  className={styles.interaction}
                />
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

export default UserSingleTweet;
