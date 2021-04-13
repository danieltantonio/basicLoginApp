import React, { useState } from 'react';
import './App.css';

const initLogin = {
    email: '',
    passwd: ''
}

const App = () => {
    const [login, setLogin] = useState(initLogin);

    const formChange = e => {
        const {name, value} = e.target;
        setLogin({ ...login, [name]: value });
    }

    const sub = e => {
        e.preventDefault();
        alert('it works');
    }

    return(
        <div>
            <h1 id="login-header">Login</h1>
            <form onSubmit={sub}>
                <input type="email" name="email" value={login.email} onChange={formChange} placeholder="Email"></input>
                <input type="password" name ="passwd" value={login.passwd} onChange={formChange} placeholder="Password"></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default App;