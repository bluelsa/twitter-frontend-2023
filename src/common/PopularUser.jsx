import styles from "../pages/HomeStyle.module.scss";
import { ReactComponent as FollowButton } from "../assets/image/FollowButton.svg";
import { ReactComponent as StopFollow } from "../assets/image/StopFollow.svg";
import { useState } from "react";
import { createFollow, deleteFollow } from "../api/followship";

const PopularUser = ({ popular }) => {
  const [isFollowed, setIsFollowed] = useState(popular.isFollowed);
  

  // console.log('popular isFollowed: '+popular.isFollowed)

  const handleFollow = async (id) => {
    try {
      await createFollow(id);
      setIsFollowed(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async (id) => {
    try {
      await deleteFollow(id);
      setIsFollowed(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.followerContainer}>
      <div className={styles.followerContent}>
        <div className={styles.twitAvatar}>
          <img src={popular.avatar} alt="avatar" />
        </div>
        <div className={styles.follower}>
          <div className={styles.followerName}>{popular.name}</div>
          <div className={styles.followerTime}>@{popular.account}</div>
        </div>
        <div className={styles.buttonPosition}>
          {isFollowed ? (
            <FollowButton
              onClick={() => {
                setIsFollowed(false);
                handleUnfollow(popular.id);
              }}
            />
          ) : (
            <StopFollow
              onClick={() => {
                setIsFollowed(true);
                handleFollow(popular.id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularUser;
