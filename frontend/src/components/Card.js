import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({card, onCardClick, onTrashClick, onCardLike}) {

  function handleCardClick() {
    onCardClick(card);
  }
  function handleDeleteCardPopupClick() {
    onTrashClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `photo-grid__delete-button ${
    isOwn ? "" : "photo-grid__delete-button_hidden"}`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `photo-grid__like ${
    isLiked ? "photo-grid__like_type_active" : ""}`;

  return (
     <li className="photo-grid__card">
        <button type="button" className="photo-grid__card_type_button-img" onClick={handleCardClick}>
          <img className="photo-grid__image" src={card.link} alt={card.name} />
        </button>
        <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteCardPopupClick}></button>
          <div className="photo-grid__text">
            <h2 className="photo-grid__title">{card.name}</h2>
            <div className="photo-grid__place-like">
              <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
              <p className="photo-grid__like-counter">{card.likes.length}</p>    
            </div>
          </div>
      </li>
  );
}
