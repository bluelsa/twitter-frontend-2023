import styles from "./TimePopup.module.scss";
import { ReactComponent as SuccessIcon } from "../../assets/image/success.svg";


const SuccessPopup = ({title}) => {
  return (
    <div className= {styles.container}>
    <div className={styles.notiContainer}>
      <p className={styles.notiText}>{title}</p>
      <div className={styles.successContainer}>
        <SuccessIcon/>
      </div>
    </div>
    </div>
  );
}

export default SuccessPopup
