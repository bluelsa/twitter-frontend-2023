import styles from "./HomeStyle.module.scss";

function WhatIsNew() {
  return (
       <div className={styles.post}>
        <div className={styles.posting}>
          <div className={styles.avatar}></div>
          <textarea
            className={styles.avatarTitle}
            placeholder="有什麼新鮮事？"
          ></textarea>
        </div>
        <button className={styles.postButton}>
          <div>推文</div>
        </button>
        <div className={styles.postDivider}></div>
      </div>
  
  )
}

export default WhatIsNew;
