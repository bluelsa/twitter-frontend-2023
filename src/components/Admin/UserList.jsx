import styles from "./UserList.module.scss";
import UserCard from './UserCard'

const UserList = ({users}) => {
  return (
    <div className={styles.container}>
      <div className={styles.lineContent}>
        <h4 className={styles.title}>User List</h4>
      </div>
      <div className={styles.cardsContainer}>
        {users.map((user) => {
          return (
            <UserCard
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
