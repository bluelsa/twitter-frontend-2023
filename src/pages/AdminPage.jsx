import styles from '../common/Auth.module.scss'
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg"
import { Link } from "react-router-dom";
import { useState } from 'react'

const AdminPage = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null); 

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
            <input
              type="text"
              value={username}
              placeholder="請輸入帳號"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.input}>
            <div>密碼</div>
            <input
              type="password"
              value={password}
              placeholder="請輸入密碼"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
      </div>

      <button className={styles.button} onClick={handleClick}>
        登入
      </button>

      <div className={styles.loginLink}>
        <Link to="/login">
          <span className={styles.linkText}>前台登入</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;


