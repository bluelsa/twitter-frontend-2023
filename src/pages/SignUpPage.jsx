import styles from '../common/Auth.module.scss'
import { ReactComponent as Logo } from '../assets/image/ac-logo.svg'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { signup } from '../api/auth'
import TimePopup from '../components/TimePopup/TimePopup'

const SignUpPage = () => {

  const [ account, setAccount ] = useState(''); 
  const [ name, setName ] = useState(''); 
  const [ email, setEmail ] = useState(''); 
  const [ password, setPassword ] = useState(''); 
  const [ checkPassword, setCheckPassword ] = useState('')
   const [notiStatus, setNotiStatus] = useState("finished");
  const navigate = useNavigate()

  const handleClick = async () => {
    if (account.length === 0 || name.length === 0 || email.length === 0 || password.length === 0 || checkPassword === 0) {
  setNotiStatus('incomplete')
return
    }
    if (password !== checkPassword) {
setNotiStatus('code')
return
    }
    const data = await signup ({
    account,
    name, 
    email, 
    password, 
    checkPassword
  })

  if ( data.status === 'success') {
    setNotiStatus("success");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
    return
  }
  setNotiStatus('failed')
  }

const handleClosePopup = () => {
  setNotiStatus("finished");
};

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "success" && (
          <TimePopup notification="success" title="註冊成功" />
        )}
        {notiStatus === "failed" && (
          <TimePopup notification="error" title="帳號/email已註冊" />
        )}
        {notiStatus === "incomplete" && (
          <TimePopup notification="error" title="請輸入完整資訊" />
        )}
        {notiStatus === "code" && (
          <TimePopup notification="error" title="請輸入相同密碼" />
        )}
        {notiStatus === "finish" && ""}
      </div>
      <div className={styles.container}>
        <div>
          <Logo className={styles.logo} />
        </div>
        <h1>建立你的帳號</h1>
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
              <div>名稱</div>
              <input
                type="text"
                value={name}
                placeholder="請輸入使用者名稱"
                maxLength="50"
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
              <div>密碼確認</div>
              <input
                type="password"
                value={checkPassword}
                placeholder="請再次輸入密碼"
                onChange={(e) => setCheckPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button className={styles.button} onClick={handleClick}>
          註冊
        </button>
        <div>
          <Link className={styles.linkText} to="/login">
            <span>取消</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpPage