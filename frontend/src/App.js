import React from 'react';
import './App.css';

const App = () => {
    return(
        <div>
            <h1 id="login-header">Login</h1>
            <form>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default App;