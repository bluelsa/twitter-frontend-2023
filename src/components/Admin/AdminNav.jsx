import styles from './AdminNav.module.scss'
import { ReactComponent as LogoutIcon } from '../../assets/image/logout.svg'
import { ReactComponent as Logo } from "../../assets/image/ac-logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/image/home-orange.svg";
import { ReactComponent as UserIcon } from "../../assets/image/user-hollow.svg";
import { Link } from "react-router-dom";
import clsx from 'clsx';


const AdminNav = () => {

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navBar}>
        <Logo className={styles.logo} />
        <div className={styles.homeIcon}>
          <HomeIcon />
          <Link to="/admin/tweets">
            <div className={styles.active}>Tweet List</div>
          </Link>
        </div>
        <div className={styles.userIcon}>
          <UserIcon />
          <Link to="/admin/users">
            <div>User List</div>
          </Link>
        </div>
      </div>

      <div className={styles.logoutIcon}>
        <LogoutIcon />
        <div>Logout</div>
      </div>
    </nav>
  );
}

export default AdminNav
