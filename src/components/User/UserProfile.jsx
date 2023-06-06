import styles from './User.module.scss'

const UserProfile = () => {
  return (
    <div className={styles.Container}>
      <img
        className={styles.cover}
        src="https://picsum.photos/639/200"
        alt="cover"
      />
      <img className={styles.avatar} src="https://i.pravatar.cc" alt="avatar" />
      <button className={styles.editButton}>編輯個人資料</button>
      <div className={styles.infoDescription}>
        <div className={styles.name}>John Doe</div>
        <div className={styles.account}>@heyjohn</div>
        <div className={styles.description}>This is my post.</div>
        <div className={styles.numWrapper}>
          <p>
            34 個<span className={styles.sub}>跟隨中</span>
          </p>
          <p>
            59 位<span className={styles.sub}>跟隨者</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile