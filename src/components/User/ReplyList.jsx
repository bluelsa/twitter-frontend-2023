import styles from "./User.module.scss";
import { getUserReplies } from "../../api/user";
import { useEffect, useState } from "react";
import UserReplyTweet from "./UserReplyTweet";

const ReplyList = ({ user, userId }) => {
  const [userReplies, setUserReplies] = useState([]);

  useEffect(() => {
    const getUserReplyAsync = async (userId) => {
      try {
        const userReps = await getUserReplies(userId);

        if (!userReps.status) {
          setUserReplies(userReps);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserReplyAsync(userId);
  }, [userId]);

  return (
    <div className={styles.userList}>
      {userReplies.map((userReply) => {
        return <UserReplyTweet userReply={userReply} user={user} />;
      })}
    </div>
  );
};

export default ReplyList;
