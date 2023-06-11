import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as PostButton } from "../../assets/image/PostButton.svg";
// import { ReactComponent as Avatar } from '../../assets/image/PostPhoto.svg'

const Post = (props) => {
  return (
    <div className={styles.postContainer} onClick={() => props.setTwit(true)}>
      <div className={styles.postContent}>
        <div className={styles.postAvatar}>
          <img
            className={styles.postAvatar}
            src="https://i.pravatar.cc"
            alt="avatar"
          />
          {/* <Avatar /> */}
        </div>
        <textarea
          className={styles.postText}
          placeholder="有什麼新鮮事？"
        ></textarea>
      </div>
      <div className={styles.postButton}>
        <PostButton />
      </div>
    </div>
  );
};

export default Post;
