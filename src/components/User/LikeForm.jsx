import styles from "./User.module.scss";
import UserLikeTweet from "./UserLikeTweet";
import { useEffect, useState } from "react";
import { getUserLikes } from "../../api/user";

const LikeForm = ({ 
  setMain,
  setReplyPop, 
  setSpecTweet 
}) => {
  const [userLikes, setUserLikes] = useState([]);

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const getUserLikesAsync = async (userId) => {
      try {
        const userLikes = await getUserLikes(userId);

        if (!userLikes.status) {
          setUserLikes(userLikes);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserLikesAsync(userId);
  }, []);

  return (
    <div className={styles.userList}>
      {userLikes.map((userLike) => {
        return <UserLikeTweet key={userLike.id} userLike={userLike} setMain={setMain} setSpecTweet={setSpecTweet} setReplyPop={setReplyPop}/>;
      })}
    </div>
  );
};

export default LikeForm;
