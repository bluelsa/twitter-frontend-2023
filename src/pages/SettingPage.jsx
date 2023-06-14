import styles from "./Setting.module.scss";


import NavbarSetting from "../common/NavbarSetting";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/user";
import TwitPopUp from "../common/TwitPopUp";

const SettingPage = () => {
  //identification
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  //input content
  const [name, setName] = useState('');
  const [account, setAccount] = useState('user.account');
  const [email, setEmail] = useState('user.email');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  // popup window status
  const [twitPop, setTwitPop] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const getUsersAsync = async (id) => {
      try {
        const user = await getUser(id);
        if (!user.status) {
          setUser(user)
          setName(user.name)
          setAccount(user.account)
          setEmail(user.email)
          setIsAuthenticated(true);
        }
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

  return (
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
                  placeholder={account}
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
                  placeholder={name}
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
                  placeholder={email}
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
            <button className={styles.storeButton}>儲存</button>

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
  );
};

export default SettingPage;
