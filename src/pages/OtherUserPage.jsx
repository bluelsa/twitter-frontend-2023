import styles from "../pages/HomeStyle.module.scss";
// import UserNav from "../components/User/UserNav";
import Popular from "../common/Popular";
import OtherMain from "../components/Others/OtherMain";
import NavBar from "../common/NavBar";

const OtherUserPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        
        <div className={styles.leftColumn}> 
        <NavBar />
        </div>
       <div className={styles.middleColumn}> 
       <OtherMain />
       </div>
       <div className={styles.rightColumn}> 
       <Popular />
       </div>
       
      </div>
    </div>
  );
};

export default OtherUserPage;
