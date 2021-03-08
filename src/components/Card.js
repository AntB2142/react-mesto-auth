
export default function Card(props) {
  function handleClick() {
    props.onCardClick({ name: props.card.name, link: props.card.link });
  }
  return (
    <li className="grid-elements__element">
    <img className="grid-elements__img" src={props.card.link} alt={`Картинка ${props.card.name}`} onClick ={handleClick}/>
      <button className="grid-elements__delete"></button>
      <div className="grid-elements__wrapper">
        <h2 className="grid-elements__title">{props.card.name}</h2>
        <div className="grid-elements__like-container">
          <button type="button" className="grid-elements__like"></button>
          <p className="grid-elements__like-number">{`${props.card.likes.length}`}</p>
        </div>
      </div>
    </li>
  )

}