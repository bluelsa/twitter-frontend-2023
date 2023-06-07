import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as Logo } from "../../assets/image/ac-logo.svg";
import { ReactComponent as NavIndex } from "../../assets/image/home-inactive.svg";
import { ReactComponent as NavPersonal } from "../../assets/image/user-active.svg";
import { ReactComponent as NavSetting } from "../../assets/image/NavSetting.svg";
import { ReactComponent as NavOut } from "../../assets/image/NavOut.svg";
import { ReactComponent as NavButton } from "../../assets/image/NavButton.svg";
// import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <div className={styles.leftColumn}>
      <nav className={styles.navContainer}>
        <div className={styles.navlogo}>
          <Logo className={styles.interaction} />
        </div>
        <div className={styles.navBar}>
          <NavIndex className={styles.interaction} />
          <NavPersonal className={styles.interaction} />
          <NavSetting className={styles.interaction} />
          <NavButton className={styles.interaction} />
        </div>

        <NavOut className={styles.logOut} />
      </nav>
    </div>
  );
};

export default UserNav;
