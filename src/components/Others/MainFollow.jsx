import styles from "./otherStyle.module.scss";
// import UserTweetList from "../User/UserTweetList";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import { ReactComponent as FollowARed } from "../../assets/image/FollowA.svg";
import { ReactComponent as FollowBBlack } from "../../assets/image/FllowerB.svg";
import { ReactComponent as FollowABlack} from "../../assets/image/itemFollowAblack.svg";
import { ReactComponent as FollowBRed } from "../../assets/image/itemFollowBred.svg";
import MainFollower from "./MainFollower";
import WholeFollowing from "./WholeFollowing";

const MainFollow = (props) => {
  return (
    <>
      <div className={styles.mfcontainer}>
        <div className={styles.mfheader}>
          <div className={styles.mfarrow}>
            <Arrow />
          </div>
          <div
            className={styles.mfWrapper}
            onClick={() =>props.setIsChange(false)}
          >
            <div className={styles.userName}>John Doe</div>
            <div className={styles.tweetNum}>25 推文</div>
          </div>
        </div>

        <div className={styles.mainFollowDivider}></div>
        <div className={styles.ChoiceBox}>
          {props.isFollow ? (
            <FollowARed />
          ) : (
            <FollowABlack
              onClick={() => {
                props.setIsFollow(true);
                props.setIsWhole(false);
              }}
              className={styles.interaction}
            />
          )}
          {props.isWhole ? (
            <FollowBRed />
          ) : (
            <FollowBBlack
              onClick={() => {
                props.setIsFollow(false);
                props.setIsWhole(true);
              }}
              className={styles.interaction}
            />
          )}
        </div>
        <div className={styles.mainDivider}></div>
        {props.isFollow ? <MainFollower /> : <WholeFollowing />}
      </div>
    </>
  );
};

export default MainFollow;
