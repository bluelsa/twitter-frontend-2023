import styles from "../User/User.module.scss";
import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-hollow-xs.svg";

const MainTwitForm = ({tweet, setReplyPop}) => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetCollection}>
        <div className={styles.avatarWrap}>
          <img src="https://i.pravatar.cc" alt="avatar" />
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
          <div className={styles.tweetArticle}>{tweet.description}</div>
          <div className={styles.count}>
            <div className={styles.replyNum}>
              <ReplyIcon onClick={()=>{setReplyPop(true)}}/>
              <span>{tweet.repliedCount}</span>
            </div>
            <div className={styles.likeNum}>
              <LikeIcon />
              <span>{tweet.likedCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTwitForm;
