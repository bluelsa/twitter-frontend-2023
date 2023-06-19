import styles from "./NavBarStyles.module.scss";
import { ReactComponent as Logo } from "../assets/image/log50x50.svg";
import { ReactComponent as HomeIcon } from "../assets/image/home-inactive.svg";
import { ReactComponent as ProfileActiveIcon } from "../assets/image/profile-active.svg";
import { ReactComponent as SettingIcon } from "../assets/image/setting.svg";
import { ReactComponent as NavOut } from "../assets/image/NavOut.svg";
import { ReactComponent as TweetButton } from "../assets/image/tweetButton.svg";
import { useNavigate } from "react-router-dom";

const NavbarUser = ({ setTwitPop }) => {
  const navigate = useNavigate();

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
            onClick={() => {
              navigate("/home");
              handleRemove();
            }}
          />

          <ProfileActiveIcon
            onClick={() => {
              navigate("/user");
              handleRemove();
            }}
          />

          <SettingIcon
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
          <NavOut
            className={styles.logOut}
            onClick={() => {
              handleLogout();
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavbarUser;
