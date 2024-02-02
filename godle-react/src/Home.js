import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Slider from './Slider';


const Home = (props) => {
    const [termsChecked, setTermsChecked] = useState(false);

    const handleTermsChange = () => {
        setTermsChecked(!termsChecked);
    };

    const handleTermsClick = () => {
        // Open the Google Docs link in a popup window
        window.open(
            "https://docs.google.com/document/d/1qPbP5rT9Azi8CMUa8ZeLvxgr_Nw907LhM239D2zolsE/edit?usp=sharing",
            "_blank",
            "width=600,height=600"
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (termsChecked) {
            console.log("Form submitted!");
            // Add your form submission logic here
        } else {
            alert("Please accept the terms and services before submitting.");
        }
    };
    return (<>
        <div className={"titleContainer"}>
            <div>Godle</div>
        </div>
        <form onSubmit={handleSubmit} className="slider-form">
        <div>
            <Slider title="Zealousness" />
            <Slider title="Mysticism"/>
            <Slider title="Squeamishness"/>
            <Slider title="Technology"/>
            <Slider title="Erudition"/>
            <Slider title="Organization "/>
            <Slider title="Morality"/>
            <Slider title="Zen"/>
            <Slider title="Aggression"/>
            <Slider title="Grandeur"/>
            <Slider title="Temperament"/>
        </div>
        <div className="terms-container">
            <label>
                <input
                    type="checkbox"
                    checked={termsChecked}
                    onChange={handleTermsChange}
                />
                I accept the{" "}
                <span
                    onClick={handleTermsClick}
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    Terms and Services
                </span>
            </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
        </form>
    </>
    )

}

export default Home