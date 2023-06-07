import styles from './User.module.scss'
import { ReactComponent as LogoDark} from '../../assets/image/DarkLogo.svg'
import { ReactComponent as ReplyIcon } from '../../assets/image/TalkIcon.svg'
import { ReactComponent as LikeIcon } from '../../assets/image/heart-hollow-xs.svg'

const UserTweet = () => {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetCollection}>
        <div className={styles.logoWrap}>
          <LogoDark className={styles.darkLogo} />
        </div>
        <div className={styles.tweetContent}>
          <div>
            <div className={styles.nameInfo}>
              <div className={styles.tweetName}>John Doe</div>
              <div className={styles.tweetTime}>@heyjohn &bull;3小時</div>
            </div>
          </div>
          <div className={styles.tweetArticle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo temporibus
          </div>
          <div className={styles.count}>
            <div className={styles.replyNum}>
              <ReplyIcon />
              <span>13</span>
            </div>
            <div className={styles.likeNum}>
              <LikeIcon />
              <span>76</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTweet;
