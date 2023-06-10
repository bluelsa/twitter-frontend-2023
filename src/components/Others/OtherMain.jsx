import styles from "./otherStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import { Link } from "react-router-dom";
import OtherProfile from "../Others/OtherProfile";
import StickOption from "./StickOption";
import TwitForm from "../Home/TwitForm";
import ReplyList from "../../common/Reply/ReplyList";
import UserEditModal from "./UserEditModal";
const OtherMain = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}
            onClick={() =>{
            props.setIsOther(false)
            props.setHouse(true)}}>
          <div className={styles.arrow}>
            <Arrow />
          </div>
   
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
      {/* <ReplyList /> */}
      {/* <UserEditModal /> */}
    </div>
  );
};

export default OtherMain;
