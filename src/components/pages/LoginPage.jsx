import React, { useState } from 'react'
import loginImg from '../../img/login.jpg'

const LoginPage = ({ handleSubmit }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="login-page-container">
            <img src={process.env.PUBLIC_URL + `/img/Logo.svg`} alt="" style={{ marginTop: '46px' }} />
            <div className="login-page-container__form">
                <p>Вход</p>
                <input
                    type="login"
                    name="login"
                    placeholder="Введите логин"
                    autoComplete="off"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => handleSubmit(login, password)} disabled={!login || !password}>
                    Войти
                </button>
            </div>
            <img src={loginImg} alt="" />
        </div>
    )
}

export default LoginPage
