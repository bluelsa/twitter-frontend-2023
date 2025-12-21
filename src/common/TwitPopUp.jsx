import styles from "../pages/HomeStyle.module.scss";
import { ReactComponent as ModalX } from "../assets/image/ModalX.svg";
import { ReactComponent as PostButton } from "../assets/image/PostButton.svg";
import { useState, useRef } from "react";
import { createTweet } from "../api/tweets";
import { useAuth } from "../contexts/AuthContext";
import TimePopup from "../components/TimePopup/TimePopup";

const TwitPopUp = ({ setTwitPop }) => {
  const inputRef = useRef(null);
  const [notiStatus, setNotiStatus] = useState("finish");
  const [hint, setHint] = useState("none");
  const [description, setDescription] = useState("");
  const { user } = useAuth();
  
  const handleTweet = async () => {
    if (description.length === 0) {
      setHint("empty");
      return;
    }
    if (description.length > 140) {
      setHint("max");
      return;
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
    } 
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
        const data = await createTweet({
          description,
        });
        if (data.description) {
          setDescription("");
          setTwitPop(false);
        }
      } catch (error) {
        console.error(error);
      } 
    }
  };

  const handleClosePopup = () => {
    setNotiStatus("finish");
  };

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "success" && (
          <TimePopup notification="new" title="New tweet received" />
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
                  placeholder="What's happening?"
                  // maxLength="140"
                  ref={inputRef}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className={styles.hint}>
              {hint === "empty" && <p>Content cannot be empty</p>}
              {hint === "max" && <p>Cannot exceed 140 characters</p>}
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
