import styles from '../common/Auth.module.scss'
import { ReactComponent as Logo } from '../assets/image/ac-logo.svg'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { signup } from '../api/auth'
import Swal from "sweetalert2";

const SignUpPage = () => {

  const [ account, setAccount ] = useState(''); 
  const [ name, setName ] = useState(''); 
  const [ email, setEmail ] = useState(''); 
  const [ password, setPassword ] = useState(''); 
  const [ checkPassword, setCheckPassword ] = useState('')
  const navigate = useNavigate()

  const handleClick = async () => {
    if (account.length === 0 || name.length === 0 || email.length === 0 || password.length === 0 || checkPassword === 0) {
Swal.fire({
  position: "top",
  title: "註冊失敗",
  text: "請確認每個欄位確實填寫",
  timer: 2000,
  icon: "error",
  showConfirmButton: false,
});
return
    }
    if (password !== checkPassword) {
Swal.fire({
  position: "top",
  title: "註冊失敗",
  text: "密碼輸入不符，請再次確認密碼",
  timer: 2000,
  icon: "error",
  showConfirmButton: false,
});
return
    }
    const { status } = await signup ({
    account,
    name, 
    email, 
    password, 
    checkPassword
  })

  // console.log(status)

  if ( status === 'error') {
    Swal.fire({
      position: "top",
      title: "註冊失敗",
      text: "此帳號/Email已註冊",
      timer: 2000,
      icon: "error",
      showConfirmButton: false,
    });
    return
    
  }
  Swal.fire({
      position: "top",
      title: "註冊成功",
      timer: 2000,
      icon: "success",
      showConfirmButton: false,
    });
    navigate('/login')
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
  );
}

export default SignUpPage