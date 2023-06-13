import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import { useState } from 'react'
import styles from "../Others/otherStyle.module.scss";
const MainFollowingItem = () => {
  const [isFollowing, setIsFollowing] = useState(true)
  return (
    <>
      <div className={styles.followContainer}>
        <div className={styles.followCollection}>
          <div className={styles.followAvatar}></div>
          <div className={styles.followContent}>
            <div className={styles.followNameInfo}>
              <div className={styles.followName}>Apple</div>
              {isFollowing ? (<FollowButton onClick={()=>setIsFollowing(false)}/>): (<StopFollow onClick={()=>setIsFollowing(true)}/>)}
            </div>
            <div className={styles.foloArticle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
              temporibus, non enim debitis ipsum repudiandae beatae nesciunt ea
              odio?
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainDivider}></div>
    </>
  );
};

export default MainFollowingItem;
