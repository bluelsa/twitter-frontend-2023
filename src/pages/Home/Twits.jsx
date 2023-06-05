import styles from "./HomeStyle.module.scss"
import TwitForm from "./TwitForm";
import Post from './Post'

function Twits() {
  return (
    <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
      <header className={styles.header}>首頁</header>
      <div className={styles.headDivider}></div>
      <Post />
      {/* <div className={styles.post}>
        <div className={styles.posting}>
          <div className={styles.avatar}></div>
          <textarea className={styles.avatarTitle} placeholder="有什麼新鮮事？"></textarea>
        </div>
        <button className={styles.postButton}>
          <div>推文</div>
        </button>
        
      </div> */}
      <div className={styles.postDivider}></div>
      <div className={styles.tweets}>
        <TwitForm />
        <TwitForm />
      </div>
    </div>
  );
}

export default Twits;
