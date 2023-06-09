import styles from "./editStyle.module.scss"
import { ReactComponent as ModalX } from "../../assets/image/ModalX.svg";
import { ReactComponent as EditTitle } from "../../assets/image/EditTitle.svg";
import { ReactComponent as EditSave } from "../../assets/image/EditSave.svg";
import { ReactComponent as CameraGroup} from "../../assets/image/ImageEditor.svg"
import { ReactComponent as ChangePhotoIcon } from "../../assets/image/iconCCamera.svg";

const UserEditModal = (props) => {
  return (
    <div className={styles.editContainer}>
      <div className={styles.editHeader}>
        <div>
          <ModalX onClick={() => props.setEditPopup(false)} />
          <EditTitle />
        </div>
        <div>
          {/* 目前先由fasle 代替 */}
          <EditSave onClick={() => props.setEditPopup(false)} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.cover}
          src="https://picsum.photos/634/200"
          alt="cover"
        />
        <div className={styles.iconWrapper}>
          <CameraGroup />
        </div>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src="https://i.pravatar.cc"
            alt="avatar"
          />
          <ChangePhotoIcon className={styles.changeIcon} />
        </div>
      </div>
      <div action="" className={styles.inputContainer}>
        <label className={styles.input}>
          <div>名稱</div>
          <input
            className={styles.edittInput}
            type="text"
            value={""}
            placeholder="請輸入使用者名稱"
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
            placeholder="請輸入使用者名稱aaaa"
            // onChange={(e) => setNickname(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.textCount}>0/160</div>
      </div>
    </div>
  );
};

export default UserEditModal;
