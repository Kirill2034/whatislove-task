import React, { useState } from 'react';
import './Login.modules.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const changeFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const changeLastName = (event) => {
        setLastName(event.target.value);
    }
    const login = () => {
        navigate('/products');
    }
    
    
    return (
        <div className="Login">
            <div className="container-login">
                <div className="form">
                    <h2>Login Form</h2>
                    <form>
                        <div className="inputBox">
                            <input type="text" value={firstName} onChange={changeFirstName} placeholder="Username"/>
                        </div>
                        <div className="inputBox">
                            <input type="password" value={lastName} onChange={changeLastName} placeholder="Password"/>
                        </div>
                        <div className="inputBox">
                            <button className="btn submit" onClick={login} disabled={firstName !== 'qwerty' || lastName !== '123456'}>Login</button>
                        </div>
                        <p>Forget Password ? <a href="#">Click Here</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export {Login}