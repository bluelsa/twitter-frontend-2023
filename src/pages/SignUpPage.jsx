import styles from "../common/Auth.module.scss";
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../api/auth";
import TimePopup from "../components/TimePopup/TimePopup";
import clsx from "clsx";

const SignUpPage = () => {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  // Error notification
  const [notiStatus, setNotiStatus] = useState("finished");
  // Error message
  const [accountInvalid, setAccountInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const navigate = useNavigate();

  const handleClick = async () => {
    if (
      account.length === 0 ||
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      checkPassword === 0
    ) {
      setNotiStatus("incomplete");
      return;
    }
    if (password !== checkPassword) {
      setNotiStatus("code");
      return;
    }
    const data = await signup({
      account,
      name,
      email,
      password,
      checkPassword,
    });

    if (data.status === "success") {
      setNotiStatus("success");
        navigate("/login");
      return;
    }
    if (data.message[0] === "Account already exists") {
      setNotiStatus("account");
      setAccountInvalid(true);
      setEmailInvalid(false)
    }
    if (data.message[0] === "Email already exists") {
      setNotiStatus("email");
      setEmailInvalid(true);
      setAccountInvalid(false)
    }
    if (data.message.length > 1) {
      setNotiStatus("invalid");
      setAccountInvalid(true);
      setEmailInvalid(true);
    }
  };

  const handleClosePopup = () => {
    setNotiStatus("finished");
  };

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "success" && (
          <TimePopup notification="success" title="Registration successful" />
        )}
        {notiStatus === "account" && (
          <TimePopup notification="error" title="Account already exists!" />
        )}
        {notiStatus === "email" && (
          <TimePopup notification="error" title="Email already registered!" />
        )}
        {notiStatus === "invalid" && (
          <TimePopup notification="error" title="Account and Email already exist!" />
        )}
        {notiStatus === "incomplete" && (
          <TimePopup notification="error" title="Please fill in all fields" />
        )}
        {notiStatus === "code" && (
          <TimePopup notification="error" title="Passwords do not match" />
        )}
        {notiStatus === "finish" && ""}
      </div>
      <div className={styles.container}>
        <div>
          <Logo className={styles.logo} />
        </div>
        <h1>Create your account</h1>
        <div className={styles.inputGroup}>
          <div
            className={clsx(styles.inputContainer, {
              [styles.errorContainer]: accountInvalid,
            })}
          >
            <label className={styles.input}>
              Account
              <input
                type="text"
                value={account}
                placeholder="Enter your account"
                maxLength="10"
                onChange={(e) => setAccount(e.target.value)}
              />
            </label>
            {accountInvalid ? (
              <p className={styles.errorMessage}>Account already exists</p>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.input}>
              <div>Name</div>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                maxLength="50"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div
            className={clsx(styles.inputContainer, {
              [styles.errorContainer]: emailInvalid,
            })}
          >
            <label className={styles.input}>
              <div>Email</div>
              <input
                type="text"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {emailInvalid ? (
              <p className={styles.errorMessage}>Email already exists</p>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.input}>
              <div>Password</div>
              <input
                type="password"
                value={password}
                placeholder="Set your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.input}>
              <div>Confirm Password</div>
              <input
                type="password"
                value={checkPassword}
                placeholder="Enter password again"
                onChange={(e) => setCheckPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Sign Up
        </button>
        <div>
          <Link className={styles.linkText} to="/login">
            <span>Cancel</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
