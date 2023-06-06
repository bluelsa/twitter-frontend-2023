import styles from "./HomeStyle.module.scss";
import NavBar from "./NavBar";
import Popular from "./Popular";
import ReplyTwits from '../Reply/ReplyTwits';
import Twits from './Twits';

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
