import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
// import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import styles from "../../pages/HomeStyle.module.scss";
const Follower = () => {
  return (
    <div className={styles.followerContainer}>
      <div className={styles.followerContent}>
        <div className={styles.twitAvatar}>
          {/* <LogoDark className={styles.darkLogo} /> */}
        </div>
        <div className={styles.follower}>
          <div className={styles.followerName}>Pizza Hut</div>
          <div className={styles.followerTime}>@Pizzahut</div>
        </div>
        <div className={styles.buttonPosition}>
          <FollowButton />
        </div>
      </div>
    </div>
  );
};

export default Follower;
