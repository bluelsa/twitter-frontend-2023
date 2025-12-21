import styles from "../User/User.module.scss";
import { useAuth } from "../../contexts/AuthContext";

const UserProfile = ({ setMain, setFollower, setFollowing, setEditPopup }) => {
  const { user } = useAuth();

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
        Edit Profile
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
            {user.followingCount} <span className={styles.sub}>Following</span>
          </p>
          <p
            onClick={() => {
              setMain(false);
              setFollower(true);
              setFollowing(false);
            }}
          >
            {user.followerCount} <span className={styles.sub}>Followers</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
