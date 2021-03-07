
export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }
  return (
    <li className="grid-elements__element" key={props._id}>
    <img className="grid-elements__img" src={props.link} alt={props.name} onClick ={handleClick}/>
      <button className="grid-elements__delete"></button>
      <div className="grid-elements__wrapper">
        <h2 className="grid-elements__title">{props.name}</h2>
        <div className="grid-elements__like-container">
          <button type="button" className="grid-elements__like"></button>
          <p className="grid-elements__like-number">{`${props.likes.length}`}</p>
        </div>
      </div>
    </li>
  )

}