import styles from "./HomeStyle.module.scss";
import { RxCross2 } from "react-icons/rx";



const TweetModal = ({id}) => {
return (
  <div className={styles.modalContainer} id={id}>
    <div className={styles.modalHeader}>
      <RxCross2 className={styles.modalIcon}/>
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
);
}

export default TweetModal