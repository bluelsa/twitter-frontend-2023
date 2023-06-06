import styles from "./HomeStyle.module.scss";
import TwitForm from "./TwitForm";
import { ReactComponent as PostButton } from "../../assets/image/PostButton.svg";
import Post from "./Post";
import TwitPopUp from "./TwitPopUp";

function Twits() {
  return (
    <>
      <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
        <header className={styles.header}>首頁</header>
        <div className={styles.mainDivider}></div>
        <div className={styles.postContainer}>
          <Post />
          <TwitPopUp />
          <div className={styles.postButton}>
            <PostButton />
          </div>
        </div>
        {/* <Post /> */}
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
    </>
  );
}

export default Twits;
