import styles from "../pages/Home/HomeStyle.module.scss";
import NavBar from "../components/Navbar/HomeNav/NavBar";
import Popular from "../components/Home/Popular";
import UserReply from "../components/User/UserReply";
// import TweetModal from "./TweetModal";

const UserReplyPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <NavBar />
        <UserReply />
        <Popular />
      </div>
    </div>
  );
};

export default UserReplyPage;
