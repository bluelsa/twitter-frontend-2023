import styles from "../common/Auth.module.scss";
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { adminlogin } from "../api/admin";
import TimePopup from "../components/TimePopup/TimePopup";

const AdminPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  // 錯誤通知
  const [notiStatus, setNotiStatus] = useState("finished");

  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      navigate("/admin/tweets");
    }
  }, [navigate]);

  const handleClick = async () => {
    if (account.length === 0 || password.length === 0) {
      setNotiStatus("incomplete");
      return;
    }
    try {
      const data = await adminlogin({
        account,
        password,
      });

      if (data.id) {
        localStorage.setItem("adminToken", data.token);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/admin/tweets");
        return;
      }
    } catch (error) {
      console.log(error);
    }
    setNotiStatus("failed");
  };

  const handleClosePopup = () => {
    setNotiStatus("finished");
  };

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "failed" && (
          <TimePopup notification="error" title="帳號或密碼輸入錯誤" />
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
        <h1>後台登入</h1>
        <div className={styles.inputGroup}>
          <div className={styles.inputContainer}>
            <label>
              帳號
              <input
                type="text"
                value={account}
                placeholder="請輸入帳號"
                onChange={(e) => setAccount(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.inputContainer}>
            <label>
              密碼
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
    </>
  );
};

export default AdminPage;
