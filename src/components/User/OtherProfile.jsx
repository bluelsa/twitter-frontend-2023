import styles from "./User.module.scss";
import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
import { ReactComponent as RedEmail } from "../../assets/image/RedEmail40X40.svg";
import { ReactComponent as RedBell } from "../../assets/image/RedBell40X40.svg";

const OtherProfile = () => {
  return (
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
          <RedEmail />
          <RedBell />
          <FollowButton />
        </div>
      </div>

      <div className={styles.otherDescription}>
        <div className={styles.otherPerson}>
          <div className={styles.otherName}>Other jason</div>
          <div className={styles.otherAccount}>@other</div>
        </div>

        <div className={styles.description}>other test.</div>
        <div className={styles.numWrapper}>
          <p>
            34 個<span className={styles.sub}>跟隨中</span>
          </p>
          <p>
            59 位<span className={styles.sub}>跟隨者</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
