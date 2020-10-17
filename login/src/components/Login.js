import React, { useState } from 'react';
import { login } from '../api/search';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userDetails, setUserDetails] = useState(null);

    console.log(userDetails);

    const onFormSubmit = (e) => {
        e.preventDefault();

        const user = login(username, password);
        
        if (user) {
            setUserDetails(user);
        }
    };

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Username (email)</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" name="email" placeholder="Email..." />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password..." />
                </div>
                <button className="ui button" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;