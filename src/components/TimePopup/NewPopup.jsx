import styles from "./TimePopup.module.scss";
import { ReactComponent as NewIcon } from "../../assets/image/new.svg";

const NewPopup = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.notiContainer}>
        <p className={styles.notiText}>{title}</p>
        <div className={styles.newContainer}>
          <NewIcon />
        </div>
      </div>
    </div>
  );
};

export default NewPopup;
