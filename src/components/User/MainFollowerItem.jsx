import styles from "../Others/otherStyle.module.scss";
import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import { useState } from "react";
import { createFollow, deleteFollow } from "../../api/followship";

const MainFollowerItem = ({ follower }) => {
  const [isFollowing, setIsFollowing] = useState(follower.isFollowed);

const handleFollow = async (id) => {
  try {
    await createFollow(id);
    setIsFollowing(true);
  } catch (error) {
    console.error(error);
  }
};

const handleUnfollow = async (id) => {
  try {
    await deleteFollow(id);
    setIsFollowing(false);
  } catch (error) {
    console.error(error);
  }
};

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
                <FollowButton
                  onClick={() => {
                    setIsFollowing(false);
                    handleUnfollow(follower.followerId);
                  }}
                />
              ) : (
                <StopFollow
                  onClick={() => {
                    setIsFollowing(true);
                    handleFollow(follower.followerId);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFollowerItem;
