import TweetContent from "./TweetContent";
import styles from "./TweetList.module.scss";

const TweetList = ({ tweets, onDelete }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.lineContent}>
        <h4 className={styles.title}>推文清單</h4>
      </div>
      <div className={styles.list}>
        {tweets.map((tweet) => {
          return <TweetContent tweet={tweet} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default TweetList;
