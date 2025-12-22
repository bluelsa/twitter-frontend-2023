import { useEffect, useState } from "react";
import SpecReplyTweet from "./SpecReplyTweet";
import { getTweetReplies } from "../../api/tweets";

const SpecTweetList = ({ tweet, replyPop }) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const tweetId = localStorage.getItem("tweetId")
    const getRepliesAsync = async (tweetId) => {
      try {
        const reps = await getTweetReplies(tweetId);
        if (reps) {
          setReplies(reps);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getRepliesAsync(tweetId);
  }, [replyPop]); 

  return (
    <>
      {replies ? (
        <div>
          {replies.map((reply) => {
            return (
              <SpecReplyTweet
                key={reply.id}
                reply={reply}
                tweet={tweet}
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

export default SpecTweetList;
