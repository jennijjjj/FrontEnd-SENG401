import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        try {
            // Prepare data to send in the request body
            const userData = {
                username: username,
                email: email,
                password: password
            };

            // Send HTTP POST request to register the user
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => {
                    if (response.ok) {
                        // If successful, display success message
                        console.log(response);
                        alert("User registered successfully!");
                        Navigate('/');
                    } else {
                        // If there's an error, display error message
                        alert('Registration failed:', response.statusText);
                        // Log the error
                        console.error('Registration failed:', response.statusText);
                    }
                })

        } catch (error) {
            // If there's an error, display error message
            alert("Error registering user. Please try again.");
            // Log the error
            console.error('Registration failed:', error);
        }

        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="register-form">
            <form onSubmit={handleRegister} method="post">
                <div className="register-input">
                    <label htmlFor="username">Username: &nbsp;</label>
                    <input style={{ backgroundColor: "rgba(255, 255, 255, 0.10)", outlineColor: "#2c0835" , color: "white" }} type="text" id="usernameregister" name="username" required onChange={handleUsernameChange} value={username} />
                </div>
                <div className="register-input">
                    <label htmlFor="email">Email: &nbsp;</label>
                    <input style={{ backgroundColor: "rgba(255, 255, 255, 0.10)", outlineColor: "#2c0835", color: "white" }} type="email" id="emailregister" name="email" required onChange={handleEmailChange} value={email} />
                </div>
                <div className="register-input">
                    <label htmlFor="password">Password: &nbsp;</label>
                    <input style={{ backgroundColor: "rgba(255, 255, 255, 0.10)", outlineColor: "#2c0835" , color: "white" }} type="password" id="passwordregister" name="password" required onChange={handlePasswordChange} value={password} />
                </div>
                <button className="register-button" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;