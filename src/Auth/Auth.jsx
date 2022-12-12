import React, { useState } from 'react'
import background_img from "../SideBar/images/Background with Image.svg"
import "../SideBar/styles_module.css"
import { loginUser } from '../services/AuthService'
import { useNavigate } from "react-router"


const Auth = ({setToken}) => {
    
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onUserLogin = () => {
        loginUser(name, password)
        .then(response => {
        console.log(response)
        localStorage.setItem('token', response.auth_token);
        navigate('/task-manager/tasks')
        });
    }

    const redirectRegister = () => {
        navigate('/task-manager/register')
    }

    return(
        <div>
                <div className="registration-title">
                <div className="registration-title-title">Войти в аккаунт</div>
                <div className="registration-title-description">Удобный, простой и многофункциональный планировщик задач готовый помочь тебе отслеживать задачи</div>
                </div>
                <div className="registration-fields">
                <div className="reg-auth-fields">
                    <div className="fields-title">Имя пользователя</div>
                    <input className="fields-input" onChange={onNameChange} value={name}/>
                </div>
                <div className="reg-auth-fields">
                    <div className="fields-title">Пароль</div>
                    <input className="fields-input" onChange={onPasswordChange} value={password}/>
                </div>
                </div>
                <div className="button-create-account">
                    <button className="button-create-account-cta" 
                        onClick={onUserLogin}>
                            Войти в аккаунт
                    </button>
                    <button className="button-create-account-forget-password" 
                        onClick={redirectRegister}>
                            Не зарегистрированы? Создать аккаунт
                    </button>
                </div>
                <div className="right-photo"><img src={background_img}/></div>
        </div>
    )
}

export default Auth
