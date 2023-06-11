import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as TalkIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/LikeIcon.svg";
import { Link } from "react-router-dom";
const TwitForm = (props) => {
  return (
    <>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetCollection}>
          <Link to="/otheruser">
            <div
              className={styles.twitAvatar}
              // onClick={() => {
              //   props.setIsOther(true);
              //   props.setHouse(false);
              //   props.setReplyTwit(false);
              // }}
            >
              {/* <Head /> */}
            </div>
          </Link>
{/* <Link to="/"> */}
          <div className={styles.tweetContent}>
            <div
              className={styles.nameInfo}
              onClick={() => {
                props.setReplyTwit(true);
                 props.setTwit(false);
              }}
            >
              <div className={styles.tweetName}>Apple</div>
              <div className={styles.tweetTime}>@apple &bull;3小時</div>
            </div>
            <div
              className={styles.tweetArticle}
              onClick={() => {
                props.setReplyTwit(true);
                 props.setTwit(false);
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
              temporibus, non enim debitis ipsum repudiandae beatae nesciunt ea
              odio?
            </div>
            {/* </Link> */}
            <div className={styles.tweetMessage}>
              <div className={styles.smallIcon}>
                <TalkIcon
                  className={styles.interaction}
                  onClick={() => {props.setReplyPop(true)
                   props.setTwit(false);}}
                  
                />
                <div>13</div>
              </div>
              <div className={styles.smallIcon}>
                <LikeIcon className={styles.interaction} />
                <div>73</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainDivider}></div>
    </>
  );
};

export default TwitForm;
