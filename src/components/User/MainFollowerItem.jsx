import styles from "../Others/otherStyle.module.scss";
import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import { useState } from "react";

const MainFollowerItem = ({ follower }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className={styles.followeContainer}>
      <div className={styles.followWrapper}>
        <div className={styles.followCollection}>
          <div className={styles.avatarWrap}>
            <img src={follower.Followers.avatar} alt="avatar" />
          </div>
          <div className={styles.followContent}>
            <div className={styles.nameInfo}>{follower.Followers.name}</div>
            <div className={styles.userIntroduction}>
              {follower.Followers.introduction}
            </div>
            <div className={styles.followIcon}>
              {isFollowing ? (
                <FollowButton onClick={() => setIsFollowing(false)} />
              ) : (
                <StopFollow onClick={() => setIsFollowing(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFollowerItem;
