import { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleRegisterSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        props.onRegister(password, email);
        setEmail('');
        setPassword('');
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <section className="login">
            <h1 className="login__title">Регистрация</h1>
            <form className="login__form">
                <input 
                  type="email" 
                  id="email" 
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
                <button onClick={handleRegisterSubmit} className="login__button login__button_register">Зарегистрироваться</button>
            </form>
            <Link to="/sign-in" className="login__subtext">Уже зарегистрированы? Войти</Link>
           
        </section>
    )
}

export default Register;