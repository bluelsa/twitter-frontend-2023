import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import styles from "../Others/otherStyle.module.scss";
const MainFollowerItem = ({follower}) => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.avatarWrap}>
            <img src="https://i.pravatar.cc" alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>{follower.Followers.name}</div>
              <div className={styles.followIcon}>
                <StopFollow/>
              </div>
            </div>
            <div className={styles.userIntroduction}>
              {follower.Followers.introduction}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFollowerItem;
