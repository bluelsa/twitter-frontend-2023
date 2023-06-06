
import styles from './UserList.module.scss'
import { ReactComponent as Feather } from '../../assets/image/feather.svg'
import { ReactComponent as Likes } from '../../assets/image/heart-hollow.svg'

const UserCard = () => {
  return (
    <div className={styles.userCard}>
      <img
        className={styles.cover}
        src="https://picsum.photos/210/140"
        alt="cover"
      />
      <img className={styles.avatar} src="https://i.pravatar.cc" alt="avatar" />
      <div className={styles.info}>
        <div className={styles.name}>John Doe</div>
        <div className={styles.account}>@heyjohn</div>
        <div className={styles.tweetInfo}>
          <div className={styles.tweetNum}>
            <div className={styles.iconContainer}>
              <Feather className={styles.icon} />
            </div>
            <div className={styles.num}>1.5K</div>
          </div>
          <div className={styles.likeNum}>
            <div className={styles.iconContainer}>
              <Likes className={styles.icon} />
            </div>
            <div className={styles.num}>20k</div>
          </div>
        </div>
        <div className={styles.followInfo}>
          <p>
            34 個<span className={styles.sub}>跟隨中</span>
          </p>

          <p>
            59 位<span className={styles.sub}>跟隨者</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;