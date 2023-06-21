import styles from "../User/User.module.scss";
import { ReactComponent as Follow } from "../../assets/image/FollowButton.svg";
import { ReactComponent as UnFollow } from "../../assets/image/StopFollow.svg";
import { ReactComponent as RedEmail } from "../../assets/image/RedEmail40X40.svg";
import { ReactComponent as RedBell } from "../../assets/image/RedBell40X40.svg";
import { useState, useEffect } from "react";
import { createFollow, deleteFollow } from "../../api/followship";

const OtherProfile = ({  otherUser, isFollowing }) => {
  const [isFollowed, setIsFollowed] = useState(undefined);

  useEffect(() => {
    if (otherUser) {
      setIsFollowed(isFollowing);
    }
  }, [otherUser, isFollowing]);

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
        <div className={styles.profileContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.coverWrapper}>
              <img
                className={styles.cover}
                src={otherUser.background}
                alt="cover"
              />
            </div>
            <div className={styles.avatarWrapper}>
              <img
                className={styles.avatar}
                src={otherUser.avatar}
                alt="avatar"
              />
            </div>
          </div>

          <div className={styles.otherProSection}>
            <div>
              <RedEmail className={styles.emailIcon} />
              <RedBell className={styles.bellIcon} />
              {isFollowed ? (
                <Follow
                  className={styles.followIcon}
                  onClick={() => {
                    setIsFollowed(false);
                    handleUnfollow(otherUser.id);
                  }}
                />
              ) : (
                <UnFollow
                  className={styles.followIcon}
                  onClick={() => {
                    setIsFollowed(true);
                    handleFollow(otherUser.id);
                  }}
                />
              )}
            </div>
          </div>
          <div className={styles.infoDescription}>
            <div className={styles.name}>{otherUser.name}</div>
            <div className={styles.account}>@{otherUser.account}</div>
            <div className={styles.description}>{otherUser.introduction}</div>
            <div className={styles.numWrapper}>
              <p>
                {otherUser.followingCount} 位
                <span className={styles.sub}> 跟隨中</span>
              </p>
              <p>
                {otherUser.followerCount} 位
                <span className={styles.sub}> 跟隨者</span>
              </p>
            </div>
          </div>
        </div>
  );
};

export default OtherProfile;
