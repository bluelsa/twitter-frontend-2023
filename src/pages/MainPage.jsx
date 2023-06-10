import styles from "./HomeStyle.module.scss";
import NavBar from "../common/NavBar";
import Popular from "../common/Popular";
import SettingPage from "./SettingPage";
import UserMainNew from "../components/Others/UserMainNew";
import Twits from "../components/Home/Twits";
import TwitPopUp from "../common/TwitPopUp";
import ReplyTwits from "../common/Reply/ReplyTwits";
import ReplyPopUp from "../components/Home/ReplyPopUp";
import OtherMain from "../components/Others/OtherMain";
import { useState } from "react";

const MainPage = () => {
  const [house, setHouse] = useState(true);
  const [person, setPerson] = useState(false);
  const [setting, setSetting] = useState(false);
  const [twit, setTwit] = useState(false);
  const [replyTwit, setReplyTwit] = useState(false);
  const [replyPop, setReplyPop] = useState(false);
  const [isOther, setIsOther] = useState(false);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
        <NavBar
          house={house}
          setHouse={setHouse}
          person={person}
          setPerson={setPerson}
          setting={setting}
          setSetting={setSetting}
          twit={twit}
          setTwit={setTwit}
          replyTwit={replyTwit}
          setReplyTwit={setReplyTwit}
          isOther={isOther}
          setIsOther={setIsOther}
        />
        </div>
        {/* 中間推文部分 */}
        <div className={styles.middleColumn}>
          <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
            {house &&
              (!replyTwit ? (
                <Twits
                  twit={twit}
                  setTwit={setTwit}
                  replyTwit={replyTwit}
                  setReplyTwit={setReplyTwit}
                  replyPop={replyPop}
                  setReplyPop={setReplyPop}
                  isOther={isOther}
                  setIsOther={setIsOther}
                  house={house}
                  setHouse={setHouse}
                />
              ) : (
                <ReplyTwits
                  replyTwit={replyTwit}
                  setReplyTwit={setReplyTwit}
                  house={house}
                  setHouse={setHouse}
                  person={person}
                  setPerson={setPerson}
                  setting={setting}
                  setSetting={setSetting}
                  twit={twit}
                  setTwit={setTwit}
                  replyPop={replyPop}
                  setReplyPop={setReplyPop}
                  isOther={isOther}
                  setIsOther={setIsOther}
                />
              ))}

            {person && <UserMainNew />}
            {setting && <SettingPage />}
            {isOther && (
              <OtherMain
                isOther={isOther}
                setIsOther={setIsOther}
                twit={twit}
                setTwit={setTwit}
                replyTwit={replyTwit}
                setReplyTwit={setReplyTwit}
                house={house}
                setHouse={setHouse}
              />
            )}
            {/* {replyTwit && <ReplyTwits />} */}
            {twit && <TwitPopUp twit={twit} setTwit={setTwit} />}
            {replyPop && (
              <ReplyPopUp replyPop={replyPop} setReplyPop={setReplyPop} />
            )}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Popular />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
