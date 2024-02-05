import React from 'react';

const Register = () => {

    const handleRegister = () => {
        alert("example register");
    }

    return (
        <div className="register-form">
            <form onSubmit={handleRegister} method="post">
                <div className="register-input">
                    <label for="username">Username: &nbsp;</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="register-input">
                    <label for="email">Email: &nbsp;</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="register-input">
                    <label for="password">Password: &nbsp;</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button className="register-button" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;