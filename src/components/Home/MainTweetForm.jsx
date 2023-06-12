
import styles from "./settingStyle.module.scss";
 import { ReactComponent as ReplyIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/heart-hollow-xs.svg";
import { Link } from "react-router-dom";
const MainTwitForm = (props) => {
 
  return (
    <div className={styles.MaintweetContainer}>
      <div className={styles.tweetCollection}>
        <Link to="/mainreplies">
          <div className={styles.avatarWrap}>
            {/* <img src="https://i.pravatar.cc" alt="avatar" /> */}
            <img src={props.user.avatar} alt="avatar" />
          </div>
        </Link>
        <div className={styles.tweetContent}>
          <Link to="/mainreplies">
            <div>
              <div className={styles.nameInfo}>
                <div className={styles.tweetName}>{props.user.name}</div>
                <div className={styles.tweetTime}>
                  {props.user.name}@abcdefg &bull;3小時
                </div>
              </div>
            </div>

            <div className={styles.tweetArticle}>{props.user.introduction}</div>
          </Link>
          <div className={styles.count}>
            <div className={styles.replyNum}>
              <ReplyIcon onClick={() => props.setReplyPop(true)} />
              <span>13</span>
            </div>
            <div className={styles.likeNum}>
              <LikeIcon />
              <span>76</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.maintwitsDivider}></div>
    </div>
  );
};

export default MainTwitForm;
