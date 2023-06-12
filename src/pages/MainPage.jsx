import styles from "./HomeStyle.module.scss";
import NavBar from "../common/NavBar";
import Popular from "../common/Popular";
import SettingPage from "./SettingPage";
// import UserMainNew from "../components/Others/UserMainNew";
import Twits from "../components/Home/Twits";
import TwitPopUp from "../common/TwitPopUp";
import ReplyPopUp from "../components/Home/ReplyPopUp";
import { useState, useEffect } from "react";
import {getUser} from '../api/user'


const MainPage = () => {
  const [twitPop, setTwitPop] = useState(false);
  const [replyTwit, setReplyTwit] = useState(false);
  const [twit, setTwit] = useState(true);
  const [user, setUser] = useState({})
const [replyPop, setReplyPop] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("userId");
 const getUserAsync = async (id) => {
  try{
 const ownUser = await getUser(id)
     setUser(ownUser)
     } 
    catch  (error) {
      console.error('user in :', error)
    }  
  }
   getUserAsync(id);
   } , [])


  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
          <NavBar twitPop={twitPop} setTwitPop={setTwitPop} />
        </div>
        {/* 中間推文部分 */}
        <div className={styles.middleColumn}>
          <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
            {twit && (
              <Twits
                twit={twit}
                setTwit={setTwit}
                twitPop={twitPop}
                setTwitPop={setTwitPop}
                replyTwit={replyTwit}
                replyPop={replyPop}
                setReplyPop={setReplyPop}
                setReplyTwit={setReplyTwit}
                user={user}
              />
            )}
            {replyPop && (
              <ReplyPopUp
                replyPop={replyPop}
                setReplyPop={setReplyPop}
                user={user}
              />
            )}
            {twitPop && (
              <TwitPopUp
                twitPop={twitPop}
                setTwitPop={setTwitPop}
                user={user}
              />
            )}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Popular />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
