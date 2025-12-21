import styles from "../common/Auth.module.scss";
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login } from "../api/auth";
import { useAuth } from "../contexts/AuthContext";
import TimePopup from "../components/TimePopup/TimePopup";
import clsx from "clsx";

const LoginPage = () => {
  const { isAuthenticated } = useAuth()
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  // Error notification
  const [notiStatus, setNotiStatus] = useState("finished");
  // Error message
  const [accountInvalid, setAccountInvalid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    } 
    
  }, [navigate, isAuthenticated]);

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
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("userId", data.data.user.id);
      setNotiStatus("success");
      navigate("/home");
      return;
    }
    if (data.status === "error" && data.message === "Account does not exist!") {
      setNotiStatus("wrongAccount");
      setAccountInvalid(true);
    }
    if (data.message === "Invalid account or password!") {
      setNotiStatus("failed");
    }
  };

  const handleClosePopup = () => {
    setNotiStatus("finished");
  };

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "success" && (
          <TimePopup notification="success" title="Login successful" />
        )}
        {notiStatus === "failed" && (
          <TimePopup notification="error" title="Invalid account or password" />
        )}
        {notiStatus === "wrongAccount" && (
          <TimePopup notification="error" title="Account does not exist" />
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
        <h1>Login to Alphitter</h1>
        <div className={styles.inputGroup}>
            <div
              className={clsx(styles.inputContainer, {
                [styles.errorContainer]: accountInvalid,
              })}
            >
              <label>
                Account
                <input
                  type="text"
                  value={account}
                  placeholder="Enter your account"
                  onChange={(e) => setAccount(e.target.value)}
                />
              </label>
              {accountInvalid ? (
                <p className={styles.errorMessage}>Account does not exist</p>
              ) : (
                <></>
              )}
            </div>

            <div className={styles.inputContainer}>
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
        </div>

        <button className={styles.button} onClick={handleClick}>
          Login
        </button>
        <div className={styles.loginLink}>
          <Link to="/signup">
            <span className={styles.linkText}>Sign Up</span>
          </Link>
          <span>&bull;</span>
          <Link to="/admin">
            <span className={styles.linkText}>Admin Login</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
