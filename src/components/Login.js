import { useState } from 'react';
import InfoTooltip from './InfoTooltip';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        } else {
            props.onLogin(password, email);
            setEmail('');
            setPassword('');
        }
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }
    return (
        <section className="login">
            <h1 className="login__title">Вход</h1>
            <form className="login__form">
                <input 
                  type="email" 
                  onChange={handleEmail} 
                  placeholder="Email" 
                  className="login__input" 
                />
                <input 
                  type="password" 
                  onChange={handlePassword} 
                  placeholder="Пароль" 
                  className="login__input" 
                />
                <button onClick={handleLoginSubmit} className="login__button">Войти</button>
            </form>
            <InfoTooltip 
               isOpen={props.isOpen} 
               successRegistration={props.successRegistration} 
               onClose={props.onClose} 
            />
        </section>
    )
}

export default Login;