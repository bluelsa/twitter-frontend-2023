import UserTweet from "./UserTweet";

const TwitForm = ({ user, userTweets }) => {
  return (
    <div>
      {userTweets.map((userTweet) => {
        return <UserTweet user={user} userTweet={userTweet} />;
      })}
    </div>
  );
};

export default TwitForm;
