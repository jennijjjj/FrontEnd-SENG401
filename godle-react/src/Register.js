import React from 'react';

const Register = () => {
    return (
        <div className="register-form">
            <form action="/submit-your-form-endpoint" method="post">
                <div>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>test</p>
        </div>
    )
}

export default Register;