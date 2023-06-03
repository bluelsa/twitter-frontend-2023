import styles from '../common/Auth.module.scss'
import { ReactComponent as Logo } from '../assets/image/ac-logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignUpPage = () => {

  const [ username, setUsername ] = useState(null); 
  const [ nickname, setNickname ] = useState(null); 
  const [ email, setEmail ] = useState(null); 
  const [ password, setPassword ] = useState(null); 
  const [ checkPassword, setCheckPassword ] = useState(null)

  const handleClick = () => {
    console.log('click signup')
  }


  return (
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
              value={username}
              placeholder="請輸入帳號"
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setNickname(e.target.value)}
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
  );
}

export default SignUpPage