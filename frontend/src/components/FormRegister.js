import React from "react";
import FormRegisterOrLogin from "./FormRegisterOrLogin";

export default function FormRegister({ onSubmit }) {
  return (
    <FormRegisterOrLogin
      title="Регистрация"
      buttonText="Зарегистрироваться"
      isRegister={true}
      onSubmit={onSubmit}
      subtitle="Уже зарегистрированы? "
      linkWay="Войти"
    />
  );
}
