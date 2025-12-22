import styles from "../User/User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";
import { ReactComponent as DeleteIcon } from "../../assets/image/delete-icon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createLike, deleteLike, deleteTweet } from "../../api/tweets";
import ElapsedTime from "../../common/ElapsedTime";

const MainTwitForm = ({ tweet, setReplyPop, setSpecTweet, onDelete }) => {
  const [isLike, setIsLike] = useState(tweet.isLiked);
  const [likedCount, setLikedCount] = useState(tweet.likedCount);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  const currentUserId = parseInt(localStorage.getItem("userId"));

  const handleOtherPage = () => {
    const userId = localStorage.getItem("userId");
    if (userId !== JSON.stringify(tweet.UserId)) {
      localStorage.setItem("otherId", tweet.UserId);
      navigate("/otheruser");
    } else {
    navigate('/user');}
    return
  };

  const handleLike = async (tweetId) => {
    try {
      await createLike(tweetId);
      setIsLike(true);
      setLikedCount(likedCount + 1)
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnlike = async (tweetId) => {
    try {
      await deleteLike(tweetId);
      setIsLike(false);
      setLikedCount(likedCount - 1)
    } catch (error) {
      console.error(error);
    }
  };

  const handleTweet = () => {
    localStorage.setItem("tweetId", tweet.id);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this tweet?")) {
      try {
        await deleteTweet(tweet.id);
        setIsDeleted(true);
        if (onDelete) {
          onDelete(tweet.id);
        }
      } catch (error) {
        console.error("Failed to delete tweet:", error);
        alert("Failed to delete tweet. Please try again.");
      }
    }
  };

  // Don't render if deleted
  if (isDeleted) {
    return null;
  }

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.tweetAvatarWrap} onClick={handleOtherPage}>
            <img src={tweet.TweetUser.avatar} alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>{tweet.TweetUser.name}</div>
                <div className={styles.tweetTime}>
                  @{tweet.TweetUser.account} &bull;
                  <ElapsedTime createdAt={tweet.createdAt} />
                </div>
              </div>
            </div>
            <div
              className={styles.tweetArticle}
              onClick={() => {
                setSpecTweet(true);
                handleTweet();
              }}
            >
              {tweet.description}
            </div>
            <div className={styles.numCount}>
              <div className={styles.replyNum}>
                <ReplyIcon
                  className={styles.icon}
                  onClick={() => {
                    setReplyPop(true);
                    handleTweet();
                  }}
                />
                <span>{tweet.repliedCount}</span>
              </div>
              <div className={styles.likeNum}>
                {isLike ? (
                  <LikeIcon
                    className={styles.icon}
                    onClick={() => {
                      setIsLike(false);
                      handleUnlike(tweet.id);
                    }}
                  />
                ) : (
                  <UnLikeIcon
                    className={styles.icon}
                    onClick={() => {
                      setIsLike(true);
                      handleLike(tweet.id);
                    }}
                  />
                )}

                <span>{likedCount}</span>
              </div>
              {currentUserId === tweet.UserId && (
                <div className={styles.deleteBtn}>
                  <DeleteIcon
                    className={styles.icon}
                    onClick={handleDelete}
                    title="Delete tweet"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTwitForm;
