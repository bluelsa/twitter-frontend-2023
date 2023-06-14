import styles from "../Others/otherStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/Arrow.svg";
import { ReactComponent as FollowingIcon } from "../../assets/image/following-active.svg";
import { ReactComponent as FollowerIcon } from "../../assets/image/follower.svg";
import { useState, useEffect } from 'react'
import { getUserFollowings } from '../../api/user'
import MainFollowingItem from "./MainFollowingItem";

const MainFollow = ({ user, setMain, setFollower, setFollowing }) => {
  
  const [followings, setFollowings] = useState([])
  const [isFollowings, setIsFollowings] = useState(true)
  
useEffect(() => {
  const getUserFollowingsAsync = async () => {
    try {
      const followings = await getUserFollowings(user.id);

      if (!followings.status) {
        setFollowings(followings);
      }
    } catch (error) {
      // console.error(error);
      setIsFollowings(false)
    }
  };

  getUserFollowingsAsync(user.id);
}, [user.id]);

  
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
      {isFollowings ? (
        <div className={styles.list}>
          {followings.map((following) => {
            return <MainFollowingItem following={following} />;
          })}
        </div>
      ) : (
        <h2 className={styles.noFollow}>尚未追隨</h2>
      )}
      <div className={styles.mainDivider}></div>
    </div>
  );
};

export default MainFollow;
