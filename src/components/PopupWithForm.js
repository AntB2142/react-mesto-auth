function PopupWithForm(props) {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen && "popup__opened"}`}>
      <div className="popup__container">
      <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
        <div className="popup__input-container">
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__submit" type="submit">{props.button}</button>
        </div>
        <button type="button" className="popup__close" onClick={props.onClose}></button>
      </form>
      </div>
    </section>
  )
}

export default PopupWithForm;