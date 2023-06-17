import styles from "../User/User.module.scss";

const UserProfile = ({
  user,
  setMain,
  setFollower,
  setFollowing,
  setEditPopup,
}) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageWrapper}>
        <div className={styles.coverWrapper}>
          <img
            className={styles.cover}
            src={user.background}
            alt="background"
          />
        </div>
        <div className={styles.avatarWrapper}>
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
  );
};

export default UserProfile;
