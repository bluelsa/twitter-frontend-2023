import styles from "../common/Auth.module.scss";
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { adminlogin } from "../api/admin";
import TimePopup from "../components/TimePopup/TimePopup";

const AdminPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  // Error notification
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
          <TimePopup notification="error" title="Invalid account or password" />
        )}
        {notiStatus === "incomplete" && (
          <TimePopup notification="error" title="Please fill in all fields" />
        )}
        {notiStatus === "finish" && ""}
      </div>
      <div className={styles.container}>
        <div>
          <Logo className={styles.logo} />
        </div>
        <h1>Admin Login</h1>
        <div className={styles.inputGroup}>
          <div className={styles.inputContainer}>
            <label>
              Account
              <input
                type="text"
                value={account}
                placeholder="Enter your account"
                onChange={(e) => setAccount(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.inputContainer}>
            <label>
              Password
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
        </div>

        <button className={styles.button} onClick={handleClick}>
          Login
        </button>

        <div className={styles.loginLink}>
          <Link to="/login">
            <span className={styles.linkText}>User Login</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
