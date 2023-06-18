import styles from "./Setting.module.scss";

import NavbarSetting from "../common/NavbarSetting";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/user";
import TwitPopUp from "../common/TwitPopUp";
import TimePopup from "../components/TimePopup/TimePopup";
import { putSetting } from "../api/user";

const SettingPage = () => {
  //identification
  const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  console.log("user: " + user);
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
    const id = localStorage.getItem("userId");
    const getUsersAsync = async (id) => {
      try {
        const user = await getUser(id);
        if (!user.status) {
          setUser(user);
          setAccount(user.account)
          setName(user.name)
          setEmail(user.email)
          setPassword(user.password)
          setCheckPassword(user.checkPassword)
          setIsAuthenticated(true);
        }
        console.log('effect: '+ user)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUsersAsync(id);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }
  }, [navigate, isAuthenticated, isLoading]);

  const id = localStorage.getItem("userId");

  const handleChange = async () => {
    console.log("click");
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
      // setTimeout(() => {
        window.location.reload();
      // }, 2000);

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
      {user ? (
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
                      user={user}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SettingPage;
