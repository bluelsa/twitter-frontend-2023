import styles from "./HomeStyle.module.scss";

const Post = () => {
  return (
   
      <div className={styles.postContent}>
        <div className={styles.postAvatar}></div>
        <textarea
          className={styles.postText}
          placeholder="有什麼新鮮事？"
        ></textarea>
      </div>
      
 
  );
};

export default Post;
