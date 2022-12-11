import React, { useState } from 'react'
import background_img from "../SideBar/images/Background with Image.svg"
import "../SideBar/styles_module.css"
import { createUser } from '../services/AuthService'
import { useNavigate } from "react-router"

const Register = () => {
    
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onMailChange = (event) => {
        setMail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onUserCreate = () => {
        createUser(name, mail, password)
        .then(response => {
        console.log(response)
        navigate('/task-manager/auth')
        });
    }

    return(
        
        <div>
                <div className="registration-title">
                <div className="registration-title-title">Сложное в легкое</div>
                <div className="registration-title-description">Удобный, простой и многофункциональный планировщик задач готовый помочь тебе отслеживать задачи</div>
                </div>
                <div className="registration-fields">
                <div className="reg-auth-fields">
                    <div className="fields-title">Имя пользователя</div>
                    <input className="fields-input" onChange={onNameChange} value={name}/>
                </div>
                <div className="reg-auth-fields">
                    <div className="fields-title">Электронный адрес</div>
                    <input className="fields-input" onChange={onMailChange} value={mail}/>
                </div>
                <div className="reg-auth-fields">
                    <div className="fields-title">Пароль</div>
                    <input className="fields-input" onChange={onPasswordChange} value={password}/>
                </div>
                </div>
                <div className="button-create-account">
                <button className="button-create-account-cta" 
                    onClick={onUserCreate}>
                        Создать аккаунт
                </button>
                <button className="button-create-account-forget-password">
                    Забыли пароль?
                </button>
            </div>
            <div className="right-photo"><img src={background_img}/></div>
        </div>
    )
}

export default Register
