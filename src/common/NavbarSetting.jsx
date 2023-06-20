import styles from "./NavBarStyles.module.scss";
import { ReactComponent as Logo } from "../assets/image/log50x50.svg";
import { ReactComponent as HomeIcon } from "../assets/image/home-inactive.svg";
import { ReactComponent as ProfileIcon } from "../assets/image/profile.svg";
import { ReactComponent as SettingActiveIcon } from "../assets/image/setting-active.svg";
import { ReactComponent as NavOut } from "../assets/image/NavOut.svg";
import { ReactComponent as TweetButton } from "../assets/image/tweetButton.svg";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const NavbarSetting = ({ setTwitPop }) => {
const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("otherId");
    navigate("/login");
  };

  const handleRemove = () => {
    localStorage.removeItem("OtherId");
  };

  return (
    <div className={styles.leftColumn}>
      <nav className={styles.navContainer}>
        <div className={styles.navlogo}>
          <Logo className={styles.interaction} />
        </div>
        <div className={styles.navBar}>
          <HomeIcon
            className={styles.icon}
            onClick={() => {
              navigate("/home");
              handleRemove();
            }}
          />

          <ProfileIcon
            className={styles.icon}
            onClick={() => {
              navigate("/user");
              handleRemove();
            }}
          />

          <SettingActiveIcon
            className={styles.icon}
            onClick={() => {
              navigate("/setting");
              handleRemove();
            }}
          />

          <div className={styles.navBigButton}>
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

export default NavbarSetting;
