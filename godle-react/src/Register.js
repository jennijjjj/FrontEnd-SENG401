import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleRegister = () => {
        alert("example register");
        // after
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="register-form">
            <form onSubmit={handleRegister} method="post">
                <div className="register-input">
                    <label htmlFor="username">Username: &nbsp;</label>
                    <input style={{ backgroundColor: "#61dafb", outlineColor: "#4e0c5f" }} type="text" id="username" name="username" required onChange={handleUsernameChange} value={username} />
                </div>
                <div className="register-input">
                    <label htmlFor="email">Email: &nbsp;</label>
                    <input style={{ backgroundColor: "#61dafb" }} type="email" id="email" name="email" required onChange={handleEmailChange} value={email} />
                </div>
                <div className="register-input">
                    <label htmlFor="password">Password: &nbsp;</label>
                    <input style={{ backgroundColor: "#61dafb" }} type="password" id="password" name="password" required onChange={handlePasswordChange} value={password} />
                </div>
                <button className="register-button" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;