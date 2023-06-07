import styles from "./HomeStyle.module.scss";
import NavBar from "../common/NavBar";
import Popular from "../common/Popular";
import ReplyTwits from "../common/Reply/ReplyTwits";
// import Twits from './Twits';

const MainPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <NavBar />
        <ReplyTwits />
        {/* <Twits /> */}
        <Popular />
      </div>
    </div>
  );
};

export default MainPage;
