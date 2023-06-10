import styles from "./otherStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import { Link } from "react-router-dom";
import UserProfileNew from "../Others/UserProfileNew";
import StickOption from "./StickOption";
import TwitForm from "../Home/TwitForm";
import ReplyList from "../../common/Reply/ReplyList";
import UserEditModal from "./UserEditModal";
import LikeForm from "../Home/LikeForm";
import { useState } from "react";

const UserMainNew = (props) => {
  const [twitSection, setTwitSection] = useState(true);
  const [replySection, setReplySection] = useState(false);
  const [likeSection, setLikeSection] = useState(false);
  const [editPopup, setEditPopup] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={() => {
          setTwitSection(true);
          setReplySection(false);
          setLikeSection(false);
        }}
      >
        {/* <Link to="/home"> */}
        <div className={styles.arrow}>
          <Arrow />
        </div>
        {/* </Link> */}
        <div className={styles.returnWrapper}>
          <div className={styles.userName}>John Doe</div>
          <div className={styles.tweetNum}>25 推文</div>
        </div>
      </div>
      <UserProfileNew
        editPopup={editPopup}
        setEditPopup={setEditPopup}
        isFollow={props.isFollow}
        setIsFollow={props.setIsFollow}
        isWhole={props.isWhole}
        setIsWhole={props.setIsWhole}
        isChange={props.isChange}
        setIsChange={props.setIsChange}
      />
      <StickOption
        twitSection={twitSection}
        setTwitSection={setTwitSection}
        replySection={replySection}
        setReplySection={setReplySection}
        likeSection={likeSection}
        setLikeSection={setLikeSection}
      />
      <div className={styles.mainDivider}></div>

      {twitSection && <TwitForm />}
      {replySection && <ReplyList />}
      {likeSection && <LikeForm />}

      {editPopup && (
        <UserEditModal
          editPopup={editPopup}
          setEditPopup={setEditPopup}
          onSave={""}
        />
      )}
    </div>
  );
};

export default UserMainNew;
