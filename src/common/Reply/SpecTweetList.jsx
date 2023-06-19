import { useEffect, useState } from "react";
import SpecReplyTweet from "./SpecReplyTweet";
import { getTweetReplies } from "../../api/tweets";

const SpecTweetList = ({ tweetId, tweetAccount }) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    console.log("replyTweet:" + replies);
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
  }, []); 

  return (
    <>
      {replies ? (
        <div>
          {replies.map((reply) => {
            return (
              <SpecReplyTweet
                key={reply.id}
                reply={reply}
                tweetAccount={tweetAccount}
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
