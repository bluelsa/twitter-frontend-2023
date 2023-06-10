import styles from "../common/Auth.module.scss";
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/auth";
import TimePopup from "../components/TimePopup/TimePopup";

const LoginPage = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [notiStatus, setNotiStatus] = useState('finished')
  const navigate = useNavigate()
 
// const handlePopupClick = () => {
//   console.log("click");
//   setNotiStatus("finished");
// };

  const handleClick = async () => {
    if (account.length === 0 || password.length === 0) {
      setNotiStatus('incomplete')
      return;
    }

    const data = await login({
      account,
      password,
    });

    if (data.status === 'success') {
      localStorage.setItem("token", data.data.token);
      setNotiStatus('success')
      setTimeout(() => {
        navigate('/home');
      }, 2000);
      return
    }
      setNotiStatus('failed')
  };

  const handleClosePopup = () => {
    setNotiStatus('finished')
  }

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "success" && (
          <TimePopup notification="success" title="登入成功" />
        )}
        {notiStatus === "failed" && (
          <TimePopup
            notification="error"
            title="帳號不存在"
            onClick="alert('clicked')"
          />
        )}
        {notiStatus === "incomplete" && (
          <TimePopup notification="error" title="請輸入完整資訊" />
        )}
        {notiStatus === "finish" && ""}
      </div>
      <div className={styles.container}>
        <div>
          <Logo className={styles.logo} />
        </div>
        <h1>登入 Alphitter</h1>
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
        {/* <div className={styles.subLogin}> */}
        <div className={styles.loginLink}>
          <Link to="/signup">
            <span className={styles.linkText}>註冊</span>
          </Link>
          <span>&bull;</span>
          <Link to="/admin">
            <span className={styles.linkText}>後台登入</span>
          </Link>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default LoginPage;
