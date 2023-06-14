import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import { useState } from 'react'
import styles from "../Others/otherStyle.module.scss";
const MainFollowingItem = ({following}) => {
  const [isFollowing, setIsFollowing] = useState(true)
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.avatarWrap}>
            <img src="https://i.pravatar.cc" alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>{following.Followings.name}</div>
              <div className={styles.followIcon}>
              {isFollowing ? (
                <FollowButton onClick={() => setIsFollowing(false)} />
              ) : (
                <StopFollow onClick={() => setIsFollowing(true)} />
              )}
              </div>
            </div>
            <div className={styles.userIntroduction}>
              {following.Followings.introduction}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFollowingItem;
