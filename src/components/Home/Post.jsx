import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as PostButton } from "../../assets/image/PostButton.svg";

const Post = ({
  user
}) => {
  return (
    <div className={styles.postContainer} >
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
      <div className={styles.postButton}>
        <PostButton/>
      </div>
    </div>
  );
};

export default Post;
