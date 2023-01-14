import React, { useEffect} from 'react';

export default function ImagePopup({card, isOpen, onClose}) {
  
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
    <div className={`popup popup_type_big-image ${isOpen && "popup_open"}`}>
      <div className="popup__content popup__content_type_big-image">
        <img className="popup__img" src={card.link} alt={card.name} />
        <h3 className="popup__img-title">{card.name}</h3>
        <button type="button" className="popup__button-close popup__button-close_type_close-img" onClick={onClose}></button>
      </div>
    </div>
  );
}