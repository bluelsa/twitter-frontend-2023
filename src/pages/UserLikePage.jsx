import styles from "../pages/HomeStyle.module.scss";
import UserNav from "../components/User/UserNav";
import Popular from "../common/Popular";
import UserLike from "../components/User/UserLike";
// import TweetModal from "./TweetModal";

const UserLikePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <UserNav />
        <UserLike />
        <Popular />
      </div>
    </div>
  );
};

export default UserLikePage;
