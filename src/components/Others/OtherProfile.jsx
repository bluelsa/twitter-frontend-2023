import styles from "../User/User.module.scss";
import { ReactComponent as Follow } from "../../assets/image/FollowButton.svg";
import { ReactComponent as UnFollow } from "../../assets/image/StopFollow.svg";
import { ReactComponent as RedEmail } from "../../assets/image/RedEmail40X40.svg";
import { ReactComponent as RedBell } from "../../assets/image/RedBell40X40.svg";
import { useState } from "react";
// import { getUser } from "../../api/user";

const OtherProfile = ({otherUser}) => {
  const [isFollow, setIsFollow] = useState(true);
  // const [otherUser, setOtherUser] = useState({});

  // useEffect(() => {
  //   const id = localStorage.getItem("otherId");
  //   const getUsersAsync = async (id) => {
  //     try {
  //       const otherUser = await getUser(id);
  //       if (!otherUser.status) {
  //         setOtherUser(otherUser);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getUsersAsync(id);
  // }, []);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageWrapper}>
        <div>
          <img
            className={styles.cover}
            src={otherUser.background}
            alt="cover"
          />
        </div>
        <div>
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
          {isFollow ? (
            <Follow
              className={styles.followIcon}
              onClick={() => {
                setIsFollow(false);
              }}
            />
          ) : (
            <UnFollow
              className={styles.followIcon}
              onClick={() => {
                setIsFollow(true);
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
            {otherUser.followingCount}{" "}位
            <span className={styles.sub}> 跟隨中</span>
          </p>
          <p>
            {otherUser.followerCount}{" "}位
            <span className={styles.sub}> 跟隨者</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
