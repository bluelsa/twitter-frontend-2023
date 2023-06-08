import styles from '../common/Auth.module.scss'
import { ReactComponent as Logo } from "../assets/image/ac-logo.svg";
import { Link } from "react-router-dom";
import { useState } from 'react'
import { login } from '../api/auth'
// import Swal from "sweetalert2";

const LoginPage = () => {

  const [ account, setAccount ] = useState(null) 
  const [ password, setPassword ] = useState(null) 

  const handleClick = async () => {
   if (account.length === 0) return
   if (password.length === 0) return

  await login ({
    account,
    password
   })
  
  //  if (status === 'success') {
  //   localStorage.setItem('token' , token)
  //  }
   }


  return (
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
  );
};

export default LoginPage;
