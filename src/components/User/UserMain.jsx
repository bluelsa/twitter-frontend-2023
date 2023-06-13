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

const UserMain = ({
  user,
  main,
  setMain,
  follower,
  setFollower,
  following,
  setFollowing,
  // isFollow,
  // setIsFollow,
  // isWhole,
  // setIsWhole,
  // isChange,
  // setIsChange,
}) => {
  const [twitSection, setTwitSection] = useState(true);
  const [replySection, setReplySection] = useState(false);
  const [likeSection, setLikeSection] = useState(false);

  const [editPopup, setEditPopup] = useState(false);

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
            setMain(true);
            setFollowing(false);
            setFollower(false);
          }}
        >
          <Arrow />
        </div>

        <div className={styles.returnWrapper}>
          <div className={styles.userName}>{user.name}</div>
          <div className={styles.tweetNum}>
            {userTweets.length}
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
        // isFollow={isFollow}
        // setIsFollow={setIsFollow}
        // isWhole={isWhole}
        // setIsWhole={setIsWhole}
        // isChange={isChange}
        // setIsChange={setIsChange}
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

      {twitSection && <UserTweetList user={user} userTweets={userTweets} />}
      {replySection && <ReplyList userId={userId} user={user} />}
      {likeSection && <LikeForm />}

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
