import UserLikeTweet from "../User/UserLikeTweet";
import { useEffect, useState } from "react";
import { getUserLikes } from "../../api/user";

const LikeForm = ({setReplyPop, setReplyTwit}) => {

  const [userLikes, setUserLikes] = useState([]);

  const userId = localStorage.getItem("userId")
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
    <div>
      {userLikes.map((userLike) => {
        return <UserLikeTweet userLike={userLike}/>
      })}
    </div>
  );
};

export default LikeForm;
