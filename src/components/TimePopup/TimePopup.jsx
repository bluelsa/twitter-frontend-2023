import styles from "./TimePopup.module.scss";
import { ReactComponent as SuccessIcon } from "../../assets/image/success.svg";
import { ReactComponent as ErrorIcon } from "../../assets/image/error.svg";
import { ReactComponent as WarnIcon } from "../../assets/image/warning.svg";
import { ReactComponent as NewIcon } from "../../assets/image/new.svg";

const TimePopup = ({ notification, title }) => {
  return (
    <div>
      {notification === "success" && (
        <div className={styles.container}>
          <div className={styles.notiContainer}>
            <p className={styles.notiText}>{title}</p>
            <div className={styles.successContainer}>
              <SuccessIcon />
            </div>
          </div>
        </div>
      )}

      {notification === "error" && (
        <div className={styles.container}>
          <div className={styles.notiContainer}>
            <p className={styles.notiText}>{title}</p>
            <div className={styles.errorContainer}>
              <ErrorIcon />
            </div>
          </div>
        </div>
      )}

      {notification === "warn" && (
        <div className={styles.container}>
          <div className={styles.notiContainer}>
            <p className={styles.notiText}>{title}</p>
            <div className={styles.warnContainer}>
              <WarnIcon/>
            </div>
          </div>
        </div>
      )}

      {notification === "new" && (
        <div className={styles.container}>
          <div className={styles.notiContainer}>
            <p className={styles.notiText}>{title}</p>
            <div className={styles.newContainer}>
              <NewIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePopup;
