import styles from '../common/Auth.module.scss'
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const handleClick = () => {
    console.log("click login");
  };

  return (
    <div className={styles.container}>
      <div>
        <Logo className={styles.logo} />
      </div>
      <h1>登入 Alphitter</h1>
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

      <div className={styles.loginLink}>
        <Link to="/signup">
          <span className={styles.linkText}>註冊</span>
        </Link>
        <span>&bull;</span>
        <Link to="/admin">
          <span className={styles.linkText}>後台登入</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
