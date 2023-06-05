import { ReactComponent as LogoDark } from "../../assets/image/ac-Dlogo.svg";
import styles from "./HomeStyle.module.scss";
const Follower = () => {
  return (
    <div className={styles.followerContainer}>
      <div className={styles.followerContent}>
        <div className={styles.logoWrap}>
          <LogoDark className={styles.darkLogo} />
        </div>
        <div className={styles.follower}>
          <div className={styles.followerName}>Apple</div>
          <div className={styles.followerTime}>@apple</div>
        </div>
        <div className={styles.buttonPosition}>
          <button className={styles.stopFollow}>
            <div>跟隨</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Follower;
