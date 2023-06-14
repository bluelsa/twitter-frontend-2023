import styles from "../User/User.module.scss";
import OtherLikeTweet from "./OtherLikeTweet";
import { useEffect, useState } from "react";
import { getUserLikes } from "../../api/user";

const OtherLikeList = ({setReplyPop}) => {
  const [otherLikes, setOtherLikes] = useState([]);

  const otherId = localStorage.getItem("otherId");
  useEffect(() => {
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
        return <OtherLikeTweet otherLike={otherLike} setReplyPop={setReplyPop} />;
      })}
    </div>
  );
};

export default OtherLikeList;
