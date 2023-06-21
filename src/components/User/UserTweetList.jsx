import styles from "./User.module.scss";
import UserTweet from "./UserTweet";
import { useState, useEffect } from "react";
import { getUserTweets } from "../../api/user";

const UserTweetList = ({ user,twitPop, replyPop, setMain, setSpecTweet, setReplyPop }) => {
  const [userTweets, setUserTweets] = useState([]);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const getUserTweetsAsync = async (userId) => {
      try {
        const userTweets = await getUserTweets(userId);
        if (userTweets) {
          setUserTweets(userTweets);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetsAsync(userId);
  }, [twitPop,replyPop]);

  return (
    <>
      {userTweets ? (
        <div className={styles.userList}>
          {userTweets.map((userTweet) => {
            return (
              <UserTweet
              user={user}
                key={userTweet.id}
                userTweet={userTweet}
                setMain={setMain}
                setReplyPop={setReplyPop}
                setSpecTweet={setSpecTweet}
              />
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserTweetList;
