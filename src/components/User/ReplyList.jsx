import styles from "./User.module.scss";
import { getUserReplies } from "../../api/user";
import { useEffect, useState } from "react";
import UserReplyTweet from "./UserReplyTweet";

const ReplyList = ({ userId }) => {
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
        return <UserReplyTweet key={userReply.id} userReply={userReply} />;
      })}
    </div>
  );
};

export default ReplyList;
