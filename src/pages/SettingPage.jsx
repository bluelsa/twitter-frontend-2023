import styles from "../components/Home/settingStyle.module.scss";
import NavBar from "../common/NavBar";
import { ReactComponent as AccountSet } from "../assets/image/AccountSetText.svg";
import { ReactComponent as SaveButton } from "../assets/image/SetSaveButton.svg";
// import { ReactComponent as TestHouse } from "../assets/image/TestChangeHouse.svg";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import clsx from "clsx";
export const SettingInput = (props) => {
  return (
    <div className={styles.eachInput}>
      <div className={styles.settinginputContainer}>
        <label className={styles.setlabel}>{props.title}</label>
        <input
          className={styles.setinput}
          type={props.type}
          // defaultValue={username}
          placeholder={props.placeholder}
          // onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.setbigDivider}></div>
    </div>
  );
};

const SettingPage = () => {
  // const [username, setUsername] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [checkPassword, setCheckPassword] = useState('');
  // const [isPush, setIsPush] = useState(false)

  // const handleClick = () => {
  //   console.log("click signup");
  // };

  //下面為測試用
  // const itemClick = () => {
  //   console.log("click signup");
  //    setIsPush(true)
  //  };

  return (
    // <div className={styles.homeContainer}>
    //   <div className={styles.mainContainer}>
    //     <NavBar />
        <div className={styles.mainBackground}>
          <div className={styles.title}>
            <AccountSet />
          </div>
          <div className={styles.setDivider}></div>

          <div className={styles.inputGroup}>
            <SettingInput 
            title="帳號" 
            type="text" 
            placeholder="請輸入帳號" 
            />
            <SettingInput
              title="名稱"
              type="text"
              placeholder="請輸入使用者名稱"
            />
            <SettingInput 
            title="Email" 
            type="text" 
            placeholder="請輸入Email" 
            />
            <SettingInput
              title="密碼"
              type="password"
              placeholder="請輸入帳號"
            />
            <SettingInput
              title="密碼再確認"
              type="password"
              placeholder="請再次輸入密碼"
            />

            <div className={styles.saveButton}>
              <SaveButton />
            </div>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default SettingPage;
