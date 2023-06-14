import styles from "./replyStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/Arrow.svg";
import { ReactComponent as ReplyText } from "../../assets/image/ReplyText.svg";
import { ReactComponent as UnlikeIcon } from "../../assets/image/heart-hollow.svg";
import { ReactComponent as BigTalk } from "../../assets/image/25x25Talk.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-solid.svg";
import { useState } from 'react'
import SpecReplyTweet from "./SpecReplyTweet";

const SpecTweet = ({ setSpecTweet, setReplyPop }) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className={styles.tweetContainer}>
      <header className={styles.header}>
        <div
          className={styles.arrow}
          onClick={() => {
            setSpecTweet(false);
          }}
        >
          <Arrow className={styles.icon} />
        </div>
        <div className={styles.title}>
          <ReplyText />
        </div>
      </header>

      <div className={styles.tweet}>
        <div className={styles.tweetContent}>
          <div className={styles.avatar}>
            <img src="https://i.pravatar.cc" alt="avatar" />
          </div>
          <div className={styles.user}>
            <div className={styles.name}>John Doe</div>
            <div className={styles.account}>@heyJohn</div>
          </div>
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
          temporibus, non enim debitis ipsum repudiandae beatae nesciunt ea
          odio?
        </div>
        <div className={styles.time}>上午 10:05&bull;2021年11月10日</div>

        <div className={styles.num}>
          <div className={styles.replyNum}>
            34&nbsp;<span>回覆</span>
          </div>
          <div className={styles.likeNum}>
            808&nbsp;<span>喜歡次數</span>
          </div>
        </div>

        <div className={styles.iconWrapper}>
          <BigTalk
            className={styles.icon}
            onClick={() => {
              setReplyPop(true);
            }}
          />
          {isLike ? (
            <LikeIcon lassName={styles.icon} onClick={() => setIsLike(false)} />
          ) : (
            <UnlikeIcon
              className={styles.icon}
              onClick={() => setIsLike(true)}
            />
          )}
        </div>
      </div>

          <SpecReplyTweet />
          <SpecReplyTweet />
          <SpecReplyTweet />
          <SpecReplyTweet />
          <SpecReplyTweet />
          <SpecReplyTweet />


    </div>
  );
};

export default SpecTweet;
