import styles from "./HomeStyle.module.scss"
import { ReactComponent as Logo } from "../../assets/image/ac-logo.svg"
import { RiHome7Fill } from "react-icons/ri"
import { MdOutlinePerson3 } from "react-icons/md"
import { HiOutlineCog } from "react-icons/hi"
import { FiLogOut } from "react-icons/fi"

const NavBar = () => {
  return (
    <div className={styles.leftColumn}>
      <nav className={styles.navContainer}>
        <div className={styles.navBar}>
          <Logo className={styles.logo} />
          <div className={styles.homeIcon}>
            <RiHome7Fill />
            <div>首頁</div>
          </div>
          <div className={styles.navIcon}>
            <MdOutlinePerson3 />
            <div>個人資料</div>
          </div>
          <div className={styles.navIcon}>
            <HiOutlineCog />
            <div>設定</div>
          </div>
          <button className={styles.navButton} >推文</button>
        </div>

        <div className={styles.navIcon}>
          <FiLogOut />
          <div>登出</div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
