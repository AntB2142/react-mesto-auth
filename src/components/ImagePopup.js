function ImagePopup(props) {
    return (
        <section className={`popup popup_${props.name} ${props.card.link.length > 0 && 'popup__opened'}`}>
        <div className="popup__full">
            <button type="button" className="popup__close" onClick={props.onClose}></button>
            <img alt={`Картинка ${props.card.name}`} src={`${props.card.link}`} className="popup__img"/>
            <p className="popup__full-title">{props.card.name}</p>
        </div>
    </section>
    );
  }
    
  export default ImagePopup;