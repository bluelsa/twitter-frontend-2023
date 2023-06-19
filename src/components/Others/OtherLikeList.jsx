import styles from "../User/User.module.scss";
import OtherLikeTweet from "./OtherLikeTweet";
import { useEffect, useState } from "react";
import { getUserLikes } from "../../api/user";

const OtherLikeList = ({setReplyPop, setSpecTweet}) => {
  const [otherLikes, setOtherLikes] = useState([]);

  
  useEffect(() => {
    const otherId = localStorage.getItem("otherId");
    const getUserLikesAsync = async (otherId) => {
      try {
        const otherLikes = await getUserLikes(otherId);

        if (!otherLikes.status) {
          setOtherLikes(otherLikes);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserLikesAsync(otherId);
  }, []); 

  return (
    <div className={styles.userList}>
      {otherLikes.map((otherLike) => {
        return (
          <OtherLikeTweet
            key={otherLike.id}
            otherLike={otherLike}
            setSpecTweet={setSpecTweet}
            setReplyPop={setReplyPop}
          />
        );
      })}
    </div>
  );
};

export default OtherLikeList;
