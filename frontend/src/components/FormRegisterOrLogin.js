import React from "react";
import { Link } from "react-router-dom";

export default function FormRegisterOrLogin({
  title,
  buttonText,
  isRegister,
  onSubmit,
  subtitle,
  linkWay,
}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }
  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(email, password);
  }

  return (
    <main className="content">
      <div className="popup__content">
        <form
          className="popup__container popup__container_type_page-register"
          onSubmit={handleSubmit}
        >
          <h3 className="popup__title popup__title_type_page-register">
            {title}
          </h3>
          <fieldset className="popup__input-container">
            <div className="popup__inputs">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="popup__input popup__input_type_page-register"
                minLength="2"
                maxLength="100"
                required
                onChange={handleEmailChange}
              />
              <span className="popup__error" id="name-error"></span>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                className="popup__input popup__input_type_page-register"
                minLength="2"
                maxLength="200"
                required
                onChange={handlePasswordChange}
              />
            </div>
            <div className="popup__element-submit">
              <button
                type="submit"
                className="popup__button-save popup__button-save_type_page-register"
              >
                {buttonText}
              </button>
              {isRegister && (
                <span className="popup__subtitle">
                  {subtitle}
                  <Link to="/sign-in" className="popup__link">
                    {linkWay}
                  </Link>
                </span>
              )}
              {!isRegister && (
                <span className="popup__subtitle">
                  {subtitle}
                  <Link to="/sign-up" className="popup__link">
                    {linkWay}
                  </Link>
                </span>
              )}
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
