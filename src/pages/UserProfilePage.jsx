import styles from "../pages/HomeStyle.module.scss";
import Popular from "../common/Popular";
import NavBar from "../common/NavBar";
import SettingPage from "./SettingPage";
import UserMainNew from "../components/Others/UserMainNew";
import MainFollow from "../components/Others/MainFollow";
// import ReplyTwits from "../common/Reply/ReplyTwits";
import { useState } from "react";

const UserProfilePage = () => {
  const [house, setHouse] = useState(false);
  const [person, setPerson] = useState(true);
  const [setting, setSetting] = useState(false);
  const [twit, setTwit] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const [isWhole, setIsWhole] = useState(false);
  const [isChange, setIsChange] = useState(false);
  
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        {/* <UserNav /> */}
        <NavBar
          house={house}
          setHouse={setHouse}
          person={person}
          setPerson={setPerson}
          setting={setting}
          setSetting={setSetting}
          twit={twit}
          setTwit={setTwit}
          isChange={isChange}
          setIsChange={setIsChange}
        />
        <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
          {person &&
            (isChange ? (
              <MainFollow
                isFollow={isFollow}
                setIsFollow={setIsFollow}
                isWhole={isWhole}
                setIsWhole={setIsWhole}
                isChange={isChange}
                setIsChange={setIsChange}
              />
            ) : (
              <UserMainNew
                isFollow={isFollow}
                setIsFollow={setIsFollow}
                isWhole={isWhole}
                setIsWhole={setIsWhole}
                isChange={isChange}
                setIsChange={setIsChange}
              />
            ))}

          {setting && <SettingPage />}
        </div>

        <Popular />
      </div>
    </div>
  );
};

export default UserProfilePage;
