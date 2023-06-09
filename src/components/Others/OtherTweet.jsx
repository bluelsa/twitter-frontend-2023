import styles from "../User/User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";
import { useState } from "react";
import { createLike, deleteLike } from "../../api/tweets";
import ElapsedTime from "../../common/ElapsedTime";

const OtherTweet = ({ otherTweet, setReplyPop, setSpecTweet }) => {
  const [isLike, setIsLike] = useState(otherTweet.isLiked);
  const [likedCount, setLikedCount] = useState(otherTweet.likedCount);

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
    localStorage.setItem("tweetId", otherTweet.id);
  };
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.tweetAvatarWrap}>
            <img src={otherTweet.TweetUser.avatar} alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>
                  {otherTweet.TweetUser.name}
                </div>
                <div className={styles.tweetTime}>
                  @{otherTweet.TweetUser.account} &bull;
                  <ElapsedTime createdAt={otherTweet.createdAt} />
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
              {otherTweet.description}
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
                <span>{otherTweet.repliedCount}</span>
              </div>
              <div className={styles.likeNum}>
                {isLike ? (
                  <LikeIcon
                    className={styles.icon}
                    onClick={() => {
                      setIsLike(false);
                      handleUnlike(otherTweet.id);
                    }}
                  />
                ) : (
                  <UnLikeIcon
                    className={styles.icon}
                    onClick={() => {
                      setIsLike(true);
                      handleLike(otherTweet.id);
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

export default OtherTweet;
