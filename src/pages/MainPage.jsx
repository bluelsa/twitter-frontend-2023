import styles from "./HomeStyle.module.scss";
import NavBar from "../common/NavBar";
import Popular from "../common/Popular";
import SettingPage from "./SettingPage";
import UserMainNew from "../components/Others/UserMainNew";
// import ReplyTwits from "../common/Reply/ReplyTwits";
import Twits from '../components/Home/Twits';

import { useState } from "react";
// import UserMain from "../components/User/UserMain";
// import {useState} from "react"


const MainPage = () => {
   const [house, setHouse] = useState(true);
   const [person, setPerson] = useState(false);
   const [setting, setSetting] = useState(false);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <NavBar
          house={house}
          setHouse={setHouse}
          person={person}
          setPerson={setPerson}
          setting={setting}
          setSetting={setSetting}
        />
        {/* <ReplyTwits /> */}
        {/* <Twits /> */}
        <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
          {house && <Twits /> }
           { person && <UserMainNew />}
          {setting && <SettingPage /> }

          
        </div>

        <Popular />
      </div>
    </div>
  );
};

export default MainPage;
