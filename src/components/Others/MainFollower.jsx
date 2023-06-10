import styles from "./otherStyle.module.scss";
import MainFollowingItem from "./MainFollowingItem";
import MainFollowItem from "./MainFollowItem";

const MainFollow = () => {
  return (
    <>
      <div className={styles.container}>
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowItem />
        <MainFollowItem />
        <MainFollowItem />
      </div>
    </>
  );
};

export default MainFollow;
