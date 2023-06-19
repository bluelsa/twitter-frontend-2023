import styles from "./Setting.module.scss";

import NavbarSetting from "../common/NavbarSetting";
import { useState, useEffect } from "react";
import TwitPopUp from "../common/TwitPopUp";
import TimePopup from "../components/TimePopup/TimePopup";
import { putSetting } from "../api/user";
import { useAuth } from "../contexts/AuthContext";

const SettingPage = () => {
  //identification
  const { user } = useAuth()

  //input content
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  // popup window status
  const [twitPop, setTwitPop] = useState(false);
  // notification
  const [notiStatus, setNotiStatus] = useState("finished");


  useEffect(() => {
    if(user) {
      setName(user.name);
      setAccount(user.account)
      setEmail(user.email)
    }
  },[user])

  const id = localStorage.getItem("userId");

  const handleChange = async () => {
    if (password !== checkPassword) {
      setNotiStatus("wrongPassword");
      return;
    }

    const data = await putSetting({
      id,
      account,
      name,
      email,
      password,
      checkPassword,
    });

    if (data.account) {
      setNotiStatus("success");
      
        window.location.reload();

      return;
    } else {
      if (data.message === "Error: Account already exist") {
        setNotiStatus("wrongAccount");
      }
      if (data.message === "Error: Email already exist") {
        setNotiStatus("wrongEmail");
      }
    }
  };

  return (
    <>
          <div
            className={styles.notiContainer}
            onClick={() => {
              setNotiStatus("finished");
            }}
          >
            {notiStatus === "success" && (
              <TimePopup notification="success" title="儲存成功" />
            )}
            {notiStatus === "wrongPassword" && (
              <TimePopup notification="error" title="請輸入相同密碼" />
            )}
            {notiStatus === "wrongAccount" && (
              <TimePopup notification="error" title="帳號已存在" />
            )}
            {notiStatus === "wrongEmail" && (
              <TimePopup notification="error" title="Email已存在" />
            )}
          </div>
          <div className={styles.homeContainer}>
            <div className={styles.mainContainer}>
              <div className={styles.leftColumn}>
                <NavbarSetting twitPop={twitPop} setTwitPop={setTwitPop} />
              </div>
              <div className={styles.middleColumn}>
                <div className={styles.mainBackground}>
                  <div className={styles.header}>帳戶設定</div>
                  <form>
                    <div className={styles.inputContainer}>
                      <label>
                        <div>帳號</div>
                        <input
                          type="text"
                          value={account}
                          placeholder={user.account}
                          onChange={(e) => setAccount(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className={styles.inputContainer}>
                      <label>
                        <div>名稱</div>
                        <input
                          type="text"
                          value={name}
                          placeholder={user.name}
                          maxLength='50'
                          onChange={(e) => setName(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className={styles.inputContainer}>
                      <label>
                        Email
                        <input
                          type="text"
                          value={email}
                          placeholder={user.email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className={styles.inputContainer}>
                      <label>
                        密碼
                        <input
                          type="password"
                          value={password}
                          placeholder="請設定密碼"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className={styles.inputContainer}>
                      <label>
                        密碼再確認
                        <input
                          type="password"
                          value={checkPassword}
                          placeholder="請再次輸入密碼"
                          onChange={(e) => setCheckPassword(e.target.value)}
                        />
                      </label>
                    </div>
                  </form>
                  <button className={styles.storeButton} onClick={handleChange}>
                    儲存
                  </button>

                  {twitPop && (
                    <TwitPopUp
                      twitPop={twitPop}
                      setTwitPop={setTwitPop}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default SettingPage;
