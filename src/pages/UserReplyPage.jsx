import styles from "../pages/HomeStyle.module.scss";
import UserNav from "../components/User/UserNav";
import Popular from "../common/Popular";
import UserReply from "../components/User/UserReply";
// import TweetModal from "./TweetModal";

const UserReplyPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <UserNav />
        <UserReply />
        <Popular />
      </div>
    </div>
  );
};

export default UserReplyPage;
