import styles from "../../common/NavBarStyles.module.scss";
import { ReactComponent as Logo } from "../../assets/image/log50x50.svg";
import { ReactComponent as HomeIcon } from "../../assets/image/home-inactive.svg";
import { ReactComponent as ProfileIcon } from "../../assets/image/profile.svg";
import { ReactComponent as SettingIcon } from "../../assets/image/setting.svg";
import { ReactComponent as NavOut } from "../../assets/image/NavOut.svg";
import { ReactComponent as TweetButton } from "../../assets/image/tweetButton.svg";
import { useNavigate } from "react-router-dom";

const NavbarOther = ({ setTwitPop, onRemove }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("otherId");
    navigate("/login");
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
              onRemove();
            }}
          />

          <ProfileIcon
            onClick={() => {
              navigate("/user");
              onRemove();
            }}
          />

          <SettingIcon
            onClick={() => {
              navigate("/setting");
              onRemove();
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

export default NavbarOther;
