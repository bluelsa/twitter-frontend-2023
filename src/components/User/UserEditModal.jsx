import styles from "./User.module.scss";
import { ReactComponent as ModalX } from "../../assets/image/ModalX.svg";
import { ReactComponent as EditTitle } from "../../assets/image/EditTitle.svg";
import { ReactComponent as EditSave } from "../../assets/image/EditSave.svg";

const UserEditModal = () => {
  return (
    <div className={styles.editContainer}>
      <div className={styles.editHeader}>
        <div>
          <ModalX />
          <EditTitle />
        </div>
        <div>
          <EditSave />
        </div>
      </div>
      {/* <div className={styles.mainDivider}></div> */}
      <div className={styles.imageContainer}>
        <img
          className={styles.cover}
          src="https://picsum.photos/634/200"
          alt="cover"
        />
        <img
          className={styles.avatar}
          src="https://i.pravatar.cc"
          alt="avatar"
        />
      </div>
      <div action="" className={styles.inputContainer}>
        <label className={styles.input}>
          <div>名稱</div>
          <input
            type="text"
            // defaultValue={nickname}
            placeholder="請輸入使用者名稱"
            // onChange={(e) => setNickname(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.textCount}>8/50</div>

      <div className={styles.textareaWrap}>
        <div action="" className={styles.textContainer}>
          <label for="" className={styles.textTitle}>
            自我介紹
          </label>

          <textarea
            type="text"
            id="note"
            // defaultValue={nickname}
            placeholder="請輸入使用者名稱"
            // onChange={(e) => setNickname(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.textCount}>0/160</div>
      </div>
    </div>
  );
};

export default UserEditModal;
