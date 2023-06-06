import styles from "../../pages/Home/HomeStyle.module.scss";
import { ReactComponent as Logo } from "../../assets/image/ac-logo.svg";
import { ReactComponent as NavIndex } from "../../assets/image/home-inactive.svg";
import { ReactComponent as NavPersonal } from "../../assets/image/user-profile-active.svg";
import { ReactComponent as NavSetting } from "../../assets/image/NavSetting.svg";
import { ReactComponent as NavOut } from "../../assets/image/NavOut.svg";
import { ReactComponent as NavButton } from "../../assets/image/NavButton.svg";
import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <div className={styles.leftColumn}>
      <nav className={styles.navContainer}>
        <div className={styles.navLogo}>
          <Logo className={styles.interaction} />
        </div>
        <div className={styles.navBar}>
          <Link to='/home'>
          <NavIndex className={styles.interaction} />
          </Link>
          <Link to='/user'>
          <NavPersonal className={styles.interaction} />
          </Link>
          <Link to='/setting'>
          <NavSetting className={styles.interaction} />
          </Link>
          <NavButton className={styles.interaction} />
        </div>

        <NavOut className={styles.logOut} />
      </nav>
    </div>
  );
};

export default UserNav;
