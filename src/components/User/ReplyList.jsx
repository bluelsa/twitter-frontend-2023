import styles from "./User.module.scss";
import { getUserReplies } from "../../api/user";
import { useEffect, useState } from "react";
import UserReplyTweet from "./UserReplyTweet";

const ReplyList = () => {
  const [userReplies, setUserReplies] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const getUserReplyAsync = async (userId) => {
      try {
        const userReplies = await getUserReplies(userId);

        if (userReplies) {
          setUserReplies(userReplies);
        }
        console.log('replyList: '+ JSON.stringify(userReplies))
      } catch (error) {
        console.error(error);
      }
    };
    getUserReplyAsync(userId);
  }, []);

  console.log('AAAA: '+ userReplies)

  return (
    <>
      {userReplies ? (
        <div className={styles.userList}>
          {userReplies.map((userReply) => {
            return <UserReplyTweet key={userReply.id} userReply={userReply} />;
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ReplyList;
