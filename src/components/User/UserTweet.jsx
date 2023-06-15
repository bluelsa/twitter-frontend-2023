import styles from "./User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";
import { useState } from "react";

const UserTweet = ({ user, userTweet, setReplyPop }) => {

  const [isLike, setIsLike] = useState(false);

const handleReplyTweet = () => {
  localStorage.setItem("tweetId", userTweet.id);
};

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetsWrapper}>
        <div className={styles.tweetCollection}>
          <div className={styles.avatarWrap}>
            <img src="https://i.pravatar.cc" alt="avatar" />
          </div>
          <div className={styles.tweetContent}>
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>{user.name}</div>
                <div className={styles.tweetTime}>
                  @{user.account} &bull;3小時
                </div>
              </div>
            </div>
            <div className={styles.tweetArticle}>{userTweet.description}</div>
            <div className={styles.numCount}>
              <div className={styles.replyNum}>
                <ReplyIcon
                  className={styles.icon}
                  onClick={() => {
                    setReplyPop(true)
                    handleReplyTweet();
                  }}
                />
                <span>{userTweet.tweetReplyCount}</span>
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
                <span>{userTweet.likedCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTweet;
