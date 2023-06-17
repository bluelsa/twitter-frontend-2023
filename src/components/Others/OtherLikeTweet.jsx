import styles from "../User/User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";
import { useState } from "react";
import ElapsedTime from "../../common/ElapsedTime";

const OtherLikeTweet = ({ setReplyPop, otherLike, setSpecTweet }) => {
  const [isLike, setIsLike] = useState(otherLike.isLiked);

  const handleTweet = () => {
    localStorage.setItem("tweetId", otherLike.Tweet.id);
  };

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.tweetAvatarWrap}>
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
                    }}
                  />
                ) : (
                  <UnLikeIcon
                    className={styles.icon}
                    onClick={() => {
                      setIsLike(true);
                    }}
                  />
                )}
                <span>{otherLike.Tweet.likedCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherLikeTweet;
