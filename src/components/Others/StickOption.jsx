import styles from "./otherStyle.module.scss";

const StickOption = () => {
return (
  <div className={styles.stickContainer}>
    <div className={styles.stick}>
      {/* <Link to="/user"> */}
        <div className={''}>推文</div>
      {/* </Link> */}
      {/* <Link to="/user/replies"> */}
        <div className={''}>回覆</div>
      {/* </Link> */}
      {/* <Link to="/user/likes"> */}
        <div className={styles.stickRed}>喜歡的內容</div>
      {/* </Link> */}
    </div>
  </div>
);

}

export default StickOption
