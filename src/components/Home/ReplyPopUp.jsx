import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as ModalX } from "../../assets/image/ModalX.svg";
import { ReactComponent as ReplyButton } from "../../assets/image/ReplyButton.svg";

const ReplyPopUp = (props) => {
  return (
    <div className={styles.replyPopUpContanier}>
      <div className={styles.replyPopHeader}>
        <div>
          <ModalX
            className={styles.interaction}
            onClick={() => props.setReplyPop(false)}
          />
        </div>
      </div>
      <div className={styles.mainDivider}></div>

      <div className={styles.replyCollection}>
        <div className={styles.replyAvatar}>
          <div className={styles.avatarWrap}>
            <img src="https://i.pravatar.cc" alt="avatar" />
          </div>
          <div className={styles.replyDivider}></div>
        </div>

        <div className={styles.tweetContent}>
          <div className={styles.nameInfo}>
            <div className={styles.tweetName}>{props.user.name}</div>
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
              src="https://i.pravatar.cc"
              alt="avatar"
            />
          </div>
          <textarea
            className={styles.postText}
            placeholder="有什麼新鮮事？"
          ></textarea>
        </div>
      </div>

      <div className={styles.replyButton}>
        <ReplyButton
          className={styles.interaction}
          onClick={() => props.setReplyPop(false)}
        />
      </div>
    </div>
  );
};

export default ReplyPopUp;
