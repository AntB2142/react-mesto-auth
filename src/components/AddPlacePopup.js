import PopupWithForm from './PopupWithForm';
import {useState, useEffect} from 'react';


function AddPlacePopup(props) {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleAddName(e) {
        setName(e.target.value);
    }

    function handleAddLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: name,
            link: link
        });
    }
  useEffect(() => {
        setName('');
        setLink('');
      }, [props.isOpen]);
    
      return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="addPopup"
            title="Новое место"
            button="Создать"
            onSubmit={handleSubmit}
        >
             <div className="popup__input-container">
                <input
                    id="pic-name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Название"
                    className="popup__input"
                    minLength="2"
                    maxLength="40"
                    required
                    onChange={handleAddName}
                />
                <span id="pic-name-error"></span>
            </div>
            <div className="popup__input-container">
                <input
                    id="pic-link"
                    type="text"
                    name="about"
                    value={link}
                    placeholder="Ссылка на картинку"
                    className="popup__input"
                    minLength="2"
                    maxLength="200"
                    required
                    onChange={handleAddLink}
                />
                <span id="pic-link-error"></span>
            </div>
        </PopupWithForm>
    );
}

export default AddPlacePopup;