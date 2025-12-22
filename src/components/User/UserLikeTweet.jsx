import styles from "./User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteLike } from "../../api/tweets";
import ElapsedTime from "../../common/ElapsedTime";

const UserLikeTweet = ({ userLike, setMain, setReplyPop, setSpecTweet }) => {
  const [isLike, setIsLike] = useState(true);
  const [likedCount, setLikedCount] = useState(userLike.Tweet.likedCount);
  const navigate = useNavigate();

  const handleOtherPage = () => {
    const userId = localStorage.getItem("userId")
    if (userId !== JSON.stringify(userLike.Tweet.UserId)) {
      localStorage.setItem("otherId", userLike.Tweet.UserId);
      navigate("/otheruser");
    }
    return;
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
    localStorage.setItem("tweetId", userLike.TweetId);
    setMain(false);
  };

   const handleReply = () => {
     localStorage.setItem("tweetId", userLike.TweetId);
   };

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.tweetAvatarWrap} onClick={handleOtherPage}>
            <img src={userLike.Tweet.TweetUser.avatar} alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>
                  {userLike.Tweet.TweetUser.name}{" "}
                </div>
                <div className={styles.tweetTime}>
                  @{userLike.Tweet.TweetUser.account} &bull;
                  <ElapsedTime createdAt={userLike.Tweet.createdAt} />
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
              {userLike.Tweet.description}
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
                <span>{userLike.Tweet.repliedCount}</span>
              </div>
              <div className={styles.likeNum}>
                {isLike ? (
                  <LikeIcon
                    className={styles.icon}
                    onClick={() => {
                      setIsLike(false);
                      handleUnlike(userLike.TweetId);
                    }}
                  />
                ) : (
                  <UnLikeIcon
                    className={styles.icon}
                  />
                )}
                <span>{likedCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLikeTweet;
