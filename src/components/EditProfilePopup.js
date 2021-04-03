import PopupWithForm from './PopupWithForm';
import {useState, useEffect} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';


function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleAboutChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="editPopup"
            title="Редактировать профиль"
            button="Сохранить"
            onSubmit={handleSubmit}
        >
            <div className="popup__container">
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Имя"
                    className="popup__input"
                    minLength="2"
                    maxLength="40"
                    required
                    onChange={handleNameChange}
                />
                <span id="name-error"></span>
            </div>
            <div className="popup__input-container">
                <input
                    id="status"
                    type="text"
                    name="about"
                    value={description}
                    placeholder="Статус"
                    className="popup__input"
                    minLength="2"
                    maxLength="200"
                    required
                    onChange={handleAboutChange}
                />
                <span id="status-error"></span>
            </div>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
