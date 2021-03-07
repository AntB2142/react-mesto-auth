function ImagePopup(props) {
    return (
        <section className={props.isOpen ? `popup__opened popup popup_${props.name}` : `popup popup_${props.name}`}>
        <div className="popup__full">
            <button type="button" className="popup__close" onClick={props.onClose}></button>
            <img alt={props.card.alt} src={props.card.src} className="popup__img"/>
            <p className="popup__full-title">{props.card.name}</p>
        </div>
    </section>
    );
  }
    
  export default ImagePopup;