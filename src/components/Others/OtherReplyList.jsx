import styles from "../User/User.module.scss";
import { getUserReplies } from "../../api/user";
import { useEffect, useState } from "react";
import OtherReplyTweet from "./OtherReplyTweet";

const OtherReplyList = () => {
  const [otherReplies, setOtherReplies] = useState([]);

  useEffect(() => {
    const otherId = localStorage.getItem("otherId");
    const getUserReplyAsync = async (otherId) => {
      try {
        const otherReplies = await getUserReplies(otherId);
        if (otherReplies) {
          setOtherReplies(otherReplies);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserReplyAsync(otherId);
  }, []); 

  return (
    <>
      {otherReplies ? (
        <div className={styles.userList}>
          {otherReplies.map((otherReply) => {
            return (
              <OtherReplyTweet key={otherReply.id} otherReply={otherReply} />
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default OtherReplyList;
