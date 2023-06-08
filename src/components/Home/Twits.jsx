
import styles from "../../pages/Home/HomeStyle.module.scss"
import TwitForm from "./TwitForm";
import Post from './Post'

function Twits() {
  return (
    <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
      <header className={styles.header}>首頁</header>
      <div className={styles.mainDivider}></div>
      <Post />
      <div className={styles.postDivider}></div>
      <div className={styles.tweets}>
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
        <TwitForm />
      </div>
    </div>
  );
}

export default Twits;
