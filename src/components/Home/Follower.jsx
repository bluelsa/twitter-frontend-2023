import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import { useState } from 'react'
import styles from "../../pages/HomeStyle.module.scss";
const Follower = () => {
  
const [isFollow, setIsFollow] = useState(true)

  return (
    <div className={styles.followerContainer}>
      <div className={styles.followerContent}>
        <div className={styles.twitAvatar}>
          <img src="https://i.pravatar.cc" alt="avatar" />
        </div>
        <div className={styles.follower}>
          <div className={styles.followerName}>Pizza Hut</div>
          <div className={styles.followerTime}>@pizzahut</div>
        </div>
        <div className={styles.buttonPosition}>
          {isFollow?(<FollowButton onClick={()=>{setIsFollow(false)}}/>):(<StopFollow onClick={()=>{setIsFollow(true)}}/>)}
        </div>
      </div>
    </div>
  );
};

export default Follower;
