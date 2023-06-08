// import styles from "../pages/HomeStyle.module.scss";
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
import { Link } from "react-router-dom";

const NavBar = (props) => {
  
  return (
    <div className={styles.leftColumn}>
      <nav className={styles.navContainer}>
        <div className={styles.navlogo}>
          <Logo className={styles.interaction} />
        </div>
        <div className={styles.navBar}>
          {/* <Link to="/home"> */}
          <div
            className={styles.navItem}
            id="1"
            onClick={() => {
              props.setHouse(true);
              props.setPerson(false);
              props.setSetting(false);
            }}
          >
            {props.house ? <RedIndex /> : <blackIndex />}
          </div>
          {/* </Link> */}

          {/* <Link to="/user"> */}
          <div
            className={styles.navItem}
            id="2"
            onClick={() => {
              props.setHouse(false);
              props.setPerson(true);
              props.setSetting(false);
            }}
          >
            {props.Person ? <RedPersonal /> : <NavPersonal />}
          </div>
          {/* </Link>  */}
          {/* <Link to="/setting"> */}
          <div
            className={styles.navItem}
            id="3"
            onClick={() => {
              props.setHouse(false);
              props.setPerson(false);
              props.setSetting(true);
            }}
          >
            {props.setting ? <RedSet /> : <NavSetting />}
          </div>
          {/* </Link> */}
          <div className={styles.navBigButton}>
            <NavButton className={styles.interaction} />
          </div>
        </div>
        <NavOut className={styles.logOut} />
      </nav>
    </div>
  );
};

export default NavBar;
