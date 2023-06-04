import styles from "./HomeStyle.module.scss"
import TwitForm from "./TwitForm";

function Twits() {
  return (
    <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
      <header className={styles.header}>
        首頁
        <div className={styles.divider}></div>
      </header>
      <div className={styles.post}>
        <div className={styles.posting}>
          <div className={styles.avatar}></div>
          <textarea className={styles.avatarTitle} placeholder="有什麼新鮮事？"></textarea>
        </div>
        <button className={styles.postButton}>
          <div>推文</div>
        </button>
        <div className={styles.postDivider}></div>
      </div>
      <div className={styles.tweets}>
        <TwitForm />
        <TwitForm />

       
       
      </div>
    </div>
  );
}

export default Twits;
