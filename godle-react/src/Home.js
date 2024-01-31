import React from "react";
// import { useNavigate } from "react-router-dom";
import Slider from './Slider';


const Home = (props) => {
    const handleSubmit = () => {
        console.log("Form submitted!");
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
        <button type="submit" className="submit-button">Submit</button>
        </form>
    </>
    )

}

export default Home