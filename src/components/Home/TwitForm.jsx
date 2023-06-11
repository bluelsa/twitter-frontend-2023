import UserTweet from "../User/UserTweet";

const TwitForm = ({ user, userTweets }) => {
console.log('Happy  '+{userTweets})
  return (
    <div>
      {userTweets.map((userTweet) => {
        return <UserTweet user={user} userTweet={userTweet} />;
      })}
    </div>
  );
};

export default TwitForm;
