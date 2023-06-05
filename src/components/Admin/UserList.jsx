import styles from "./UserList.module.scss";
import UserCard from './UserCard'

const UserList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lineContent}>
        <h4 className={styles.title}>使用者列表</h4>
      </div>
      <div className={styles.cardsContainer}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default UserList;
