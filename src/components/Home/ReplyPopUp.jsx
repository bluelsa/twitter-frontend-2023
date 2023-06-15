import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as ModalX } from "../../assets/image/ModalX.svg";
import { ReactComponent as ReplyButton } from "../../assets/image/ReplyButton.svg";
import { useState, useEffect } from "react";
import { getTweet } from "../../api/tweets";

const ReplyPopUp = ({ user, setReplyPop }) => {
  const [replyTweet, setReplyTweet] = useState(undefined);

const tweetId = localStorage.getItem("tweetId")

  useEffect(() => {
    const getTweetAsync = async () => {
      try {
        const replyTweet = await getTweet(tweetId);
        if (!replyTweet.status) {
          setReplyTweet(replyTweet);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getTweetAsync(tweetId);
  }, [tweetId]);

  const handleReplyChange = () => {
    localStorage.removeItem("tweetId");
    setReplyPop(false);
  };

  return (
    <>
    {replyTweet?(<div className={styles.replyPopUpContainer}>
      <div className={styles.replyPopUpInner}>
        <div className={styles.replyPopHeader}>
          <div>
            <ModalX
              className={styles.interaction}
              onClick={handleReplyChange}
            />
          </div>
        </div>
        <div className={styles.mainDivider}></div>

        <div className={styles.replyCollection}>
          <div className={styles.replyAvatar}>
            <div className={styles.twitAvatar}>
              <img src={replyTweet.TweetUser.avatar} alt="avatar" />
            </div>
            <div className={styles.replyDivider}></div>
          </div>

          <div className={styles.tweetContent}>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>
                {replyTweet.TweetUser.name}{" "}
              </div>
              <div className={styles.tweetTime}>
                @{replyTweet.TweetUser.account} &bull;3小時
              </div>
            </div>
            <div className={styles.tweetArticle}>{replyTweet.description}</div>
            <div className={styles.replyInfo}>
              <div className={styles.replyTo}>回覆給</div>
              <div className={styles.replyName}>
                @{replyTweet.TweetUser.account}{" "}
              </div>
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
    </div>):(<></>)}
    </>
  );
};

export default ReplyPopUp;
