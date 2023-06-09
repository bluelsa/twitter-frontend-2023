import styles from "./otherStyle.module.scss";

const StickOption = (props) => {
return (
  <div className={styles.stickContainer}>
    <div className={styles.stick}>
      <div
        onClick={() => {
          props.setTwitSection(true);
          props.setReplySection(false);
          props.setLikeSection(false);
        }}
        className={
          props.twitSection ? `${styles.stickRed}` : `${styles.origin}`
        }
      >
        推文
      </div>

      <div
        onClick={() => {
          props.setTwitSection(false);
          props.setReplySection(true);
          props.setLikeSection(false);
        }}
        className={
          props.replySection ? `${styles.stickRed}` : `${styles.origin}`
        }
      >
        回覆
      </div>
      <div
        onClick={() => {
          props.setTwitSection(false);
          props.setReplySection(false);
          props.setLikeSection(true);
        }}
        className={
          props.likeSection ? `${styles.stickRed}` : `${styles.origin}`
        }
      >
        喜歡的內容
      </div>
    </div>
  </div>
);

}

export default StickOption
