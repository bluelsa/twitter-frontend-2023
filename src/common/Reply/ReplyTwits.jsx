import styles from "./replyStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/Arrow.svg";
import { ReactComponent as ReplyText } from "../../assets/image/ReplyText.svg";
import { ReactComponent as Heart } from "../../assets/image/heart-hollow.svg";
import { ReactComponent as BigTalk } from "../../assets/image/25x25Talk.svg";
// import ReplyList from "../../components/";
import { useState, useEffect } from "react";
import {getTweetsReplies} from '../../api/tweets'
import { Link } from "react-router-dom";
function ReplyTwits(props) {
  const [replies, setReplies] = useState({});

  const id = localStorage.getItem("userId");
  console.log("replies吃到了嗎?", replies);

  useEffect(
    () => {
      const getAllReplyAsync = async (id) => {
        try {
          const allReply = await getTweetsReplies(id);
          // if (!allReply.status) {
            setReplies(allReply);
          // }
          console.log("nonono:", allReply);
        } catch (error) {
          console.log("get allTwits failed", error);
        }
      };
      getAllReplyAsync(id);
    },
    { replies }
  );

  return (
    <>
      <header className={styles.replyHeader}>
        <Link to="/home">
          <div>
            <Arrow className={styles.interaction} />
            <ReplyText className={styles.interaction} />
          </div>
        </Link>
      </header>

      <div className={styles.mainDivider}></div>

      <div className={styles.GuestSection}>
        <div className={styles.replyGuest}>
          <div className={styles.replyAvatar}>
            <div className={styles.avatarWrap}>
              {/* <img src="https://i.pravatar.cc" alt="avatar" /> */}
              <img src={props.user.avatar} alt="avatar" />
            </div>
            <div className={styles.follower}>
              <div className={styles.followerName}>{props.user.name}</div>
              <div className={styles.followerTime}>@{props.user.name}</div>
            </div>
          </div>
          <div className={styles.replyContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
            temporibus, non enim debitis ipsum repudiandae beatae nesciunt ea
            odio?
          </div>
          <div className={styles.replyTime}>上午 10:05&bull;2021年11月10日</div>
        </div>
        <div className={styles.shortDivider}></div>
        <div className={styles.replyLike}>
          <div className={styles.number}>
            34&nbsp;<span>回覆</span>
          </div>
          <div className={styles.number}>
            808&nbsp;<span>喜歡次數</span>
          </div>
        </div>
        <div className={styles.shortDivider}></div>
        <div className={styles.heartTalk}>
          <BigTalk
            className={styles.interaction}
            onClick={() => {
              props.setReplyPop(true);
            }}
          />
          <Heart className={styles.interaction} />
        </div>
        <div className={styles.mainDivider}></div>
      </div>

      <div className={styles.tweets}>
        {/* Render here */}
         {/* <ReplyList />
        <ReplyList /> */}

        </div>
    </>
  );
}

export default ReplyTwits;
