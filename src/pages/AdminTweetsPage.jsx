import styles from './Admin.module.scss'
import TweetList from '../components/Admin/TweetList'
import { ReactComponent as LogoutIcon } from '../assets/image/logout.svg';
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { ReactComponent as HomeIcon } from "../assets/image/home-orange.svg";
import { ReactComponent as UserIcon } from "../assets/image/user-hollow.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { deleteTweets, getTweets } from '../api/admin'

const TweetsPage = () => {
  const [tweets, setTweets] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {  
    const token = localStorage.getItem("token");
    
    const getUsersAsync = async (token) => {
      try {
        const tweets = await getTweets(token);
       
        if (!tweets.status) {
          setTweets(tweets);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
   getUsersAsync(token);
  }, []);

useEffect(() => {
  if (!isLoading) {
  if (!isAuthenticated) {
    navigate("/admin");
  }
}
}, [navigate, isAuthenticated, isLoading]);


  const handleDelete = async (id) => {
   const token = localStorage.getItem("token");
   try {
     await deleteTweets(id, token);
     setTweets((prevTweets) => {
      return prevTweets.filter((tweet) => tweet.id !== id)
     })
   } catch(error) {
    console.error(error)
   }

  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
  };


  return (
    <div className={styles.Container}>
      {/* navbar */}
      <div className={styles.leftColumn}>
        {/* <AdminNav/> */}
          <nav className={styles.navContainer}>
            <div className={styles.navBar}>
              <Logo className={styles.logo} />
              <div className={styles.homeIcon}>
                <HomeIcon />
                <Link to="/admin/tweets">
                  <div className={styles.active}>推文清單</div>
                </Link>
              </div>
              <div className={styles.userIcon}>
                <UserIcon />
                <Link to="/admin/users">
                  <div>使用者列表</div>
                </Link>
              </div>
            </div>

            <div className={styles.logoutIcon}>
              <LogoutIcon />
              <Link to='/admin'>
              <div onClick={handleLogout}>登出</div>
              </Link>
            </div>
          </nav>
      </div>
{/* content */}
      <div className={styles.contentContainer}>
        <TweetList tweets={tweets} onDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default TweetsPage