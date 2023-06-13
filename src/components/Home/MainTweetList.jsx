import MainTweetForm from "./MainTweetForm";
import { useState, useEffect } from 'react'
import { getTweetsAll } from '../../api/tweets'

const MainTweetList = ({
  user,
  // replyPop,
  setReplyPop,
}) => {

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const twts = await getTweetsAll();
          setTweets(twts);
      } catch (error) {
        console.error(error);
      }
    };
    
    getTweetsAsync();
  }, []);

  return (
    <div>
      {tweets.map((tweet) => {
        return <MainTweetForm tweet={tweet} setReplyPop={setReplyPop} />;
      })}
    </div>
  );
};

export default MainTweetList;
