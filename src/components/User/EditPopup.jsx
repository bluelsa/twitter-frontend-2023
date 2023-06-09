import styles from "./EditPopup.module.scss";
import { ReactComponent as Delete } from "../../assets/image/delete-orange.svg";
import { ReactComponent as ChangePhotoIcon } from "../../assets/image/camera.svg";
import { ReactComponent as DeleteCover } from "../../assets/image/delete-white.svg";
// import { useState } from 'react'

function EditPopup(props) {
  // const [username, setUsername] = useState(null)
  // const [info, setInfo] = useState(null)

  return props.trigger ? (
    <div className={styles.popupContainer}>
      <div className={styles.popupInner}>
        <div className={styles.headerWrapper}>
          <div>
            <Delete
              className={styles.deleteIcon}
              onClick={() => props.setTrigger(false)}
            />
          </div>
          <div className={styles.editTitle}>編輯個人資料</div>
          <button className={styles.storeButton}>儲存</button>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.coverWrapper}>
            <img
              className={styles.cover}
              src="https://picsum.photos/634/200"
              alt="cover"
            />
            <div className={styles.iconWrapper}>
              <ChangePhotoIcon />
              <DeleteCover />
            </div>
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
        <div className={styles.inputWrapper}>
          <div className={styles.inputContainer}>
            <label className={styles.nameInput}>
              <div>名稱</div>
              <input
                type="text"
                maxlength="50"
                value="John Doe"
                placeholder="請輸入名稱"
                // onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.infoInput}>
              <div>自我介紹</div>
              <textarea
                rows="10"
                cols="10"
                maxlength="140"
                value="John Doe" // onChange={(e) => setInfo(e.target.value)}
              />
            </label>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default EditPopup;
