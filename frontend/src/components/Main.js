import React from "react";
import Card from "./Card.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Main({onEditProfile, onAddPlace, onEditAvatar, handleCardClick, handleDeleteCardPopupClick, cards, handleCardLike}) {
    const currentUser = React.useContext(CurrentUserContext);
    
    return (
        <main className="content">
          <section className="profile">
            <div className="profile__info">
                <div className="profile__image">
                    <button type="button" className="profile__image-button" onClick={onEditAvatar}></button>
                    <img src={currentUser.avatar} alt="аватар профиля" className="profile__avatar" />    
                </div>
                <div className="profile__autor">
                    <div className="profile__name">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button type="button" className="profile__button profile__button_type_edit" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
            </div>
            <button type="button" className="profile__button profile__button_type_add" onClick={onAddPlace}></button>
          </section>
          <section className="photo-grid">
              <ul className="photo-grid__cards">
                {cards.map((card) => (
                  <Card key={card._id} card={card} onCardClick={handleCardClick} onTrashClick={handleDeleteCardPopupClick} onCardLike={handleCardLike}/>
                ))}
              </ul>
            </section>
        </main>
    );
}
