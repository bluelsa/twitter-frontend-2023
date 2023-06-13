import styles from "../Others/otherStyle.module.scss";
// import Twitredbox from '../../assets/image/REDwithline.svg'

const UserNav = ({twitSection, setTwitSection, replySection, setReplySection, likeSection, setLikeSection}) => {
  return (
    <div className={styles.stickContainer}>
      <div className={styles.stick}>
        <div
          onClick={() => {
            setTwitSection(true);
            setReplySection(false);
            setLikeSection(false);
          }}
          className={
            twitSection ? `${styles.stickRed}` : `${styles.origin}`
          }
        >
          推文
        </div>

        <div
          onClick={() => {
            setTwitSection(false);
            setReplySection(true);
            setLikeSection(false);
          }}
          className={
            replySection ? `${styles.stickRed}` : `${styles.origin}`
          }
        >
          回覆
        </div>
        <div
          onClick={() => {
            setTwitSection(false);
            setReplySection(false);
            setLikeSection(true);
          }}
          className={
            likeSection ? `${styles.stickRed}` : `${styles.origin}`
          }
        >
          喜歡的內容
        </div>
      </div>
     
    </div>
  );
};

export default UserNav;
