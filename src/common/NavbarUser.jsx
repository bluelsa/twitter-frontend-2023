import styles from "./NavBarStyles.module.scss";
import { ReactComponent as Logo } from "../assets/image/log50x50.svg";
import { ReactComponent as HomeIcon } from "../assets/image/home-inactive.svg";
import { ReactComponent as ProfileActiveIcon } from "../assets/image/profile-active.svg";
import { ReactComponent as SettingIcon } from "../assets/image/setting.svg";
import { ReactComponent as NavOut } from "../assets/image/NavOut.svg";
import { ReactComponent as NavButton } from "../assets/image/tweetButton.svg";
import { Link } from "react-router-dom";

const NavbarUser = ({ setTwitPop }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <div className={styles.leftColumn}>
      <nav className={styles.navContainer}>
        <div className={styles.navlogo}>
          <Logo className={styles.interaction} />
        </div>
        <div className={styles.navBar}>
          <Link to="/home">
            <HomeIcon />
          </Link>

          <Link to="/user">
            <ProfileActiveIcon />
          </Link>
          <Link to="/setting">
            <SettingIcon />
          </Link>

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

export default NavbarUser;
