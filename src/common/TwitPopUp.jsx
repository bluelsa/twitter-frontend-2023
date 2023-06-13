import styles from "../pages/HomeStyle.module.scss";
import { ReactComponent as ModalX } from "../assets/image/ModalX.svg";
import { ReactComponent as PostButton } from "../assets/image/PostButton.svg";

const TwitPopUp = ({user, setTwitPop}) => {
  return (
    <div className={styles.popContainer}>
      <div className={styles.popInner}>
        <div className={styles.popHeader}>
          <ModalX
            className={styles.deleteIcon}
            onClick={() => setTwitPop(false)}
          />
        </div>
        <div className={styles.mainDivider}></div>
        <div className={styles.postContainer}>
          <div className={styles.postContent}>
            <div className={styles.postAvatar}>
              <img
                className={styles.postAvatar}
                src={user.avatar}
                alt="avatar"
              />
            </div>
            <textarea
              className={styles.postText}
              placeholder="有什麼新鮮事？"
            ></textarea>
          </div>
        </div>
        <div className={styles.popButton} onClick={() => setTwitPop(false)}>
          <PostButton />
        </div>
      </div>
    </div>
  );
};

export default TwitPopUp;
