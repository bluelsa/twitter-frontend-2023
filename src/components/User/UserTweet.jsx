import styles from "./User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-hollow-xs.svg";

const UserTweet = ({ user, userTweet, setReplyPop }) => {
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
                <ReplyIcon onClick={()=>{setReplyPop(true)}}/>
                <span>{userTweet.tweetReplyCount}</span>
              </div>
              <div className={styles.likeNum}>
                <LikeIcon />
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
