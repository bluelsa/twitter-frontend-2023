import styles from '../../common/Auth.module.scss'
import { ReactComponent as Logo } from "../../assets/image/ac-logo.svg";
import { Link } from "react-router-dom";

const AdminPage = () => {

  const handleClick = () => {
    console.log("click login");
  };

  return (
    <div className={styles.container}>
      <div>
        <Logo className={styles.logo} />
      </div>
      <h1>後台登入</h1>
      <div className={styles.inputGroup}>
        <div className={styles.inputContainer}>
          <label className={styles.input}>
            <div>帳號</div>
            <input type="text" value="" placeholder="請輸入帳號" />
          </label>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.input}>
            <div>密碼</div>
            <input type="password" value="" placeholder="請輸入密碼" />
          </label>
        </div>
      </div>

      <button className={styles.button} onClick={handleClick}>
        登入
      </button>

      <div className={styles.adminLink}>
        <Link to="/login">
          <span className={styles.linkText}>前台登入</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;


