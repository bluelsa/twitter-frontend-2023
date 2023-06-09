import styles from "../User/User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createLike, deleteLike } from "../../api/tweets";
import ElapsedTime from "../../common/ElapsedTime";

const MainTwitForm = ({ tweet, setReplyPop, setSpecTweet }) => {
  const [isLike, setIsLike] = useState(tweet.isLiked);
  const [likedCount, setLikedCount] = useState(tweet.likedCount);
  const navigate = useNavigate();

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTwitForm;
