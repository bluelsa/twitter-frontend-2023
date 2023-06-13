import styles from "./NavBarStyles.module.scss";
import { ReactComponent as Logo } from "../assets/image/log50x50.svg";
import { ReactComponent as HomeActiveIcon } from "../assets/image/home-active.svg";
import { ReactComponent as ProfileIcon } from "../assets/image/profile.svg";
import { ReactComponent as SettingIcon } from "../assets/image/setting.svg";
import { ReactComponent as NavOut } from "../assets/image/NavOut.svg";
import { ReactComponent as TweetButton } from "../assets/image/tweetButton.svg";
import { Link  } from "react-router-dom";

const NavBar = ({ setTwitPop }) => {

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
            <HomeActiveIcon />
          </Link>

          <Link to="/user">
            <ProfileIcon />
          </Link>
          <Link to="/setting">
            <SettingIcon />
          </Link>

          <div
            className={styles.navBigButton}
          >
            <TweetButton
              className={styles.interaction}
              onClick={() => {
                setTwitPop(true);
              }}
            />
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
