import styles from "../User/User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from '../../assets/image/heart-xs.svg'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

const MainTwitForm = ({tweet, setReplyPop, setSpecTweet}) => {
  const [isLike, setIsLike] = useState(false)
  const navigate = useNavigate()

  const handleOtherPage = () => {
    const userId = localStorage.getItem("userId")
    if (userId !== JSON.stringify(tweet.UserId)) {
      localStorage.setItem('otherId', tweet.UserId )
      navigate('/otheruser')
    } 
    return
  }

const handleReplyTweet = () => {
  localStorage.setItem("tweetId", tweet.id);
};

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div
            className={styles.avatarWrap}
            onClick={handleOtherPage}
          >
            <img src={tweet.TweetUser.avatar} alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>{tweet.TweetUser.name}</div>
                <div className={styles.tweetTime}>
                  @{tweet.TweetUser.account} &bull;3小時
                </div>
              </div>
            </div>
            <div
              className={styles.tweetArticle}
              onClick={() => {
                setSpecTweet(true);
              }}
            >
              {tweet.description}
            </div>
            <div className={styles.numCount}>
              <div className={styles.replyNum}>
                <ReplyIcon
                  className={styles.icon}
                  onClick={() => {
                    setReplyPop(true)
                    handleReplyTweet();
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

                <span>{tweet.likedCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTwitForm;
