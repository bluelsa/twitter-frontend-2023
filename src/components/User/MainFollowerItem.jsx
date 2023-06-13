import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import styles from "../Others/otherStyle.module.scss";
const MainFollowerItem = () => {
  return (
    <>
      <div className={styles.foloContainer}>
        <div className={styles.foloCollection}>
          <div className={styles.foloAvatar}></div>
          <div className={styles.foloContent}>
            <div className={styles.folonameInfo}>
              <div className={styles.tweetName}>Apple</div>
              <StopFollow />
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

export default MainFollowerItem;
