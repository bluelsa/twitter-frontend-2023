import styles from "./User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-xs.svg";

const UserLikeTweet = ({userLike}) => {
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
                <div className={styles.tweetName}>Apple</div>
                <div className={styles.tweetTime}>@apple &bull;3小時</div>
              </div>
            </div>
            <div className={styles.tweetArticle}>
              {userLike.Tweet.description}
            </div>
            <div className={styles.numCount}>
              <div className={styles.replyNum}>
                <ReplyIcon />
                <span>{userLike.Tweet.repliedCount}</span>
              </div>
              <div className={styles.likeNum}>
                <LikeIcon />
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
