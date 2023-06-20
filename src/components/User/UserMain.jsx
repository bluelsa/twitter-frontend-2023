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
  twitPop,
  replyPop,
  setMain,
  setSpecTweet,
  follower,
  setFollower,
  following,
  setFollowing,
  setReplyPop,
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [editData, setEditData] = useState(undefined)

  // render推文/回覆/喜歡的內容
  const [twitSection, setTwitSection] = useState(true);
  const [replySection, setReplySection] = useState(false);
  const [likeSection, setLikeSection] = useState(false);

  // 編輯個人資料popup window
  const [editPopup, setEditPopup] = useState(false);

  return (
    <>
      {user ? (
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
              {editData === undefined && (
                <div className={styles.userName}>{user.name}</div>
              )}
              {editData && <div className={styles.userName}>{editData.name}</div>}
              <div className={styles.tweetNum}>
                <span>{user.userTweetCount}</span>
                推文
              </div>
            </div>
          </div>
          <UserProfile
            editData={editData}
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
              setMain={setMain}
              twitPop={twitPop}
              editData={editData}
              replyPop={replyPop}
              setSpecTweet={setSpecTweet}
              setReplyPop={setReplyPop}
            />
          )}
          {replySection && <ReplyList />}
          {likeSection && (
            <LikeForm
              replyPop={replyPop}
              setMain={setMain}
              setReplyPop={setReplyPop}
              setSpecTweet={setSpecTweet}
            />
          )}

          {editPopup && (
            <UserEditModal
              editData={editData}
              setEditData={setEditData}
              user={user}
              editPopup={editPopup}
              setEditPopup={setEditPopup}
            />
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserMain;
