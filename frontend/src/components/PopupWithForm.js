import React, { useEffect} from 'react';

export default function PopupWithForm({name, title, onClose, isOpen, children, buttonText, onSubmit}) {
    useEffect(() => {
        function handleEsc(evt) {
          if (evt.key === 'Escape') {
            onClose&& onClose()
          }
        }
        if (isOpen) {
          window.addEventListener('keydown', handleEsc);
    
          return () => {
            window.removeEventListener('keydown', handleEsc);
          };
        }
      },[isOpen, onClose]);
    return (
        <div className={`popup popup_type_${name} ${isOpen && "popup_open"}`}>
            <div className={`popup__content popup__content_type_form popup__content_type_${name}`}>
                <button type="button" className="popup__button-close popup__button-close_type_profile" onClick={onClose}></button>
                <form className={`popup__container popup__container_shift_${name}`} onSubmit={onSubmit}>
                    <h3 className={`popup__title popup__title_type_${name}`}>{title}</h3>
                    <fieldset className="popup__input-container">
                        <div className="popup__inputs">
                            {children}
                        </div>
                        <button type="submit" className="popup__button-save">{buttonText}</button>
                    </fieldset>                    
                </form>
            </div>
        </div>
    );
};

  