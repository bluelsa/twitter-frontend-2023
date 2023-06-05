import styles from "./HomeStyle.module.scss";
import NavBar from "./NavBar";
import Popular from "./Popular";
import Twits from "./Twits";
import TweetModal from "./TweetModal";
import {useState} from "react"


const MainPage = () => {
  const [buttonPop, setButtonPop] = useState(false)
  
   const tweetClick = ()=> {
     setButtonPop(true)
   }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <NavBar tweetClick={tweetClick()} />
        <Twits />
        <Popular />
      </div>
      <TweetModal trigger={buttonPop} setButtonPop={setButtonPop} />
    </div>
  );
};

export default MainPage;
