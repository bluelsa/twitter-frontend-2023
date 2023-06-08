import styles from "./otherStyle.module.scss";
// import UserTweetList from "../User/UserTweetList";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import { Link } from "react-router-dom";
import OtherProfile from "../Others/OtherProfile";
import StickOption from './StickOption'
import TwitForm from '../Home/TwitForm'
import ReplyList from "../../common/Reply/ReplyList";
import UserEditModal from '../../components/User/UserEditModal'
const OtherMain = () => {
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
      <OtherProfile />
      <StickOption />
      <div className={styles.mainDivider}></div>
      {/* <UserTweetList /> */}
      <TwitForm />
      <ReplyList />  
      <UserEditModal />
    </div>
  );
};

export default OtherMain;
