import styles from "../Others/otherStyle.module.scss";
import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import { useState } from "react";
import { createFollow, deleteFollow } from "../../api/followship";

const MainFollowingItem = ({ following }) => {
  const [isFollowing, setIsFollowing] = useState(following.isFollowed);

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
            <FollowButton onClick={() => {
              setIsFollowing(false)
              handleUnfollow(following.followingId)
            }} />
          ) : (
            <StopFollow onClick={() => {
              setIsFollowing(true)
            handleFollow(following.followingId)}} />
          )}
        </div>
          </div>
        </div>
        
      </div>
  );
};

export default MainFollowingItem;
