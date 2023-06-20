import styles from "../User/User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";
import { useState } from "react";
import { deleteLike } from "../../api/tweets";
import { useNavigate } from "react-router-dom";
import ElapsedTime from "../../common/ElapsedTime";

const OtherLikeTweet = ({ setReplyPop, otherLike, setSpecTweet }) => {
  const [isLike, setIsLike] = useState(true);
  const [likedCount, setLikedCount] = useState(otherLike.Tweet.likedCount);

  const navigate = useNavigate();

  const handleOtherPage = () => {
    localStorage.removeItem("otherId")
    const userId = localStorage.getItem("userId");
    if (userId !== JSON.stringify(otherLike.Tweet.UserId)) {
      localStorage.setItem("otherId", otherLike.Tweet.UserId);
      navigate("/otheruser");
      window.location.reload()
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
    localStorage.setItem("tweetId", otherLike.TweetId);
  };

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.tweetAvatarWrap} onClick={handleOtherPage}>
            <img src={otherLike.Tweet.TweetUser.avatar} alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>
                  {otherLike.Tweet.TweetUser.name}
                </div>
                <div className={styles.tweetTime}>
                  @{otherLike.Tweet.TweetUser.account} &bull;
                  <ElapsedTime createdAt={otherLike.Tweet.createdAt} />
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
              {otherLike.Tweet.description}
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
                <span>{otherLike.Tweet.repliedCount}</span>
              </div>
              <div className={styles.likeNum}>
                {isLike ? (
                  <LikeIcon
                    className={styles.icon}
                    onClick={() => {
                      setIsLike(false);
                      handleUnlike(otherLike.TweetId);
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

export default OtherLikeTweet;
