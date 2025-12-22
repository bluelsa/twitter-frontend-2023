import styles from "./User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";
import { ReactComponent as DeleteIcon } from "../../assets/image/delete-icon.svg";
import { useState } from "react";
import { createLike, deleteLike, deleteTweet } from "../../api/tweets";
import ElapsedTime from "../../common/ElapsedTime";

const UserTweet = ({ user, userTweet, setMain, setSpecTweet, setReplyPop, onDelete }) => {
  const [isLike, setIsLike] = useState(userTweet.isLiked);
  const [likedCount, setLikedCount] = useState(userTweet.likedCount);
  const [isDeleted, setIsDeleted] = useState(false);
  const currentUserId = parseInt(localStorage.getItem("userId"));

const handleLike = async (tweetId) => {
  try {
    await createLike(tweetId);
    setIsLike(true);
    setLikedCount(likedCount + 1);
  } catch (error) {
    console.error(error);
  }
};

const handleUnlike = async (tweetId) => {
  try {
    await deleteLike(tweetId);
    setIsLike(false);
    setLikedCount(likedCount - 1);
  } catch (error) {
    console.error(error);
  }
};

  const handleTweet = () => {
    localStorage.setItem("tweetId", userTweet.id);
    setMain(false);
  };

  const handleReply = () => {
    localStorage.setItem("tweetId", userTweet.id);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this tweet?")) {
      try {
        await deleteTweet(userTweet.id);
        setIsDeleted(true);
        if (onDelete) {
          onDelete(userTweet.id);
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
          <div className={styles.tweetAvatarWrap}>
            <img src={user.avatar} alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                  <div className={styles.tweetName}>
                    {user.name}
                  </div>
                <div className={styles.tweetTime}>
                  @{userTweet.TweetUser.account} &bull;
                  <ElapsedTime createdAt={userTweet.createdAt} />
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
              {userTweet.description}
            </div>
            <div className={styles.numCount}>
              <div className={styles.replyNum}>
                <ReplyIcon
                  className={styles.icon}
                  onClick={() => {
                    setReplyPop(true);
                    handleReply();
                  }}
                />
                <span>{userTweet.repliedCount}</span>
              </div>
              <div className={styles.likeNum}>
                {isLike ? (
                  <LikeIcon
                    className={styles.icon}
                    onClick={() => {
                      setIsLike(false);
                      handleUnlike(userTweet.id);
                    }}
                  />
                ) : (
                  <UnLikeIcon
                    className={styles.icon}
                    onClick={() => {
                      setIsLike(true);
                      handleLike(userTweet.id);
                    }}
                  />
                )}
                <span>{likedCount}</span>
              </div>
              {currentUserId === userTweet.UserId && (
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

export default UserTweet;
