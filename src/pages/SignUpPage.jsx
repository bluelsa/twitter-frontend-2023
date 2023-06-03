import styles from '../common/Auth.module.scss'
import { ReactComponent as Logo } from '../assets/image/ac-logo.svg'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
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
            <input type="text" value="" placeholder="請輸入帳號" />
          </label>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.input}>
            <div>名稱</div>
            <input type="text" value="" placeholder="請輸入使用者名稱" />
          </label>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.input}>
            <div>Email</div>
            <input type="text" value="" placeholder="請輸入Email" />
          </label>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.input}>
            <div>密碼</div>
            <input type="password" value="" placeholder="請設定密碼" />
          </label>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.input}>
            <div>密碼確認</div>
            <input type="password" value="" placeholder="請再次輸入密碼" />
          </label>
        </div>

      </div>
      <button className={styles.button} onClick={handleClick}>
        註冊
      </button>
      <div>
        <Link to="/login">
          <span className={styles.linkText}>取消</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage