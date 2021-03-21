
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


export default function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = isOwn ? 'grid-elements__delete' : 'grid-elements__delete_hidden';
    const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
    const cardLikeButtonClassName = isLiked
        ? 'grid-elements__like_active'
        : 'grid-elements__like';

    function handleClick() {
        props.onCardClick({name: props.card.name, link: props.card.link});
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }
  
  
  return (
    <li className="grid-elements__element">
    <img className="grid-elements__img" 
    src={props.card.link} 
    alt={`Картинка ${props.card.name}`} 
    onClick ={handleClick}/>
      <button
                className={cardDeleteButtonClassName}
                type="button"
                onClick={handleDeleteClick}
            />
      <div className="grid-elements__wrapper">
        <h2 className="grid-elements__title">{props.card.name}</h2>
        <div className="grid-elements__like-container">
        <button
                        className={cardLikeButtonClassName}
                        type="button"
                        onClick={handleLikeClick}
                    />
          <p className="grid-elements__like-number">{`${props.card.likes.length}`}</p>
        </div>
      </div>
    </li>
  );
}