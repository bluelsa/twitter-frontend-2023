import styles from "../pages/HomeStyle.module.scss";
import Popular from "../common/Popular";
// import NavBar from "../common/NavBar";
import NavbarUser from "../common/NavbarUser";
import UserMainNew from "../components/User/UserMainNew";
import MainFollow from "../components/User/MainFollow";
import TwitPopUp from "../common/TwitPopUp";
import { useState, useEffect } from "react";
import { getUser } from "../api/user";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const [twitPop, setTwitPop] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const [isWhole, setIsWhole] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const getUsersAsync = async (id) => {
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

  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
          <NavbarUser twitPop={twitPop} setTwitPop={setTwitPop} />
        </div>
        <div className={styles.middleColumn}>
          <div className={`${styles.mainBackground} ${styles.scrollbar}`}>
            <UserMainNew
              isFollow={isFollow}
              setIsFollow={setIsFollow}
              isWhole={isWhole}
              setIsWhole={setIsWhole}
              isChange={isChange}
              setIsChange={setIsChange}
              user={user}
            />

            {isFollow && (
              <MainFollow
                isFollow={isFollow}
                setIsFollow={setIsFollow}
                isWhole={isWhole}
                setIsWhole={setIsWhole}
                isChange={isChange}
                setIsChange={setIsChange}
              />
            )}
            {twitPop && <TwitPopUp twitPop={twitPop} setTwitPop={setTwitPop} />}
            {/* {replyPop && (
              <ReplyPopUp replyPop={replyPop} setReplyPop={setReplyPop} />
            )} */}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Popular />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
