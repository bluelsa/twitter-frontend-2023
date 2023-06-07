import styles from "./HomeStyle.module.scss";
import { ReactComponent as ModalX } from "../../assets/image/ModalX.svg";
import { ReactComponent as PostButton } from "../../assets/image/PostButton.svg";
 import Post from "./Post";

const TwitPopUp = () => {
  return (
    <div className={styles.popContainer}>
      <div className={styles.popHeader}>
        <div>
          <ModalX />
        </div>
      </div>
      <div className={styles.mainDivider}></div>
      <Post />
      <div className={styles.popButton}>
        <PostButton />
      </div>
    </div>
  );
};

export default TwitPopUp;
