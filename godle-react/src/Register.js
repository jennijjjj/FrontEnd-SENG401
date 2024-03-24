import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { usePopup } from './PopupContext'
import Loading from './Loading';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const { triggerPopup } = usePopup();
    const [loadingRegister, setLoadingRegister] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoadingRegister(true);

        // Prepare data to send in the request body
        const userData = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch('/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            // Handling non-ok responses explicitly
            if (!response.ok) {
                const errorText = await response.text(); // Assuming the error message is plain text
                if (response.status === 400) {
                    // Handle specific errors based on status code
                    triggerPopup('⚠️', 'Eternal Connection Detected', 'It seems your email is already intertwined with our sacred realm. Please log in or choose a new email to embark on your journey of spiritual discovery.')
                    throw new Error('The email provided already exists in the system. Please log in or use a new email to register. ' + errorText);
                } else {
                    // Handle generic error
                    throw new Error('Registration failed: ' + errorText);
                }
            }

            // If successful, display success message and navigate
            triggerPopup('🌟🎉', 'Congratulations Fellow Seeker!', 'Your registration has been successfully completed. Welcome to our sacred community of spiritual exploration and enlightenment. You may now login.')
            Navigate('/');

        } catch (error) {
            // Centralized error handling
            alert(error.message);
            console.error(error.message);
        } finally {
            setLoadingRegister(false);
            setEmail("");
            setPassword("");
        }
    };

    return (<>
        {loadingRegister ? (<Loading />) : (null)}
        <div className="register-form">
            <form onSubmit={handleRegister} method="post">
                <div className="register-input">
                    <label htmlFor="email">Email: &nbsp;</label>
                    <input style={{ backgroundColor: "rgba(255, 255, 255, 0.10)", outlineColor: "#2c0835", color: "white" }} type="email" id="emailregister" name="email" required onChange={handleEmailChange} value={email} />
                </div>
                <div className="register-input">
                    <label htmlFor="password">Password: &nbsp;</label>
                    <input style={{ backgroundColor: "rgba(255, 255, 255, 0.10)", outlineColor: "#2c0835", color: "white" }} type="password" id="passwordregister" name="password" required onChange={handlePasswordChange} value={password} />
                </div>
                <button className="register-button" type="submit">Register</button>
            </form>
        </div>
    </>)
}

export default Register;