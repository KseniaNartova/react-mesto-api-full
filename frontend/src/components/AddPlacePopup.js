import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangePlaceName(evt) {
    setName(evt.target.value);
  }
  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="cards-profile"
      title="Новое Место"
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Название места"
        className="popup__input popup__input_type_title"
        minLength="2"
        maxLength="30"
        required
        value={name || ""}
        onChange={handleChangePlaceName}
      />
      <span className="popup__error" id="title-error"></span>
      <input
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_link"
        required
        value={link || ""}
        onChange={handleChangeLink}
      />
      <span className="popup__error" id="link-error"></span>
    </PopupWithForm>
  );
}
