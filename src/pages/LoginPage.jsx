import styles from "../common/Auth.module.scss";
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login } from "../api/auth";
import TimePopup from "../components/TimePopup/TimePopup";
import clsx from "clsx";

const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  // 錯誤通知
  const [notiStatus, setNotiStatus] = useState("finished");
  // 錯誤提示
  const [accountInvalid, setAccountInvalid] = useState(false);

  const navigate = useNavigate();

  // 若為已登入狀態，則無法回到登入頁面
  useEffect(() => {
  const token = localStorage.getItem("token")
  if (token) {
    navigate('/home')
  }
  }, [navigate])

  const handleClick = async () => {
    if (account.length === 0 || password.length === 0) {
      setNotiStatus("incomplete");
      return;
    }

    const data = await login({
      account,
      password,
    });

    if (data.status === "success") {
      localStorage.removeItem("adminToken")
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("userId", data.data.user.id);
      setNotiStatus("success");
        navigate("/home");
      return;
    }
    if (data.status === "error" && data.message === "帳號不存在！") {
      setNotiStatus("wrongAccount");
      setAccountInvalid(true);
    }
    if (data.message === "帳號或密碼輸入錯誤！") {
      setNotiStatus('failed')
    }
  };

  const handleClosePopup = () => {
    setNotiStatus("finished");
  };

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "success" && (
          <TimePopup notification="success" title="登入成功" />
        )}
        {notiStatus === "failed" && (
          <TimePopup notification="error" title="帳號或密碼輸入錯誤" />
        )}
        {notiStatus === "wrongAccount" && (
          <TimePopup notification="error" title="帳號不存在" />
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
          <div
            className={clsx(styles.inputContainer, {
              [styles.errorContainer]: accountInvalid,
            })}
          >
            <label>
              帳號
              <input
                type="text"
                value={account}
                placeholder="請輸入帳號"
                onChange={(e) => setAccount(e.target.value)}
              />
            </label>
            {accountInvalid ? (
              <p className={styles.errorMessage}>帳號不存在</p>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label>
              密碼
              <input
                type="password"
                value={password}
                placeholder="請輸入密碼"
                autoComplete="current-password"
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
