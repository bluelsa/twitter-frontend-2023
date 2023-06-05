import styles from './AdminNav.module.scss'
import { ReactComponent as LogoutIcon } from '../../assets/image/logout.svg'



const AdminNav = () => {

  return (
    <>
    <h1>nav</h1>
    <div>
      <LogoutIcon/>
      <span className={styles.logoutButton}>登出</span>
    </div>
    </>
  )
}

export default AdminNav