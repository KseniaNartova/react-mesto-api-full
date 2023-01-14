import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function DeleteCardPopup({isOpen, onClose}) {

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
    ></PopupWithForm>
  );
}
