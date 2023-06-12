import styles from "../Others/otherStyle.module.scss";
// import UserTweetList from "../User/UserTweetList";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import { ReactComponent as FollowARed } from "../../assets/image/FollowA.svg";
import { ReactComponent as FollowBBlack } from "../../assets/image/FllowerB.svg";
import { ReactComponent as FollowABlack } from "../../assets/image/itemFollowAblack.svg";
import { ReactComponent as FollowBRed } from "../../assets/image/itemFollowBred.svg";
import MainFollower from "./MainFollower";
import WholeFollowing from "./WholeFollowing";

const MainFollow = ({
  isFollow,
  setIsFollow,
  isWhole,
  setIsWhole,
  setIsChange,
}) => {
  return (
    <>
      <div className={styles.mfcontainer}>
        <div className={styles.mfheader}>
          <div className={styles.mfarrow}>
            <Arrow />
          </div>
          <div className={styles.mfWrapper} onClick={() => setIsChange(false)}>
            <div className={styles.userName}>John Doe</div>
            <div className={styles.tweetNum}>25 推文</div>
          </div>
        </div>

        <div className={styles.mainFollowDivider}></div>
        <div className={styles.ChoiceBox}>
          {isFollow ? (
            <FollowARed />
          ) : (
            <FollowABlack
              onClick={() => {
                setIsFollow(true);
                setIsWhole(false);
              }}
              className={styles.interaction}
            />
          )}
          {isWhole ? (
            <FollowBRed />
          ) : (
            <FollowBBlack
              onClick={() => {
                setIsFollow(false);
                setIsWhole(true);
              }}
              className={styles.interaction}
            />
          )}
        </div>
        <div className={styles.mainDivider}></div>
        {isFollow ? <MainFollower /> : <WholeFollowing />}
      </div>
    </>
  );
};

export default MainFollow;
