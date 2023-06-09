import styles from '../common/Auth.module.scss'
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { adminlogin } from '../api/adminlogin'
import Swal from "sweetalert2";

const AdminPage = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate()

  const handleClick = async() =>  {
    if (account.length === 0 || password.length === 0) {
      Swal.fire({
        position: "top",
        title: "登入失敗",
        text: "請確實填寫帳號、密碼欄位",
        timer: 2000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }

    const { status, token } = await adminlogin({
      account,
      password,
    });
    if ( status === 'success' ) {
    localStorage.setItem('token', token);
      Swal.fire({
        position: "top",
        title: "登入成功",
        timer: 2000,
        icon: "success",
        showConfirmButton: false,
      });
      navigate('/admin/tweets');
      return
    }
    Swal.fire({
      position: "top",
      title: "登入成功",
      timer: 2000,
      icon: "success",
      showConfirmButton: false,
    });
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
              value={account}
              placeholder="請輸入帳號"
              onChange={(e) => setAccount(e.target.value)}
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


