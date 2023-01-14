import logo from "../images/logo.svg"
import React from "react";
import { Link, useLocation } from 'react-router-dom';


export default function Header({ loggedIn, loggedOut, email }) {
const location = useLocation();
const titleLink = (location.pathname === '/sign-up') ? 'Войти' : 'Регистрация';
const changePath = (location.pathname === '/sign-up') ? 'sign-in' : 'sign-up';

    return (
        <header className="header">
            <img src={logo} alt="логотип Mesto Russia" className="header__logo"/>
            <div className="header__info">
                {loggedIn && <h2 className="header__email">{email}</h2>}
                {loggedIn && <button className="header__button" onClick={loggedOut}>Выйти</button>}
                {!loggedIn && <Link to={changePath} className="popup__link header__link">{titleLink}</Link>}
            </div>
        </header>
    )
}