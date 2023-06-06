import styles from "../pages/Home/HomeStyle.module.scss";
import NavBar from "../components/Navbar/HomeNav/NavBar";
import Popular from "../components/Home/Popular";
import UserMain from "../components/User/UserMain";
// import TweetModal from "./TweetModal";

const UserProfilePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <NavBar />
        <UserMain />
        <Popular />
      </div>
    </div>
  );
};

export default UserProfilePage;
