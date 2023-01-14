import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);
  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input type="text" placeholder="Имя" className="popup__input popup__input_type_name" minLength="2" maxLength="40" required onChange={handleNameChange} value={name || ""}/>
      <span className="popup__error" id="name-error"></span>
      <input type="text" placeholder="Профессия" className="popup__input popup__input_type_text" minLength="2" maxLength="200" required onChange={handleDescriptionChange} value={description || ""}/>
      <span className="popup__error" id="aboutself-error"></span>
    </PopupWithForm>
  );
}
