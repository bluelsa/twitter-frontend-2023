 import styles from "./NavBarStyles.module.scss";
import { ReactComponent as Logo } from "../assets/image/log50x50.svg";
import { ReactComponent as NavPersonal } from "../assets/image/NavPersonal.svg";
import { ReactComponent as NavSetting } from "../assets/image/NavSetting.svg";
import { ReactComponent as NavOut } from "../assets/image/NavOut.svg";
import { ReactComponent as NavButton } from "../assets/image/NavBigButton.svg";
import { ReactComponent as BlackIndex } from "../assets/image/NavBlackHouse.svg";
import { ReactComponent as RedIndex } from "../assets/image/Redhouse.svg";
import { ReactComponent as RedPersonal } from "../assets/image/user-active.svg"
import { ReactComponent as RedSet } from "../assets/image/NavRedSet.svg";
import {useState} from "react"
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [getRed, setGetRed] = useState(false)
  return (
    <div className={styles.leftColumn}>
      <nav className={styles.navContainer}>
        <div className={styles.navlogo}>
          <Logo className={styles.interaction} />
        </div>
        <div className={styles.navBar}>
          <Link
            to="/home"
            onClick={() => {
              // props.setHouse(true);
              // props.setPerson(false);
              // props.setSetting(false);
            }}
          >
            {/* <div className={styles.navItem} id="1"> */}
              {props.house ? (
                <RedIndex className={styles.navItem} />
              ) : (
                <BlackIndex className={styles.navItem} />
              )}
            {/* </div> */}
          </Link>

          <Link
            to="/user"
            onClick={() => {
              // props.setHouse(false);
              // props.setPerson(true);
              // props.setSetting(false);
            }}
          >
            {/* <div className={styles.navItem} id="2"> */}
              {props.person ? (
                <RedPersonal className={styles.navItem} />
              ) : (
                <NavPersonal className={styles.navItem} />
              )}
            {/* </div> */}
          </Link>
          <Link
            to="/setting"
            onClick={() => {
              // props.setHouse(false);
              // props.setPerson(false);
              // props.setSetting(true);
            }}
          >
            {/* <div className={styles.navItem} id="3"> */}
            {props.setting ? (
              <RedSet className={styles.navItem} />
            ) : (
              <NavSetting className={styles.navItem} />
            )}
            {/* </div> */}
          </Link>

          <div
            className={styles.navBigButton}
            onClick={() => {
              props.setTwitPop(true);
            }}
          >
            <NavButton className={styles.interaction} />
          </div>
        </div>
        <Link to="/login">
          <NavOut className={styles.logOut} />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
