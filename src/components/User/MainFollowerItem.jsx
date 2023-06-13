import { ReactComponent as StopFollow } from "../../assets/image/StopFollow.svg";
import styles from "../Others/otherStyle.module.scss";
const MainFollowerItem = () => {
  return (
    <>
      <div className={styles.followContainer}>
        <div className={styles.followCollection}>
          <div className={styles.followAvatar}></div>
          <div className={styles.followContent}>
            <div className={styles.followNameInfo}>
              <div className={styles.followName}>Apple</div>
              <StopFollow />
            </div>
            <div className={styles.followArticle}>
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
