import React from "react";
import FormRegisterOrLogin from "./FormRegisterOrLogin";

export default function FormLogin({ onSubmit }) {
  return (
    <FormRegisterOrLogin
      title="Вход"
      buttonText="Войти"
      isRegister={false}
      onSubmit={onSubmit}
      subtitle="Не зарегистрированы? "
      linkWay="Регистрация"
    />
  );
}
