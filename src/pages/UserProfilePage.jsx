import styles from "../pages/HomeStyle.module.scss";
// import UserNav from '../components/User/UserNav'
import Popular from "../common/Popular";
import UserMain from "../components/User/UserMain";
import NavBar from "../common/NavBar"
import SettingPage from "./SettingPage";
import UserMainNew from "../components/Others/UserMainNew";
import MainFollow from "../components/Others/MainFollow"
import { useState } from "react";

const UserProfilePage = () => {
  const [house, setHouse] = useState(false);
  const [person, setPerson] = useState(true);
  const [setting, setSetting] = useState(false);
  const [twit, setTwit] = useState(false);
  
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
        />     
        <div className={`${styles.mainBackground} ${styles.scrollbar}`}>    
          {/* {person && <UserMainNew/>}
          {setting && <SettingPage />} */}
<MainFollow />


        </div>

        <Popular />
      </div>
    </div>
  );
};

export default UserProfilePage;
