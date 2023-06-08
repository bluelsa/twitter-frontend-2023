import styles from "./HomeStyle.module.scss";
import NavBar from "../common/NavBar";
import Popular from "../common/Popular";
import ReplyTwits from "../common/Reply/ReplyTwits";
import { useState, useEffect } from "react";
// import {useState} from "react"
// import Twits from './Twits';

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
        <ReplyTwits />
        {/* <Twits /> */}
        <Popular />
      </div>
    </div>
  );
};

export default MainPage;
