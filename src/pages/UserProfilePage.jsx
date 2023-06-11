import styles from "../pages/HomeStyle.module.scss";
import Popular from "../common/Popular";
import NavBar from "../common/NavBar";
import SettingPage from "./SettingPage";
import UserMainNew from "../components/Others/UserMainNew";
import MainFollow from "../components/Others/MainFollow";
// import ReplyTwits from "../common/Reply/ReplyTwits";
import { useState } from "react";

const UserProfilePage = () => {
  // const [house, setHouse] = useState(false);
  // const [person, setPerson] = useState(true);
  // const [setting, setSetting] = useState(false);
 const [twitPop, setTwitPop] = useState(false);
  const [person, setPerson] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const [isWhole, setIsWhole] = useState(false);
  const [isChange, setIsChange] = useState(false);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        {/* <UserNav /> */}
        <div className={styles.leftColumn}>
          <NavBar
            twitPop={twitPop}
            setTwitPo={setTwitPop}
           
          />
        </div>
        <div className={styles.middleColumn}>
          <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
              <UserMainNew
                isFollow={isFollow}
                setIsFollow={setIsFollow}
                isWhole={isWhole}
                setIsWhole={setIsWhole}
                isChange={isChange}
                setIsChange={setIsChange}
              />
            
            {/* {setting && <SettingPage />} */}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Popular />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
