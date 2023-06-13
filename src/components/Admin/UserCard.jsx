
import styles from './UserList.module.scss'
import { ReactComponent as Feather } from '../../assets/image/feather.svg'
import { ReactComponent as Likes } from '../../assets/image/heart-hollow.svg'

const UserCard = ({user}) => {
  return (
    <div className={styles.userCard}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1668852917755-0e6fc9a66db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="cover"
      />
      <img
        className={styles.avatar}
        src="https://loremflickr.com/320/240/person/?random=19.08872965484445"
        alt="avatar"
      />
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