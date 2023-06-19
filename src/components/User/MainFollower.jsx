import styles from "../Others/otherStyle.module.scss";
import MainFollowerItem from "./MainFollowerItem";
import { ReactComponent as FollowerIcon } from "../../assets/image/follower-active.svg";
import { ReactComponent as FollowingIcon } from "../../assets/image/following.svg";
import { ReactComponent as Arrow } from "../../assets/image/Arrow.svg";
import { useEffect, useState } from 'react'
import { getUserFollowers } from "../../api/user";
import { useAuth } from "../../contexts/AuthContext";

const MainFollowers = ({ setMain, setFollower, setFollowing }) => {
  const { user } = useAuth()
  const [followers, setFollowers] = useState([])
  const [isFollowers, setIsFollowers] = useState(true)


  useEffect(() => {
    const getUserFollowersAsync = async () => {
      try {
        const followers = await getUserFollowers(user.id);

        if (!followers.status) {
          setFollowers(followers);
        }
      } catch (error) {
        setIsFollowers(false)
      }
    };

    getUserFollowersAsync(user.id);
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
            className={styles.followerIcon}
            onClick={() => {
              setMain(false);
              setFollowing(false);
              setFollower(true);
            }}
          />
        </div>
        <div className={styles.followingIcon}>
          <FollowingIcon
            className={styles.followingIcon}
            onClick={() => {
              setMain(false);
              setFollowing(true);
              setFollower(false);
            }}
          />
        </div>
      </div>
      {isFollowers ? (<div className={styles.list}>
        {followers.map((follower)=> {
          return <MainFollowerItem key={follower.id} follower={follower} />
        })}
      </div>) : (
        <h2 className={styles.noFollow}>沒有追隨者</h2>
      )}
      <div className={styles.mainDivider}></div>
    </div>
  );
};

export default MainFollowers;
