import styles from "./otherStyle.module.scss";
import { ReactComponent as EditPrivate } from "../../assets/image/UserPrivate.svg";


const OtherProfile = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img
          className={styles.otherCover}
          src="https://picsum.photos/639/200"
          alt="cover"
        />

        <img
          className={styles.otherAvatar}
          src="https://i.pravatar.cc"
          alt="avatar"
        />

        <div className={styles.followSection}>
          <div>
            {/* <RedEmail className={styles.interaction} />
            <RedBell className={styles.interaction} /> */}
            <EditPrivate className={styles.interaction} />
          </div>
        </div>

        <div className={styles.otherDescription}>
          <div className={styles.otherPerson}>
            <div className={styles.otherName}>Other jason</div>
            <div className={styles.otherAccount}>@other</div>
          </div>

          <div className={styles.description}>other test.</div>
          <div className={styles.otherNumWrapper}>
            <div>
              {" "}
              34 個<span>跟隨中</span>
            </div>
            <div>
              {" "}
              59 位<span>跟隨者</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherProfile;
