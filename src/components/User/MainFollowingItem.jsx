import styles from "../Others/otherStyle.module.scss";
import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import { useState } from "react";

const MainFollowingItem = ({ following }) => {
  const [isFollowing, setIsFollowing] = useState(true);

  return (
      <div className={styles.followWrapper}>
        <div className={styles.followCollection}>
          <div className={styles.avatarWrap}>
            <img src={following.Followings.avatar} alt="avatar" />
          </div>
          <div className={styles.followContent}>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>
                {following.Followings.name}
              </div>
            </div>
            <div className={styles.userIntroduction}>
              {following.Followings.introduction}
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
  );
};

export default MainFollowingItem;
