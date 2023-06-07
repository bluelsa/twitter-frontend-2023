import styles from './Admin.module.scss'
import TweetList from '../components/Admin/TweetList'
import { ReactComponent as LogoutIcon } from '../assets/image/logout.svg';
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { ReactComponent as HomeIcon } from "../assets/image/home-orange.svg";
import { ReactComponent as UserIcon } from "../assets/image/user-hollow.svg";
import { Link } from "react-router-dom";
// import AdminNav from '../components/Navbar/AdminNav';


const TweetsPage = () => {
  return (
    <div className={styles.Container}>
      {/* navbar */}
      <div className={styles.leftColumn}>
        {/* <AdminNav/> */}
          <nav className={styles.navContainer}>
            <div className={styles.navBar}>
              <Logo className={styles.logo} />
              <div className={styles.homeIcon}>
                <HomeIcon />
                <Link to="/admin/tweets">
                  <div className={styles.active}>推文清單</div>
                </Link>
              </div>
              <div className={styles.userIcon}>
                <UserIcon />
                <Link to="/admin/users">
                  <div>使用者列表</div>
                </Link>
              </div>
            </div>

            <div className={styles.logoutIcon}>
              <LogoutIcon />
              <Link to='/admin'>
              <div>登出</div>
              </Link>
            </div>
          </nav>
      </div>
{/* content */}
      <div className={styles.contentContainer}>
        <TweetList />
      </div>
    </div>
  );
}

export default TweetsPage