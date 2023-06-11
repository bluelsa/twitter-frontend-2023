import styles from "./replyStyle.module.scss";
import { ReactComponent as Arrow } from "../../assets/image/Arrow.svg";
import { ReactComponent as ReplyText } from "../../assets/image/ReplyText.svg";
import { ReactComponent as Heart } from "../../assets/image/heart-hollow.svg";
import { ReactComponent as BigTalk } from "../../assets/image/25x25Talk.svg";
import { getTweetsReplies} from "../../api/tweets";
import { useState, useEffect } from "react";
import ReplyList from "./ReplyList";

function ReplyTwits(props) {
    const [ReplyTwit, setReplyTwit] = useState([])

    useEffect(() =>{
 const getReplies = async () => {
      try{
 const replies = await getTweetsReplies ();
     setReplyTwit(replies.map(item =>item.name))

     } catch (error) {
         console.log('replies',error)
      }
      }

     getReplies()

 console.log('here is replyTwits')
    },[])
    
   




  return (
    <>
      {/* <div className={`${styles.mainBackground} ${styles.scrollbar}`}> */}

      <header className={styles.replyHeader}>
        <div
          onClick={() => {
            props.setReplyTwit(false);
          }}
        >
          <Arrow className={styles.interaction} />
          <ReplyText className={styles.interaction} />
        </div>
      </header>

      <div className={styles.mainDivider}></div>

      <div className={styles.GuestSection}>
        <div className={styles.replyGuest}>
          <div className={styles.replyAvatar}>
            <div className={styles.twitAvatar}>
              {/* <LogoDark className={styles.darkLogo} /> */}
            </div>
            <div className={styles.follower}>
              <div className={styles.followerName}>Pizza Hut</div>
              <div className={styles.followerTime}>@Pizzahut</div>
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
        {ReplyTwit.map(item =>{
          <ReplyList key={item} />;
        })}
  
      </div>
      {/* </div> */}
    </>
  );
}

export default ReplyTwits;
