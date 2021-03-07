import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  
  
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleCardClick() {
    setSelectedCard({
      src: this.link,
      name: this.name,
      alt: `Картинка ${this.name}`
    });
  }
  
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard("");
    
  }
  
    return (

      <div className="App">
        
   <Header />
   <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
   <Footer />
   
    {isEditAvatarPopupOpen ?
            <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="load-avatar" title="Обновить аватар" submit="Сохранить" children={
              <>
                <div className="popup__input-container">
                  <input required id="avatar-link" type="url" className="popup__input" name="link" placeholder="Название" />
                  <span id="avatar-link-error" className="popup__error"></span>
                </div>
              </>
            }/>
          : ''}
    
    {isEditProfilePopupOpen ? 
            <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="edit-profile" title="Редактировать профиль" submit="Сохранить" children={
              <>
                <div className="popup__input-container">
                  <input required id="name" className="popup__input" name="name" placeholder="Имя" minLength="2" maxLength="40" />
                  <span id="name-error" className="popup__error"></span>
                </div>
                <div className="popup__input-container">
                  <input required id="status" className="popup__input" name="about" placeholder="Статус" minLength="2" maxLength="200" />
                  <span id="status-error" className="popup__error"></span>
                </div>
              </>
            }/>
          : ''}

    {isAddPlacePopupOpen ? 
            <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="add-card" title="Новое место" submit="Создать" children={
              <>
                <div className="popup__input-container">
                  <input required id="pic-name" className="popup__input" name="name" placeholder="Название" minLength="2" maxLength="30" />
                  <span id="pic-name-error" className="popup__error"></span>
                </div>
                <div className="popup__input-container">
                  <input required id="pic-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" />
                  <span id="pic-link-error" className="popup__error"></span>
                </div>
              </>
            }/>
          : ''}
    <PopupWithForm isOpen={false} onClose={closeAllPopups} name="confirm" title="Вы уверены?" submit="Да" />

    {(selectedCard !== '') ?
            <ImagePopup card={selectedCard} isOpen={true} onClose={closeAllPopups} name="full-card" />
          : ''}
 
    </div>

  );
}

export default App;
