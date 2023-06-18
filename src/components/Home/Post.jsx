import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as PostButton } from "../../assets/image/PostButton.svg";
import { useState, useRef } from "react";
import { createTweet } from "../../api/tweets";
import TimePopup from "../TimePopup/TimePopup";

const Post = ({ user }) => {
  const inputRef = useRef(null);
  const [description, setDescription] = useState("");
  const [notiStatus, setNotiStatus] = useState("finished");

  const handleTweet = async () => {
    if (description.length === 0) {
      setNotiStatus("empty");
      return;
    }
    if (description.length > 140) {
      setNotiStatus("max");
      return;
    }
    try {
      const data = await createTweet({
        description,
      });

      if (data.description) {
        setNotiStatus("success");
      }
    } catch (error) {
      console.error(error);
    }
    setDescription("");
    // setTimeout(() => {
    window.location.reload();
    // }, 1000);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (inputRef.current.value.length === 0) {
        setNotiStatus("empty");
        return;
      }
      if (inputRef.current.value.length > 140) {
        setNotiStatus("max");
        return;
      }
      try {
        const data = await createTweet({
          description,
        });
        if (data.description) {
          setDescription("");
        }
      } catch (error) {
        console.error(error);
      } finally {
        window.location.reload();
      }
    }
  };

  const handleClosePopup = () => {
    setNotiStatus("finished");
  };

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "success" && (
          <TimePopup notification="new" title="收到新的推文" />
        )}
        {notiStatus === "empty" && (
          <TimePopup notification="error" title="內容不可空白" />
        )}
        {notiStatus === "max" && (
          <TimePopup notification="error" title="字數不可超過 140 字" />
        )}
        {notiStatus === "finish" && ""}
      </div>
      <div className={styles.postContainer}>
        <div className={styles.postContent}>
          <div className={styles.postAvatar}>
            <img src={user.avatar} alt="avatar" />
          </div>
          <div className={styles.postInput}>
            <textarea
              className={styles.postText}
              rows="2"
              defaultValue={description}
              placeholder="有什麼新鮮事？"
              maxLength="140"
              ref={inputRef}
              onKeyDown={handleKeyDown}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className={styles.postButton} onClick={handleTweet}>
          <PostButton />
        </div>
      </div>
    </>
  );
};

export default Post;
