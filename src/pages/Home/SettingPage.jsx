import styles from "./settingStyle.module.scss";
import NavBar from "./NavBar";
import { ReactComponent as AccountSet } from "../../assets/image/AccountSetText.svg";
import { ReactComponent as SaveButton } from "../../assets/image/SetSaveButton.svg";
import { ReactComponent as TestHouse } from "../../assets/image/TestChangeHouse.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const SettingPage = () => {
  const [username, setUsername] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [checkPassword, setCheckPassword] = useState(null);

  const handleClick = () => {
    console.log("click signup");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <NavBar />
        <div className={styles.mainBackground}>
          <div className={styles.title}>
            <AccountSet />
          </div>
          <div className={styles.setDivider}></div>

          <div className={styles.inputGroup}>
            <div className={styles.inputContainer}>
              <label className={styles.input}>
                <div>帳號</div>
                <input
                  type="text"
                  value={username}
                  placeholder="請輸入帳號"
                  // onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.input}>
                <div>名稱</div>
                <input
                  type="text"
                  value={nickname}
                  placeholder="請輸入使用者名稱"
                  // onChange={(e) => setNickname(e.target.value)}
                />
              </label>
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.input}>
                <div>Email</div>
                <input
                  type="text"
                  value={email}
                  placeholder="請輸入Email"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.input}>
                <div>密碼</div>
                <input
                  type="password"
                  value={password}
                  placeholder="請設定密碼"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.input}>
                <div>密碼再確認</div>
                <input
                  type="password"
                  value={checkPassword}
                  placeholder="請再次輸入密碼"
                  onChange={(e) => setCheckPassword(e.target.value)}
                />
              </label>
            </div>
            <div className={styles.saveButton}>
              <SaveButton />
            </div>
          </div>
          <TestHouse className={styles.setHouse} />
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
