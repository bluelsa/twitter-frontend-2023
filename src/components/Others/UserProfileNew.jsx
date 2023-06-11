import styles from "./otherStyle.module.scss";
import { ReactComponent as EditPrivate } from "../../assets/image/UserPrivate.svg";

const UserProfileNew = ({
  user,
  setIsFollow,
  setIsWhole,
  setIsChange,
  setEditPopup
}) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img className={styles.otherCover} src={user.background} alt="cover" />

        <img className={styles.otherAvatar} src={user.avatar} alt="avatar" />

        <div className={styles.followSection}>
          <div>
            <EditPrivate
              className={styles.interaction}
              onClick={() => setEditPopup(true)}
            />
          </div>
        </div>

        <div className={styles.otherDescription}>
          <div className={styles.otherPerson}>
            <div className={styles.otherName}>{user.name}</div>
            <div className={styles.otherAccount}>@{user.account}</div>
          </div>

          <div className={styles.description}>other test.</div>
          <div className={styles.otherNumWrapper}>
            <div
              className={styles.interaction}
              onClick={() => {
                setIsFollow(true);
                setIsWhole(false)
                setIsChange(true);
              }}
            >
              34 個<span>跟隨中</span>
            </div>
            <div
              className={styles.interaction}
              onClick={() => {
                setIsFollow(false);
                setIsWhole(true);
                setIsChange(true);
              }}
            >
              59 位<span>跟隨者</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileNew;
