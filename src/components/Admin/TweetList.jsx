import TweetContent from "./TweetContent"
import styles from './TweetList.module.scss'

const TweetList = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.lineContent}>
      <h4 className={styles.title}>推文清單</h4>
      </div>
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
      <TweetContent />
    </div>
  );
}

export default TweetList