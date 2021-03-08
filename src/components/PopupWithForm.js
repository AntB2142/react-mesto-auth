function PopupWithForm(props) {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen && "popup__opened"}`}>
      <div className="popup__container">
      <form action="#" className={`popup__form popup__form_${props.name}`} name={`${props.name}`} noValidate>
        <div className="popup__input-container">
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className={`popup__submit popup__submit_${props.name}`} type="submit">{`${props.submit}`}</button>
        </div>
        <button type="button" className={`popup__close popup__close_${props.name}`} onClick={props.onClose}></button>
      </form>
      </div>
    </section>
  )
}

export default PopupWithForm;