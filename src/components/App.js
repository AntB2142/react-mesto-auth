import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleCardClick(result) {
    setSelectedCard(result);
  }
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
    
  }
  
    return (

      <div className="App">
        
   <Header />
   <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
   <Footer />
   
            <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="load-avatar" title="Обновить аватар" submit="Сохранить" >
                <div className="popup__input-container">
                  <input required id="avatar-link" type="url" className="popup__input" name="link" placeholder="Название" />
                  <span id="avatar-link-error" className="popup__error"></span>
                </div>
                </PopupWithForm>

            <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="edit-profile" title="Редактировать профиль" submit="Сохранить">
                <div className="popup__input-container">
                  <input required id="name" className="popup__input" name="name" placeholder="Имя" minLength="2" maxLength="40" />
                  <span id="name-error" className="popup__error"></span>
                </div>
                <div className="popup__input-container">
                  <input required id="status" className="popup__input" name="about" placeholder="Статус" minLength="2" maxLength="200" />
                  <span id="status-error" className="popup__error"></span>
                </div>
                </PopupWithForm>

            <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="add-card" title="Новое место" submit="Создать">
                <div className="popup__input-container">
                  <input required id="pic-name" className="popup__input" name="name" placeholder="Название" minLength="2" maxLength="30" />
                  <span id="pic-name-error" className="popup__error"></span>
                </div>
                <div className="popup__input-container">
                  <input required id="pic-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" />
                  <span id="pic-link-error" className="popup__error"></span>
                </div>
                </PopupWithForm>
          
    <PopupWithForm isOpen={false} onClose={closeAllPopups} name="confirm" title="Вы уверены?" submit="Да" />

    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    
    </div>

  );
}

export default App;
