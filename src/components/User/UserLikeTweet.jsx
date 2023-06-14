import styles from "./User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const UserLikeTweet = ({userLike, setReplyPop}) => {
 const [isLike, setIsLike] = useState(true);

 const navigate = useNavigate()

const handleOtherPage = () => {
  const userId = localStorage.getItem("userId");
  if (userId !== JSON.stringify(userLike.Tweet.UserId)) {
    localStorage.setItem("otherId", userLike.Tweet.UserId);
    navigate("/otheruser");
  }
  return;
};
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.avatarWrap} onClick={handleOtherPage}>
            <img src="https://i.pravatar.cc" alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>
                  {userLike.Tweet.name}
                </div>
                <div className={styles.tweetTime}>
                  @{userLike.Tweet.account} &bull;3小時
                </div>
              </div>
            </div>
            <div className={styles.tweetArticle}>
              {userLike.Tweet.description}
            </div>
            <div className={styles.numCount}>
              <div className={styles.replyNum}>
                <ReplyIcon
                  className={styles.icon}
                  onClick={() => {
                    setReplyPop(true);
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
                <span>{userLike.Tweet.likedCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLikeTweet;
