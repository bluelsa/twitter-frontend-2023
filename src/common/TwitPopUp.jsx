import styles from "../pages/HomeStyle.module.scss";
import { ReactComponent as ModalX } from "../assets/image/ModalX.svg";
import { ReactComponent as PostButton } from "../assets/image/PostButton.svg";
import { ReactComponent as Avatar } from '../assets/image/PostPhoto.svg'

const TwitPopUp = (props) => {
  return (
    <div className={styles.popContainer}>
      <div className={styles.popInner}>
        <div className={styles.popHeader}>
          <ModalX
            className={styles.deleteIcon}
            onClick={() => props.setTwit(false)}
          />
        </div>
        <div className={styles.mainDivider}></div>
        <div className={styles.postContainer}>
          <div className={styles.postContent}>
            <div className={styles.postAvatar}>
              <Avatar/>
            </div>
            <textarea
              className={styles.postText}
              placeholder="有什麼新鮮事？"
            ></textarea>
          </div>
        </div>
        <div className={styles.popButton} onClick={() => props.setTwit(false)}>
          <PostButton />
        </div>
      </div>
    </div>
  );
};

export default TwitPopUp;
