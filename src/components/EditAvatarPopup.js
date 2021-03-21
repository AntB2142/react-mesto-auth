import PopupWithForm from './PopupWithForm';
import {useRef, useState} from 'react';


export default function EditAvatarPopup(props) {

    const [avatar, setAvatar] = useState('');
    const avatarRef = useRef('');

    function handleAvatarChange(e) {
        setAvatar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatar
        });
        setAvatar('');
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="avatarPopup"
            title="Обновить аватар"
            button="Сохранить"
            onSubmit={handleSubmit}
        >
            <div className="popup__container">
                <input
                    id="avatar-link"
                    type="url"
                    name="avatar"
                    value={avatar}
                    placeholder="Название"
                    className="popup__input"
                    required
                    ref={avatarRef}
                    onChange={handleAvatarChange}
                />
                <span id="avatar-link-error"></span>
            </div>
        </PopupWithForm>
    );
}
