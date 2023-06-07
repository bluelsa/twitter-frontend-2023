import styles from "./HomeStyle.module.scss";
import NavBar from "../../components/Navbar/HomeNav/NavBar";
import Popular from "../../components/Home/Popular";
import ReplyTwits from '../Reply/ReplyTwits';
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
