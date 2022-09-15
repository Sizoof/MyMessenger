import React from "react";
import style from './Auth.module.css'
import { useLocation, NavLink } from 'react-router-dom';
import {REGISTRATION_ROUTE} from '../../routes'

const Auth = () => {

    const location = useLocation();
    const pathname = location.pathname

    return(
        <div className={style.auth}>
            <div className={style.authForm}>
                <h2 className={style.title}>{pathname === REGISTRATION_ROUTE? 'Регистрация' : 'Авторизация' }</h2>
                <div className={style.inputs}>
                    <input className={style.input} type="text" placeholder="login"/>
                    <input className={style.input} type="text" placeholder="password"/>
                </div>
                <div className={style.buttons}>
                    <h3 className={style.swapAuth}>
                        {pathname === REGISTRATION_ROUTE? 'Есть аккаунт? ': 'Нет аккаунта? '}
                        {pathname === REGISTRATION_ROUTE? <NavLink to={'/login'}>Авторизуйтесь</NavLink>:<NavLink to={'/registration'}>Зарегистрируйтесь</NavLink>}</h3>
                    <button className={style.button}>
                        {pathname === REGISTRATION_ROUTE? 'Регистрация': 'Вход'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth