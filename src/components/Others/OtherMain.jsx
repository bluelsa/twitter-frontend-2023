import styles from "../Others/otherStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import OtherProfile from "./OtherProfile";
import OtherTweetList from './OtherTweetList'
import OtherReplyList from './OtherReplyList'
import OtherLikeList from './OtherLikeList'
import UserNavbar from "../User/UserNav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from '../../api/user'

const OtherMain = ({
  setSpecTweet,
  setReplyPop,
  onRemove
}) => {
  // render推文/回覆/喜歡的內容
  const [twitSection, setTwitSection] = useState(true);
  const [replySection, setReplySection] = useState(false);
  const [likeSection, setLikeSection] = useState(false);

  // API get 其他使用者資料
  const [otherUser, setOtherUser] = useState({})

  const navigate = useNavigate();

useEffect(() => {
  const id = localStorage.getItem("otherId");
  const getUsersAsync = async () => {
    try {
      const otherUser = await getUser(id);
      if (!otherUser.status) {
        setOtherUser(otherUser);
      }
    } catch (error) {
      console.error(error);
    }
  };
  getUsersAsync(id);
}, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={() => {
          setTwitSection(true);
          setReplySection(false);
          setLikeSection(false);
        }}
      >
        <div
          className={styles.arrow}
          onClick={() => {
            onRemove();
            navigate(-1);
          }}
        >
          <Arrow />
        </div>

        <div className={styles.returnWrapper}>
          <div className={styles.userName}>{otherUser.name}</div>
          <div className={styles.tweetNum}>
            <span>{otherUser.userTweetCount}</span>
            推文
          </div>
        </div>
      </div>
      <OtherProfile otherUser={otherUser} />
      <UserNavbar
        twitSection={twitSection}
        setTwitSection={setTwitSection}
        replySection={replySection}
        setReplySection={setReplySection}
        likeSection={likeSection}
        setLikeSection={setLikeSection}
      />

      {twitSection && (
        <OtherTweetList
          otherUser={otherUser}
          setSpecTweet={setSpecTweet}
          setReplyPop={setReplyPop}
        />
      )}
      {replySection && <OtherReplyList />}
      {likeSection && (
        <OtherLikeList setSpecTweet={setSpecTweet} setReplyPop={setReplyPop} />
      )}
    </div>
  );
};

export default OtherMain;
