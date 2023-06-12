import styles from "./HomeStyle.module.scss";
import NavBar from "../common/NavBar";
import Popular from "../common/Popular";
import Twits from "../components/Home/Twits";
import TwitPopUp from "../common/TwitPopUp";
import ReplyTwits from "../common/Reply/ReplyTwits";
import ReplyPopUp from "../components/Home/ReplyPopUp";
import { useState, useEffect } from "react";
import {getUser} from '../api/user'
const MainPage = () => {
  const [twitPop, setTwitPop] = useState(false);
  const [replyTwit, setReplyTwit] = useState(false);
  const [replyPop, setReplyPop] = useState(false);
  const [twit, setTwit] = useState(true);
  const [user, setUser] = useState({})

 console.log('吃到了沒？', user)

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

  } , {})


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
                setReplyTwit={setReplyTwit}
                replyPop={replyPop}
                setReplyPop={setReplyPop}
                user={user}
              />
            )}

            {replyTwit && (
              <ReplyTwits
                twit={twit}
                setTwit={setTwit}
                twitPop={twitPop}
                setTwitPop={setTwitPop}
                replyTwit={replyTwit}
                setReplyTwit={setReplyTwit}
                replyPop={replyPop}
                setReplyPop={setReplyPop}
              />
            )}
            {twitPop && <TwitPopUp 
            twitPop={twitPop} 
            setTwitPop={setTwitPop}
            user={user}
            />}
            {replyPop && (
              <ReplyPopUp 
              replyPop={replyPop} 
              setReplyPop={setReplyPop}
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
