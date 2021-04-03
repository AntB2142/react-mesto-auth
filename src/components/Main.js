import React from 'react'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import Card from './Card.js';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
        <main className="content">
        <section className="profile">
            <div className="profile__container-avatar">
                <img className="profile__avatar"  src={currentUser.avatar} alt="Аватар"/>
                <button className="profile__edit-avatar" onClick={props.onEditAvatar}></button>
            </div>
            
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button type="button" className="profile__edit-button"  onClick={props.onEditProfile}> </button>
                <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={props.onAddPlace}> </button>
        </section>
        <section className="elements">

        <ul className="grid-elements">
            {props.cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                    ))}
            </ul>
        </section>      
    </main>
    
    </>
    );
  }
  
  export default Main;