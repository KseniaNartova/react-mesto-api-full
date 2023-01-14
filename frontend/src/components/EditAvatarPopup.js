import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  
  const avatarRef = React.useRef("");
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }
  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [onClose]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input type="url" name="linkAvatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_linkAvatar" required ref={avatarRef}/>
      <span className="popup__error" id="linkAvatar-error"></span>
    </PopupWithForm>
  );
}

