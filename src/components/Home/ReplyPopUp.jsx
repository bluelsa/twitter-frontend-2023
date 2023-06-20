import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as ModalX } from "../../assets/image/ModalX.svg";
import { ReactComponent as ReplyButton } from "../../assets/image/ReplyButton.svg";
import { useState, useEffect, useRef } from "react";
import { getTweet } from "../../api/tweets";
import { createReply } from "../../api/tweets";
import { useAuth } from "../../contexts/AuthContext";

const ReplyPopUp = ({ setReplyPop }) => {
  const inputRef = useRef(null);
  const [replyTweet, setReplyTweet] = useState(undefined);
  const [hint, setHint] = useState("none");
  const [comment, setComment] = useState("");
  const { user } = useAuth()

  const id = localStorage.getItem("tweetId");

  useEffect(() => {
    const getTweetAsync = async () => {
      try {
        const replyTweet = await getTweet(id);
        if (replyTweet) {
          setReplyTweet(replyTweet);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getTweetAsync(id);
  }, [id]);

  const handleReply = async () => {
    if (comment.length === 0) {
      setHint("empty");
      return;
    }
    if (comment.length > 140) {
      setHint("max");
      return;
    }
    try {
      const data = await createReply({
        id,
        comment,
      });
      if (data.comment) {
        setComment("");
        setReplyPop(false);
      }
    } catch (error) {
      console.error(error);
    } 
    setReplyPop(false);
    return
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (inputRef.current.value.length === 0) {
        setHint("empty");
        return;
      }
      if (inputRef.current.value.length > 140) {
        setHint("max");
        return;
      }
      try {
        const data = await createReply({
          id,
          comment,
        });
        if (data.comment) {
          setComment("");
          setReplyPop(false);
        }
      } catch (error) {
        console.error(error);
      }
      // window.location.reload()
      setReplyPop(false);
      return;
    }
  };

  const handleReplyChange = () => {
    setReplyPop(false);
  };

  return (
    <>
      {replyTweet ? (
        <div className={styles.replyPopUpContainer}>
          <div className={styles.replyPopUpInner}>
            <div className={styles.replyPopHeader}>
              <div>
                <ModalX
                  className={styles.xIcon}
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
                <div className={styles.tweetArticle}>
                  {replyTweet.description}
                </div>
                <div className={styles.replyInfo}>
                  <div className={styles.replyTo}>回覆給</div>
                  <div className={styles.replyName}>
                    @{replyTweet.TweetUser.account}{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.replyContainer}>
              <div className={styles.replyContent}>
                <div className={styles.userAvatar}>
                  <img src={user.avatar} alt="avatar" />
                </div>
                <div className={styles.replyInput}>
                  <textarea
                    className={styles.replyText}
                    defaultValue={comment}
                    placeholder="推你的回覆"
                    // maxLength="140"
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={styles.hint}>
                {hint === "empty" && <p>內容不可空白</p>}
                {hint === "max" && <p>字數不可超過 140 字</p>}
              </div>
            </div>

            <div className={styles.replyButton} onClick={handleReply}>
              <ReplyButton className={styles.interaction} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ReplyPopUp;
