import styles from "../User/User.module.scss";
import { ReactComponent as EditPrivate } from "../../assets/image/UserPrivate.svg";

const UserProfile = ({
  user,
  main,
  setMain,
  follower,
  setFollower,
  following,
  setFollowing,
  setEditPopup,
}) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageWrapper}>
        <div>
          <img
            className={styles.cover}
            src={user.background}
            alt="background"
          />
        </div>
        <div>
          <img className={styles.avatar} src={user.avatar} alt="avatar" />
        </div>
      </div>
      <button
        className={styles.editButton}
        onClick={() => {
          setEditPopup(true);
          setFollower(false);
          setFollowing(false);
        }}
      >
        編輯個人資料
      </button>
      <div className={styles.infoDescription}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.account}>@{user.account}</div>
        <div className={styles.description}>{user.introduction}</div>
        <div className={styles.numWrapper}>
          <p
            onClick={() => {
              setMain(false);
              setFollower(false);
              setFollowing(true);
            }}
          >
            {user.followingCount}位 <span className={styles.sub}> 跟隨中</span>
          </p>
          <p
            onClick={() => {
              setMain(false);
              setFollower(true);
              setFollowing(false);
            }}
          >
            {user.followerCount}位 <span className={styles.sub}> 跟隨者</span>
          </p>
        </div>
      </div>
    </div>

    // <>
    //   <div className={styles.imageContainer}>
    //     <img className={styles.otherCover} src={user.background} alt="cover" />

    //     <img className={styles.otherAvatar} src={user.avatar} alt="avatar" />

    //     <div className={styles.followSection}>
    //       <div>
    //         <EditPrivate
    //           className={styles.interaction}
    // onClick={() => {
    //   setEditPopup(true);
    //   setFollower(false)
    //   setFollowing(false)
    // }}
    //         />
    //       </div>
    //     </div>

    //     <div className={styles.otherDescription}>
    //       <div className={styles.otherPerson}>
    //         <div className={styles.otherName}>{user.name}</div>
    //         <div className={styles.otherAccount}>@{user.account}</div>
    //       </div>

    //       <div className={styles.description}>
    //         {user.introduction}
    //         </div>
    //       <div className={styles.otherNumWrapper}>
    //         <div
    //           className={styles.interaction}
    //           onClick={() => {
    //             setMain(false)
    //             setFollowing(true);
    //             setFollower(false);
    //           }}
    //         >
    //           34 個<span>跟隨中</span>
    //         </div>
    //         <div
    //           className={styles.interaction}
    //           onClick={() => {
    //             setMain(false)
    //             setFollowing(false);
    //             setFollower(true);
    //           }}
    //         >
    //           59 位<span>跟隨者</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default UserProfile;
