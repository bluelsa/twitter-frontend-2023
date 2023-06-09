import styles from "../../pages/HomeStyle.module.scss"
import TwitForm from "./TwitForm";
import Post from './Post'
// import { useState } from "react";

function Twits(props) {
  // const [house, setHouse] = useState(true);
  // const [person, setPerson] = useState(false);
  // const [setting, setSetting] = useState(false);
  // const [twit, setTwit] = useState(false);
  return (
    <>
      <header className={styles.header}>首頁</header>
      <div className={styles.mainDivider}></div>
      <Post twit={props.twit} setTwit={props.setTwit} />
      <div className={styles.postDivider}></div>
      <div className={styles.tweets}>
        <TwitForm
          replyTwit={props.replyTwit}
          setReplyTwit={props.setReplyTwit}
          replyPop={props.replyPop}
          setReplyPop={props.setReplyPop}
        />
       
      </div>
    </>

    // </div>
  );
}

export default Twits;
