import React from 'react'
import {api} from '../utils/api.js'
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState();

  const [userDescription, setUserDescription] = React.useState();

  const [userAvatar, setUserAvatar] = React.useState();

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar)
      })
      .catch((err) => { console.log(err) })
    api.getInitialCards()
      .then((result) => {
        setCards(result)
      })
      .catch((err) => console.log(err))
  }, [])


  
    return (
        <main className="content">
        <section className="profile">
            <div className="profile__container-avatar">
                <img className="profile__avatar" src={`${userAvatar}`} alt="Аватар"/>
                <button className="profile__edit-avatar" onClick={props.onEditAvatar}></button>
            </div>
            
            <div className="profile__info">
                <h1 className="profile__title">{`${userName}`}</h1>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile}> </button>

                <p className="profile__subtitle">{`${userDescription}`}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">

            <ul className="grid-elements">
            {cards.map((card) => {
             return <Card onCardClick={props.onCardClick} key={card._id} card={card}/>
          })}
            </ul>

        </section>
       
    </main>
    );
  }
  
  export default Main;