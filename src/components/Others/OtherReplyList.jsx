import styles from "../User/User.module.scss";
import { getUserReplies } from "../../api/user";
import { useEffect, useState } from "react";
import OtherReplyTweet from "./OtherReplyTweet";

const OtherReplyList = () => {
  const [otherReplies, setOtherReplies] = useState([]);

  const otherId = localStorage.getItem("otherId");

  useEffect(() => {
    const getUserReplyAsync = async (otherId) => {
      try {
        const otherReplies = await getUserReplies(otherId);
        if (!otherReplies.status) {
          setOtherReplies(otherReplies);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserReplyAsync(otherId);
  }, [otherId]);

  return (
    <div className={styles.userList}>
      {otherReplies.map((otherReply) => {
        return <OtherReplyTweet key={otherReply.id} otherReply={otherReply} />;
      })}
    </div>
  );
};

export default OtherReplyList;
