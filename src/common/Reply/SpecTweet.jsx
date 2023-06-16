import styles from "./replyStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/Arrow.svg";
import { ReactComponent as ReplyText } from "../../assets/image/ReplyText.svg";
import { ReactComponent as UnlikeIcon } from "../../assets/image/heart-hollow.svg";
import { ReactComponent as BigTalk } from "../../assets/image/25x25Talk.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-solid.svg";
import { useState, useEffect } from 'react'
import { getTweet } from "../../api/tweets";
import { useNavigate } from "react-router-dom";

import SpecReplyTweet from "./SpecReplyTweet";

const SpecTweet = ({ 
  setSpecTweet, 
  setReplyPop }) => {
  const [tweet, setTweet] = useState(undefined);

  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate()

  const tweetId = localStorage.getItem("tweetId")

  useEffect(() => {
    const getTweetAsync = async () => {
      try {
        const tweet = await getTweet(tweetId);
        if (!tweet.status) {
          setTweet(tweet);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getTweetAsync(tweetId);
  }, [tweetId]);

  const handleRemove = () => {
    localStorage.removeItem("tweetId");
  };

  return (
    <>
    {tweet?(<div className={styles.tweetContainer}>
      <header className={styles.header}>
        <div
          className={styles.arrow}
          onClick={() => {
            setSpecTweet(false)
            handleRemove()
          }}
        >
          <Arrow className={styles.icon}/>
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
        <div className={styles.time}>上午 10:05&bull;2021年11月10日</div>

        <div className={styles.num}>
          <div className={styles.replyNum}>
            {tweet.repliedCount}&nbsp;<span>回覆</span>
          </div>
          <div className={styles.likeNum}>
            {tweet.likedCount}&nbsp;<span>喜歡次數</span>
          </div>
        </div>

        <div className={styles.iconWrapper}>
          <BigTalk
            className={styles.icon}
            onClick={() => {
              setReplyPop(true);
            }}
          />
          {isLike ? (
            <LikeIcon lassName={styles.icon} onClick={() => setIsLike(false)} />
          ) : (
            <UnlikeIcon
              className={styles.icon}
              onClick={() => setIsLike(true)}
            />
          )}
        </div>
      </div>
{tweet.TweetReply.map((reply) => {
  return <SpecReplyTweet reply={reply} replyAccount={tweet.TweetUser.account}/>;
})}
    </div>):(<></>)}
    </>
  );
};

export default SpecTweet;
