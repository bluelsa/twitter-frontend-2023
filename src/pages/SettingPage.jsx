import styles from "../components/Home/settingStyle.module.scss";

import { ReactComponent as AccountSet } from "../assets/image/AccountSetText.svg";
import { ReactComponent as SaveButton } from "../assets/image/SetSaveButton.svg";
import { ReactComponent as TestHouse } from "../assets/image/TestChangeHouse.svg";
import NavBar from "../common/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
export const SettingInput = (props) => {
  return (
    <div className={styles.eachInput}>
      <div className={styles.settinginputContainer}>
        <label className={styles.setlabel}>{props.title}</label>
        <input
          className={styles.setinput}
          type={props.type}
          Value={props.name}
          placeholder={props.placeholder}
          // onChange={(e) => props.setUsername(e.target.value)}
        />
      </div>
      <div className={styles.setbigDivider}></div>
    </div>
  );
};

const SettingPage = () => {
  const [twitPop, setTwitPop] = useState(false);
  
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
    <div className={styles.homeContainer}>
      {/* navbar position */}
      <div className={styles.mainContainer}>
        <NavBar 
        twitPop={twitPop} 
        setTwitPop={setTwitPop}
        
        />

        {/* 中間部分 */}
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
              name="username"
            />
            <SettingInput
              title="名稱"
              type="text"
              placeholder="請輸入使用者名稱"
              name="name"
            />
            <SettingInput title="Email" type="text" placeholder="請輸入Email" />
            <SettingInput
              title="密碼"
              type="password"
              placeholder="請輸入帳號"
              name="username"
            />
            <SettingInput
              title="密碼再確認"
              type="password"
              placeholder="請再次輸入密碼"
              name="username"
            />

            <div className={styles.saveButton}>
              <SaveButton />
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.popularList}></div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
