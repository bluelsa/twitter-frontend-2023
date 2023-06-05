import styles from "./HomeStyle.module.scss";
import NavBar from "./NavBar";
import Popular from "./Popular";
import Twits from "./Twits";
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
