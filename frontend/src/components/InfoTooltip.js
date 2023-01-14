import done from "../images/Done.svg";
import error from "../images/False.svg";

export default function InfoTooltip({ isOpen, onClose, isSuccess }) {
  const img = isSuccess ? done : error;
  const title = isSuccess
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте ещё раз.";
  return (
    <main className="content">
      <div className={`popup ${isOpen && "popup_open"}`}>
        <div className="popup__content popup__content_type_form popup__content_type_confirm">
          <button
            type="button"
            className="popup__button-close"
            onClick={onClose}
          ></button>
          <div className="popup__container">
            <img src={img} className="popup__icon" />
            <h3 className={`popup__title`}>{title}</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
