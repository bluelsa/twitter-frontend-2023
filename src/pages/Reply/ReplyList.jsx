import styles from "./replyStyle.module.scss";

const ReplyList = () => {
  return (
    <>
      <div className={styles.tweetContainer}>
        <div className={styles.listCollection}>
          <div className={styles.twitAvatar}>{/* <Head /> */}</div>
          <div className={styles.listContent}>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>Apple</div>
              <div className={styles.tweetTime}>@apple &bull;3小時</div>
            </div>

            <div className={styles.replyTo}>
              <div>
                回覆 <span>@Apple</span>
              </div>
            </div>

            <div className={styles.listArticle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
              temporibus, non enim debitis ipsum repudiandae beatae nesciunt
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainDivider}></div>
    </>
  );
};

export default ReplyList;
