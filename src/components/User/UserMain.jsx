import styles from "../Others/otherStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import UserProfile from "./UserProfile";
import UserNavbar from "./UserNav";
import ReplyList from "./ReplyList";
import UserEditModal from "./UserEditModal";
import LikeForm from "./LikeForm";
import { useState } from "react";
import UserTweetList from "./UserTweetList";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const UserMain = ({
  main,
  setMain,
  setSpecTweet,
  follower,
  setFollower,
  following,
  setFollowing,
  setReplyPop,
}) => {
  const navigate = useNavigate();
  const { user, userTweets } = useAuth()

  // render推文/回覆/喜歡的內容
  const [twitSection, setTwitSection] = useState(true);
  const [replySection, setReplySection] = useState(false);
  const [likeSection, setLikeSection] = useState(false);

  // 編輯個人資料popup window
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
        <div
          className={styles.arrow}
          onClick={() => {
            navigate("/home");
          }}
        >
          <Arrow />
        </div>

        <div className={styles.returnWrapper}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.tweetNum}>
            <span>{userTweets.length}</span>
            推文
          </div>
        </div>
      </div>
      <UserProfile
        editPopup={editPopup}
        setEditPopup={setEditPopup}
        main={main}
        setMain={setMain}
        follower={follower}
        setFollower={setFollower}
        following={following}
        setFollowing={setFollowing}
      />
      <UserNavbar
        twitSection={twitSection}
        setTwitSection={setTwitSection}
        replySection={replySection}
        setReplySection={setReplySection}
        likeSection={likeSection}
        setLikeSection={setLikeSection}
      />

      {twitSection && (
        <UserTweetList
          userTweets={userTweets}
          setMain={setMain}
          setSpecTweet={setSpecTweet}
          setReplyPop={setReplyPop}
        />
      )}
      {replySection && <ReplyList/>}
      {likeSection && (
        <LikeForm setMain={setMain} setReplyPop={setReplyPop} setSpecTweet={setSpecTweet} />
      )}

      {editPopup && (
        <UserEditModal
          editPopup={editPopup}
          setEditPopup={setEditPopup}
        />
      )}
    </div>
  );
};

export default UserMain;
