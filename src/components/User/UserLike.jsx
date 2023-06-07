import styles from "./User.module.scss";
import UserProfile from "./UserProfile";
import UserLikeList from "./UserLikeList";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import { Link } from "react-router-dom";

const UserMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/home">
          <div className={styles.arrow}>
            <Arrow />
          </div>
        </Link>
        <div className={styles.returnWrapper}>
          <div className={styles.userName}>John Doe</div>
          <div className={styles.tweetNum}>25 推文</div>
        </div>
      </div>
      <UserProfile />
      <UserLikeList />
    </div>
  );
};

export default UserMain;
