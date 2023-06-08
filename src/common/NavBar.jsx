// import styles from "../pages/HomeStyle.module.scss";
import styles from "./NavBarStyles.module.scss";
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
// import { ReactComponent as NavIndex } from "../assets/image/NavIndex.svg";
import { ReactComponent as NavPersonal } from "../assets/image/NavPersonal.svg";
import { ReactComponent as NavSetting } from "../assets/image/NavSetting.svg";
import { ReactComponent as NavOut } from "../assets/image/NavOut.svg";
import { ReactComponent as NavButton } from "../assets/image/NavButton.svg";
import { ReactComponent as BlackIndex } from "../assets/image/NavBlackHouse.svg";
import { Link } from "react-router-dom";
// import clsx from "clsx";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// `${styles.blueHouse}`;
const NavBar = (props) => {
  const [house, setHouse] = useState(true);
  const [person, setPerson] = useState(false);
  const [setting, setSetting] = useState(false);

  return (
    <div className={styles.leftColumn}>
      <nav className={styles.navContainer}>
        <div className={styles.navlogo}>
          <Logo className={styles.interaction} />
        </div>
        <div className={styles.navBar}>
          <Link to="/"></Link>
          <BlackIndex
            id="1"
            onClick={() => {
              props.setHouse(true);
              props.setPerson(false);
              props.setSetting(false);
            }}
            className={
              props.house ? `${styles.orangeIcon}` : `${styles.blackIcon}`
            }
          />
          <Link to="/user">
            <NavPersonal
              id="2"
              onClick={() => {
                props.setHouse(false);
                props.setPerson(true);
                props.setSetting(false);
              }}
              className={
                props.person ? `${styles.orangeIcon}` : `${styles.blackIcon}`
              }
            />
          </Link>
          <Link to="/setting">
            <NavSetting
              id="3"
              onClick={() => {
                props.setHouse(false);
                props.setPerson(false);
                props.setSetting(true);
              }}
              className={
                props.setting ? `${styles.orangeIcon}` : `${styles.blackIcon}`
              }
            />
          </Link>

          <NavButton className={styles.interaction} />
        </div>
        <NavOut className={styles.logOut} />
      </nav>
    </div>
  );
};

export default NavBar;
