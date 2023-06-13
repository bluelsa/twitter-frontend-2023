import styles from "../Others/otherStyle.module.scss";
// import MainFollowingItem from "./MainFollowingItem";
import MainFollowerItem from "./MainFollowerItem";
import { ReactComponent as FollowerIcon } from "../../assets/image/follower-active.svg";
import { ReactComponent as FollowingIcon } from "../../assets/image/following.svg";
import { ReactComponent as Arrow } from "../../assets/image/Arrow.svg";

const MainFollowers = ({ user, setMain, setFollower, setFollowing }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.arrow}
          onClick={() => {
            setMain(true);
            setFollowing(false);
            setFollower(false);
          }}
        >
          <Arrow />
        </div>

        <div className={styles.returnWrapper}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.tweetNum}>{user.userTweetCount} 推文</div>
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.followerIcon}>
          <FollowerIcon
            onClick={() => {
              setMain(false);
              setFollowing(false);
              setFollower(true);
            }}
          />
        </div>
        <div className={styles.followingIcon}>
          <FollowingIcon
            onClick={() => {
              setMain(false);
              setFollowing(true);
              setFollower(false);
            }}
          />
        </div>
      </div>
      <div className={styles.tweetWrapper}>
        <MainFollowerItem />
        <MainFollowerItem />
        <MainFollowerItem />
        <MainFollowerItem />
      </div>
    </div>
  );
};

export default MainFollowers;
