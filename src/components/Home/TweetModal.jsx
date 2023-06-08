import styles from "../../pages/HomeStyle.module.scss";

const TweetModal = () => {
return (
  <div className={styles.modalContainer} >
    <div className={styles.modalHeader}>
      {/* <RxCross2 className={styles.modalIcon}/> */}
      <smallx />
    </div>
    <div className={styles.post}>
      <div className={styles.posting}>
        <div className={styles.avatar}>
         </div>
         <textarea
          className={styles.avatarTitle}
          placeholder="有什麼新鮮事？"
        ></textarea>
      </div>
    </div>
    <button className={styles.postButton}>
      <div>推文</div>
    </button>
  </div>

)
}

export default TweetModal