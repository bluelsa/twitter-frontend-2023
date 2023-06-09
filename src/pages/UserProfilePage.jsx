import styles from "../pages/HomeStyle.module.scss";
import UserNav from '../components/User/UserNav'
import Popular from "../common/Popular";
import UserMain from "../components/User/UserMain";


const UserProfilePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <UserNav />
        <UserMain />
        <Popular />
      </div>
    </div>
  );
};

export default UserProfilePage;
