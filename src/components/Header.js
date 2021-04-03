import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../images/logo.svg';
function Header(props) {
    
    return (
        <header className="header">
        <img className="header__logo" src={logo} alt="Логотип"/>
        {props.loggedIn
                ? <ul className="header__links">
                   <li className="header__auth">{props.email}</li>
                   <li><button onClick={props.onSignOut} className="header__button">Выйти</button></li>
                  </ul>
                : <Link
                to={props.location.pathname === '/sign-in' ? '/sign-up' : '/sign-in'}
                className="header__auth">{props.location.pathname === '/sign-in' ? 'Регистрация' : 'Войти'}</Link>
        }
        </header>
    );
  }
  
  export default withRouter(Header);