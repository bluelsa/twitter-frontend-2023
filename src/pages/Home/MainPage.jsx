import styles from "./HomeStyle.module.scss";
import NavBar from "../../components/Navbar/HomeNav/NavBar";
import Popular from "../../components/Home/Popular";
import Twits from "../../components/Home/Twits";
// import TweetModal from "./TweetModal";

const MainPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <NavBar />
        <Twits />
        <Popular />
      </div>
      {/* <TweetModal /> */}
    </div>
  );
};

export default MainPage;
