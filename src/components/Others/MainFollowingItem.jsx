import { ReactComponent as FollowButton } from "../../assets/image/FollowButton.svg";
// import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import styles from "./otherStyle.module.scss";
const MainFollowItem = () => {
  return (
    <>
      <div className={styles.foloContainer}>
        <div className={styles.foloCollection}>
          <div className={styles.foloAvatar}></div>
          <div className={styles.foloContent}>
            <div className={styles.folonameInfo}>
              <div className={styles.folotName}>Apple</div>
              <FollowButton />
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

export default MainFollowItem;
