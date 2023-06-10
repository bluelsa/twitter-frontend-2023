import styles from "./Admin.module.scss";
import UserList from "../components/Admin/UserList";
import { ReactComponent as LogoutIcon } from "../assets/image/logout.svg";
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { ReactComponent as HomeIcon } from "../assets/image/home-hollow.svg";
import { ReactComponent as UserIcon } from "../assets/image/user-solid-orange.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getUsers } from '../api/admin'





const UsersPage = () => {

const [users, setUsers] = useState([])

useEffect(() => {
  const token = localStorage.getItem("token");
  console.log('21'+token)
  const getUsersAsync = async (token) => {
    try {
      console.log('24'+token)
const users = await getUsers(token);
setUsers(users)
    } catch (error) {
      console.error(error)
    }
  }
  getUsersAsync(token)
}, [])

  return (
    <div className={styles.Container}>
      {/* navbar */}
      <div className={styles.leftColumn}>
        <nav className={styles.navContainer}>
          <div className={styles.navBar}>
            <Logo className={styles.logo} />
            <div className={styles.homeIcon}>
              <HomeIcon />
              <Link to="/admin/tweets">
                <div>推文清單</div>
              </Link>
            </div>
            <div className={styles.userIcon}>
              <UserIcon />
              <Link to="/admin/users">
                <div className={styles.active}>使用者列表</div>
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
        <UserList users={users}/>
      </div>
    </div>
  );
};

export default UsersPage;
