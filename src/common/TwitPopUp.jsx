import styles from "../pages/HomeStyle.module.scss";
import { ReactComponent as ModalX } from "../assets/image/ModalX.svg";
import { ReactComponent as PostButton } from "../assets/image/PostButton.svg";
import { useState } from "react";
import { createTweet } from "../api/tweets";
import TimePopup from "../components/TimePopup/TimePopup";

const TwitPopUp = ({ user, setTwitPop }) => {
  const [notiStatus, setNotiStatus] = useState("finish");
  const [hint, setHint] = useState("none");
  const [description, setDescription] = useState("");

  const handleTweet = async () => {
    if (description.length === 0) {
      setHint("empty");
      return;
    }
    if (description.length > 140) {
      setHint("max")
      return
    }
    try {
      const data = await createTweet({
        description,
      });
      if (data.description) {
        setDescription("");
        setTwitPop(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
    window.location.reload()}
  };

  const handleClosePopup = () => {
    setNotiStatus("finish");
  };

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "success" && (
          <TimePopup notification="new" title="收到新的推文" />
        )}
        {notiStatus === "finish" && ""}
      </div>
      <div className={styles.popContainer}>
        <div className={styles.popInner}>
          <div className={styles.popHeader}>
            <ModalX
              className={styles.deleteIcon}
              onClick={() => setTwitPop(false)}
            />
          </div>
          <div className={styles.mainDivider}></div>
          <div className={styles.postContainer}>
            <div className={styles.popContent}>
              <div className={styles.popAvatar}>
                <img src={user.avatar} alt="avatar" />
              </div>
              <div className={styles.popInput}>
              <textarea
                className={styles.postText}
                rows="10"
                defaultValue={description}
                placeholder="有什麼新鮮事？"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              </div>
            </div>
            <div className={styles.hint}>
              {hint === "empty" && <p>內容不可空白</p>}
              {hint === "max" && <p>字數不可超過 140 字</p>}
            </div>
          </div>
          <div className={styles.popButton} onClick={handleTweet}>
            <PostButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default TwitPopUp;
