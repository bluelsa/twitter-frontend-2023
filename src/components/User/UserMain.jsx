import styles from "../Others/otherStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import UserProfile from "./UserProfile";
import UserNavbar from "./UserNav";
import ReplyList from "./ReplyList";
import UserEditModal from "./UserEditModal";
import LikeForm from "./LikeForm";
import { useState, useEffect } from "react";
import UserTweetList from "./UserTweetList";
import { getUserTweets } from "../../api/user";
import { useNavigate } from "react-router-dom";

const UserMain = ({
  user,
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

  // render推文/回覆/喜歡的內容
  const [twitSection, setTwitSection] = useState(true);
  const [replySection, setReplySection] = useState(false);
  const [likeSection, setLikeSection] = useState(false);

  // 編輯個人資料popup window
  const [editPopup, setEditPopup] = useState(false);

  // API get 使用者所有推文
  const [userTweets, setUserTweets] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getUserTweetsAsync = async (userId) => {
      try {
        const userTweets = await getUserTweets(userId);
        if (!userTweets.status) {
          setUserTweets(userTweets);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetsAsync(userId);
  }, [userId]);

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
        user={user}
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
          user={user}
          userTweets={userTweets}
          setMain={setMain}
          setSpecTweet={setSpecTweet}
          setReplyPop={setReplyPop}
        />
      )}
      {replySection && <ReplyList userId={userId}/>}
      {likeSection && (
        <LikeForm setMain={setMain} setReplyPop={setReplyPop} setSpecTweet={setSpecTweet} />
      )}

      {editPopup && (
        <UserEditModal
          editPopup={editPopup}
          setEditPopup={setEditPopup}
          user={user}
        />
      )}
    </div>
  );
};

export default UserMain;
