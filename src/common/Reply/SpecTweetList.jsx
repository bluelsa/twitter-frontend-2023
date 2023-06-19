import { useEffect, useState } from "react";
import SpecReplyTweet from "./SpecReplyTweet";
import { getTweetReplies } from "../../api/tweets";

const SpecTweetList = ({ tweet }) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const tweetId = tweet.id
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
                tweetAccount={tweet.TweetUser.account}
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
