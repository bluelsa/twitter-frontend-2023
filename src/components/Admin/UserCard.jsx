
import styles from './UserList.module.scss'
import { ReactComponent as Feather } from '../../assets/image/feather.svg'
import { ReactComponent as Likes } from '../../assets/image/heart-hollow.svg'

const UserCard = ({user}) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.cover}><img
        src={user.background}
        alt="cover"
      /></div>
      <div className={styles.avatar}> <img
        src={user.avatar}
        alt="avatar"
      /></div>
     
      <div className={styles.info}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.account}>@{user.account}</div>
        <div className={styles.tweetInfo}>
          <div className={styles.tweetNum}>
            <div className={styles.iconContainer}>
              <Feather className={styles.icon} />
            </div>
            <div className={styles.num}>{user.userTweetCount}</div>
          </div>
          <div className={styles.likeNum}>
            <div className={styles.iconContainer}>
              <Likes className={styles.icon} />
            </div>
            <div className={styles.num}>{user.likedCount}</div>
          </div>
        </div>
        <div className={styles.followInfo}>
          <p>
            {user.followingCount} 個<span className={styles.sub}>跟隨中</span>
          </p>

          <p>
            {user.followerCount} 位<span className={styles.sub}>跟隨者</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;