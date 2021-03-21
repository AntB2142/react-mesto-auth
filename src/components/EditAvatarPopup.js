import PopupWithForm from './PopupWithForm';
import {useRef, useEffect} from 'react';


export default function EditAvatarPopup(props) {
    
    const avatarRef = useRef('');
    
    useEffect(() => {
        avatarRef.current.value = '';
      }, [props.isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
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
                    placeholder="Название"
                    className="popup__input"
                    required
                    ref={avatarRef}
                 />
                <span id="avatar-link-error"></span>
            </div>
        </PopupWithForm>
    );
}
