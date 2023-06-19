import styles from "./replyStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/Arrow.svg";
import { ReactComponent as ReplyText } from "../../assets/image/ReplyText.svg";
import { ReactComponent as UnlikeIcon } from "../../assets/image/heart-hollow.svg";
import { ReactComponent as BigTalk } from "../../assets/image/25x25Talk.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-solid.svg";
import { useState, useEffect } from "react";
import { getTweet } from "../../api/tweets";
import DateTime from "../DateTime";
import { createLike, deleteLike } from "../../api/tweets";
import SpecTweetList from "./SpecTweetList";

const SpecTweet = ({ setSpecTweet, setReplyPop }) => {
  const [tweet, setTweet] = useState(undefined);

  const [isLiked, setIsLiked] = useState(undefined);
  const [likedCount, setLikedCount] = useState(undefined);

  const tweetId = localStorage.getItem("tweetId");

  useEffect(() => {
    const getTweetAsync = async () => {
      try {
        const tweet = await getTweet(tweetId);
        if (tweet) {
          setTweet(tweet);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getTweetAsync(tweetId);
  }, []); 

  useEffect(() => {
    if (tweet) {
      setIsLiked(tweet.isLiked);
      setLikedCount(tweet.likedCount);
    }
  }, [tweet]);

  const handleLike = async (tweetId) => {
    try {
      await createLike(tweetId);
      setIsLiked(true);
      setLikedCount(likedCount + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnlike = async (tweetId) => {
    try {
      await deleteLike(tweetId);
      setIsLiked(false);
      setLikedCount(likedCount - 1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = () => {
    localStorage.removeItem("tweetId");
  };

  return (
    <>
      {tweet ? (
        <div className={styles.tweetContainer}>
          <header className={styles.header}>
            <div
              className={styles.arrow}
              onClick={() => {
                setSpecTweet(false);
                handleRemove();
              }}
            >
              <Arrow className={styles.icon} />
            </div>
            <div className={styles.title}>
              <ReplyText />
            </div>
          </header>

          <div className={styles.tweet}>
            <div className={styles.tweetContent}>
              <div className={styles.avatarWrap}>
                <img src={tweet.TweetUser.avatar} alt="avatar" />
              </div>
              <div className={styles.user}>
                <div className={styles.name}>{tweet.TweetUser.name}</div>
                <div className={styles.account}>@{tweet.TweetUser.account}</div>
              </div>
            </div>
            <div className={styles.description}>{tweet.description}</div>
            <div className={styles.timeWrapper}>
              <DateTime createdAt={tweet.createdAt} />
              {/* 上午 10:05&bull;2021年11月10日 */}
            </div>

            <div className={styles.num}>
              <div className={styles.replyNum}>
                {tweet.repliedCount}&nbsp;<span>回覆</span>
              </div>
              <div className={styles.likeNum}>
                {likedCount}&nbsp;<span>喜歡次數</span>
              </div>
            </div>

            <div className={styles.iconWrapper}>
              <BigTalk
                className={styles.icon}
                onClick={() => {
                  setReplyPop(true);
                }}
              />
              {isLiked ? (
                <LikeIcon
                  lassName={styles.icon}
                  onClick={() => {
                    setIsLiked(false);
                    handleUnlike(tweet.id);
                  }}
                />
              ) : (
                <UnlikeIcon
                  className={styles.icon}
                  onClick={() => {
                    setIsLiked(true);
                    handleLike(tweet.id);
                  }}
                />
              )}
            </div>
          </div>

          <SpecTweetList
            tweetId={tweet.id}
            tweetAccount={tweet.TweetUser.account}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SpecTweet;
