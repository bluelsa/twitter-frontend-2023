import styles from "./HomeStyle.module.scss";
import NavBar from "../common/NavBar";
import Popular from "../common/Popular";
import SettingPage from "./SettingPage";
import UserMainNew from "../components/Others/UserMainNew";
import Twits from "../components/Home/Twits";
import TwitPopUp from "../common/TwitPopUp";
import ReplyTwits from "../common/Reply/ReplyTwits";
import { useState } from "react";

const MainPage = () => {
  const [house, setHouse] = useState(true);
  const [person, setPerson] = useState(false);
  const [setting, setSetting] = useState(false);
  const [twit, setTwit] = useState(false);
  const [replyTwit, setReplyTwit] = useState(false);
  return (
    <div
      className={`${styles.mainBackground} ${
        twit ? styles.grayBackground : ""
      }`}
    >
      <div className={styles.homeContainer}>
        <div className={styles.mainContainer}>
          <NavBar
            house={house}
            setHouse={setHouse}
            person={person}
            setPerson={setPerson}
            setting={setting}
            setSetting={setSetting}
            twit={twit}
            setTwit={setTwit}
          />
          {/* 中間推文部分 */}
          <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
            {house &&
              (!replyTwit ? (
                <Twits
                  twit={twit}
                  setTwit={setTwit}
                  replyTwit={replyTwit}
                  setReplyTwit={setReplyTwit}
                />
              ) : (
                <ReplyTwits replyTwit={replyTwit} setReplyTwit={setReplyTwit} />
              ))}
            {person && <UserMainNew />}
            {setting && <SettingPage />}
            {/* {replyTwit && <ReplyTwits />} */}
            {twit && <TwitPopUp twit={twit} setTwit={setTwit} />}
          </div>

          <Popular />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
