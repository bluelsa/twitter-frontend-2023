import styles from "../pages/HomeStyle.module.scss";
import Popular from "../common/Popular";
import NavbarUser from "../common/NavbarUser";
import UserMain from "../components/User/UserMain";
import MainFollower from "../components/User/MainFollower";
import MainFollowing from "../components/User/MainFollow";
import TwitPopUp from "../common/TwitPopUp";
import ReplyPopUp from "../components/Home/ReplyPopUp";
// import SpecTweet from "../common/Reply/SpecTweet";
import UserSpec from "../common/Reply/UserSpec";
import { useState, useEffect } from "react";
import { getUser } from "../api/user";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  //render state
  const [main, setMain] = useState(true);
  const [specTweet, setSpecTweet] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  //popup window
  const [twitPop, setTwitPop] = useState(false);
  const [replyPop, setReplyPop] = useState(false);
  //data & authentication
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const getUsersAsync = async () => {
      try {
        const user = await getUser(id);
        if (!user.status) {
          setUser(user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUsersAsync(id);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }
  }, [navigate, isAuthenticated, isLoading]);

  console.log("main: " + main);
  console.log("specTweet: " + specTweet);
  console.log("follower: " + follower);
  console.log("following: " + following);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
          <NavbarUser twitPop={twitPop} setTwitPop={setTwitPop} />
        </div>
        <div className={styles.middleColumn}>
          <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
            {specTweet && (
              <UserSpec
                setMain={setMain}
                setSpecTweet={setSpecTweet}
                setReplyPop={setReplyPop}
              />
            )}

            {main && (
              <UserMain
                user={user}
                main={main}
                setMain={setMain}
                setSpecTweet={setSpecTweet}
                follower={follower}
                setFollower={setFollower}
                following={following}
                setFollowing={setFollowing}
                setReplyPop={setReplyPop}
              />
            )}

            {following && (
              <MainFollowing
                user={user}
                setMain={setMain}
                setFollower={setFollower}
                setFollowing={setFollowing}
              />
            )}
            {follower && (
              <MainFollower
                user={user}
                setMain={setMain}
                setFollower={setFollower}
                setFollowing={setFollowing}
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

export default UserPage;
