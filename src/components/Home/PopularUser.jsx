import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import { useState } from 'react'
import styles from "../../pages/HomeStyle.module.scss";
const PopularUser = ({popular}) => {
  
const [isFollowed, setIsFollowed] = useState(popular.isFollowed)

  return (
    <div className={styles.followerContainer}>
      <div className={styles.followerContent}>
        <div className={styles.twitAvatar}>
          <img src="https://i.pravatar.cc" alt="avatar" />
        </div>
        <div className={styles.follower}>
          <div className={styles.followerName}>{popular.name}</div>
          <div className={styles.followerTime}>@{popular.account}</div>
        </div>
        <div className={styles.buttonPosition}>
          {isFollowed?(<FollowButton onClick={()=>{setIsFollowed(false)}}/>):(<StopFollow onClick={()=>{setIsFollowed(true)}}/>)}
        </div>
      </div>
    </div>
  );
};

export default PopularUser;
