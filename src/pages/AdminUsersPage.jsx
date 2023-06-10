import styles from "./Admin.module.scss";
import UserList from "../components/Admin/UserList";
import { ReactComponent as LogoutIcon } from "../assets/image/logout.svg";
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { ReactComponent as HomeIcon } from "../assets/image/home-hollow.svg";
import { ReactComponent as UserIcon } from "../assets/image/user-solid-orange.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getUsers } from '../api/admin'





const UsersPage = () => {

const [users, setUsers] = useState([])
const [isAuthenticated, setIsAuthenticated] = useState(false)
const [isLoading, setIsLoading] = useState(true);
const navigate = useNavigate()


useEffect(() => {
  const token = localStorage.getItem("token");
  const getUsersAsync = async (token) => {
    try {
      const users = await getUsers(token);
      if (!users.status) {
        setUsers(users);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error);
    } 
    finally {
      setIsLoading(false);
    }
  }
  getUsersAsync(token)
}, [])

useEffect(() => {
  if (!isLoading) {
  if (!isAuthenticated) {
    navigate("/admin");
  }
}
}, [navigate, isAuthenticated, isLoading]);

const handleLogout = () => {
  localStorage.removeItem('token')
}

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
            <div onClick={handleLogout}>登出</div>
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
