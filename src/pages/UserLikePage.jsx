import styles from "../pages/Home/HomeStyle.module.scss";
import NavBar from "../components/Navbar/HomeNav/NavBar";
import Popular from "../components/Home/Popular";
import UserLike from "../components/User/UserLike";
// import TweetModal from "./TweetModal";

const UserLikePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <NavBar />
        <UserLike />
        <Popular />
      </div>
    </div>
  );
};

export default UserLikePage;
