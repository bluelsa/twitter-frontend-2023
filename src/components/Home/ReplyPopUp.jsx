import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as ModalX } from "../../assets/image/ModalX.svg";
import { ReactComponent as ReplyButton } from "../../assets/image/ReplyButton.svg";

const ReplyPopUp = ({ user, setReplyPop }) => {
  return (
    <div className={styles.replyPopUpContainer}>
    <div className={styles.replyPopUpInner}>
      <div className={styles.replyPopHeader}>
        <div>
          <ModalX
            className={styles.interaction}
            onClick={() => setReplyPop(false)}
          />
        </div>
      </div>
      <div className={styles.mainDivider}></div>

      <div className={styles.replyCollection}>
        <div className={styles.replyAvatar}>
          <div className={styles.twitAvatar}>{/* <Head /> */}</div>
          <div className={styles.replyDivider}></div>
        </div>

        <div className={styles.tweetContent}>
          <div className={styles.nameInfo}>
            <div className={styles.tweetName}>Apple</div>
            <div className={styles.tweetTime}>@apple &bull;3小時</div>
          </div>
          <div className={styles.tweetArticle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            accusamus commodi reiciendis veritatis, at nostrum ut itaque
            similique quo, recusandae, iusto maxime quas eos illum! Cumque nobis
            ipsam suscipit molestias,
          </div>
          <div className={styles.replyInfo}>
            <div className={styles.replyTo}>回覆給</div>
            <div className={styles.replyName}>@Nowelswaoresndrfwef</div>
          </div>
        </div>
      </div>
      <div className={styles.postContainer}>
        <div className={styles.postContent}>
          <div className={styles.postAvatar}>
            <img
              className={styles.postAvatar}
              src={user.avatar}
              alt="avatar"
            />
          </div>
          <textarea
            className={styles.postText}
            placeholder="推你的回覆"
          ></textarea>
        </div>
      </div>

      <div className={styles.replyButton}>
        <ReplyButton
          className={styles.interaction}
          onClick={() => setReplyPop(false)}
        />
      </div>
    </div>
    </div>
  );
};

export default ReplyPopUp;
