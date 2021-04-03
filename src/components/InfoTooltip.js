import check from '../images/check.svg';
import error from '../images/error.svg';


const InfoTooltip = (props) => {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen && "popup__opened"}`}>
            <div className="popup-infotooltip">
                <button className="popup__close" onClick={props.onClose} />
                <img alt="Успешно!" className="popup-infotooltip__checking" src={
                    props.successRegistration
                    ? check
                    : error}
                />
                <h2 className="popup-infotooltip__text">{
                    props.successRegistration
                    ? 'Вы успешно зарегистрировались!'
                    : 'Что-то пошло не так! Попробуйте ещё раз.'}
                </h2>
            </div>
        </div>

    )
}

export default InfoTooltip;