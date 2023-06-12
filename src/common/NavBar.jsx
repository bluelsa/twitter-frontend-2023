import styles from "./NavBarStyles.module.scss";
import { ReactComponent as Logo } from "../assets/image/log50x50.svg";
// import { ReactComponent as HomeIcon } from "../assets/image/home-inactive.svg";
import { ReactComponent as HomeActiveIcon } from "../assets/image/home-active.svg";
import { ReactComponent as ProfileIcon } from "../assets/image/profile.svg";
// import { ReactComponent as ProfileActiveIcon } from "../assets/image/profile-active.svg";
import { ReactComponent as SettingIcon } from "../assets/image/setting.svg";
// import { ReactComponent as SettingActiveIcon } from "../assets/image/setting-active.svg";
import { ReactComponent as NavOut } from "../assets/image/NavOut.svg";
import { ReactComponent as NavButton } from "../assets/image/tweetButton.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ setTwitPop }) => {
  // const [house, setHouse] = useState(true)
  // const [person, setPerson] = useState(false);
  // const [setting, setSetting] = useState(false);
  // const [active, setActive] = useState('home')
  // const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

// const handleHomeClick = () => {
//   navigate('/home')
//   setActive('home')
// }

// const handleProfileClick = () => {
//   navigate("/user");
//   setActive("profile");
// };

// const handleSettingClick = () => {
//   navigate("/setting");
//   setActive("setting");
// };

  return (
    <div className={styles.leftColumn}>
      <nav className={styles.navContainer}>
        <div className={styles.navlogo}>
          <Logo className={styles.interaction} />
        </div>
        <div className={styles.navBar}>
          <Link to="/home">
            <HomeActiveIcon />
          </Link>

          <Link to="/user">
            <ProfileIcon />
          </Link>
          <Link to="/setting">
            <SettingIcon />
          </Link>

          {/* <Link
            to="/home"
            onClick={() => {
              setHouse(true);
              setPerson(false);
              setSetting(false);
            }}
          >
       
              {house ? (
                <HomeActiveIcon className={styles.navItem} />
              ) : (
                <HomeIcon className={styles.navItem} />
              )}
          
          </Link>

          <Link
            to="/user"
            onClick={() => {
              setHouse(false);
              setPerson(true);
              setSetting(false);
            }}
          >
         
              {person ? (
                <ProfileActiveIcon className={styles.navItem} />
              ) : (
                <ProfileIcon className={styles.navItem} />
              )}
         
          </Link>
          <Link
            to="/setting"
            onClick={() => {
              setHouse(false);
              setPerson(false);
              setSetting(true);
            }}
          >
          
            {setting ? (
              <SettingActiveIcon className={styles.navItem} />
            ) : (
              <SettingIcon className={styles.navItem} />
            )}

          </Link> */}

          <div
            className={styles.navBigButton}
            onClick={() => {
              setTwitPop(true);
            }}
          >
            <NavButton className={styles.interaction} />
          </div>
        </div>
        <div>
          <Link to="/login">
            <NavOut className={styles.logOut} onClick={handleLogout} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
