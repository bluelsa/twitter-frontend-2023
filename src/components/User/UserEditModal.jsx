import styles from "./editStyle.module.scss";
import { ReactComponent as ModalX } from "../../assets/image/ModalX.svg";
import { ReactComponent as EditTitle } from "../../assets/image/EditTitle.svg";
import { ReactComponent as EditSave } from "../../assets/image/EditSave.svg";
// import { ReactComponent as CameraGroup } from "../../assets/image/ImageEditor.svg";
import { ReactComponent as DeleteCoverIcon } from "../../assets/image/delete-white.svg";
import { ReactComponent as ChangePhotoIcon } from "../../assets/image/iconCCamera.svg";
import { useState } from "react";
import { putUser } from "../../api/user";

import TimePopup from "../TimePopup/TimePopup";

const UserEditModal = ({ user, setEditPopup }) => {
  const [name, setName] = useState(user.name);
  const [introduction, setIntroduction] = useState(user.introduction);

  const [avatar, setAvatar] = useState(user.avatar);
  const [background, setBackground] = useState(user.background);

  const [notiStatus, setNotiStatus] = useState("finished");

  const id = user.id;

  const handleChangeInfo = async () => {
    if (name.length === 0) {
      setNotiStatus("nameEmpty");
      return;
    }
    if (introduction.length === 0) {
      setNotiStatus("introductionEmpty");
      return;
    }
    try {
      await putUser({
        id,
        name,
        introduction,
        avatar,
        background,
      });
    } catch (error) {
      console.error(error);
    }
    setEditPopup(false);

  };
  // ＊需要畫面重新整理，才會render修改過後的個人資料

  const handleClosePopup = () => {
    setNotiStatus("finished");
  };

  return (
    <>
      <div className={styles.notiContainer} onClick={handleClosePopup}>
        {notiStatus === "nameEmpty" && (
          <TimePopup notification="error" title="名稱不可為空白" />
        )}
        {notiStatus === "introductionEmpty" && (
          <TimePopup notification="error" title="自我介紹不可為空白" />
        )}
        {notiStatus === "incomplete" && (
          <TimePopup notification="error" title="請輸入完整資訊" />
        )}
        {notiStatus === "finish" && ""}
      </div>
      <div className={styles.editContainer}>
        <div className={styles.editInner}>
          <div className={styles.editHeader}>
            <div>
              <ModalX
                className={styles.icon}
                onClick={() => setEditPopup(false)}
              />
              <EditTitle />
            </div>
            <div>
              <EditSave
                className={styles.saveIcon}
                onClick={handleChangeInfo}
              />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.cover}
              src={
                background instanceof File
                  ? URL.createObjectURL(background)
                  : background
              }
              alt="cover"
            />
            <div className={styles.iconWrapper}>
              <div>
                <label>
                  <ChangePhotoIcon className={styles.changePhotoIcon} />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      setBackground(e.target.files[0]);
                    }}
                  />
                </label>
              </div>
              <div>
                <DeleteCoverIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.avatarWrapper}>
              <div>
                <img
                  className={styles.avatar}
                  src={
                    avatar instanceof File
                      ? URL.createObjectURL(avatar)
                      : avatar
                  }
                  alt="avatar"
                />
              </div>
              <div>
                <label>
                  <ChangePhotoIcon className={styles.changePhotoIcon} />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      setAvatar(e.target.files[0]);
                      console.log("data " + avatar);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <form>
              <div className={styles.nameInput}>
                <label className={styles.input}>
                  <div>名稱</div>
                  <input
                    className={styles.editInput}
                    type="text"
                    value={name}
                    placeholder={user.name}
                    maxLength="50"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div className={styles.textCount}>{name.length}/50</div>

              <div className={styles.textareaWrap}>
                <div action="" className={styles.textContainer}>
                  <label for="" className={styles.textTitle}>
                    自我介紹
                  </label>

                  <textarea
                    type="text"
                    id="note"
                    value={introduction}
                    placeholder={user.introduction}
                    maxLength="160"
                    onChange={(e) => setIntroduction(e.target.value)}
                  ></textarea>
                </div>
                <div className={styles.textCount}>
                  {introduction.length}/160
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditModal;
