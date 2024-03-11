import { Collapse } from 'reactstrap';
import React, { useState } from "react";
import Slider from '../Slider';
const AddDeity = () => {
    const [sliderValues, setSliderValues] = useState({
        Zealousness: 0,
        Mysticism: 0,
        Squeamishness: 0,
        Technology: 0,
        Erudition: 0,
        Organization: 0,
        Morality: 0,
        Zen: 0,
        Aggression: 0,
        Grandeur: 0,
        Temperament: 0,
    });
  const headingStyle = {
    textAlign: 'center',
  };

  const flexcolumn = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px", // Corrected property name to marginLeft
    alignItems: "center",
    textAlign: "center",
    gap: "20px",
    position: "absolute",
    top: "30%",
    paddingleft: "40%"
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "10px", // Adjust spacing between label and input
  };
  const handleSliderChange = (title, value) => {
    setSliderValues((prevValues) => ({
        ...prevValues,
        [title]: value,
    }));
};


  return (
    <form style={flexcolumn}>
      <div style={labelStyle}>
        <label htmlFor="name">Deity Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div style={labelStyle}>
        <label htmlFor="name">Source Universe</label>
        <input type="text" id="name" name="name" />
      </div>
      <div style={labelStyle}>
        <label htmlFor="name">Deity Description</label>
        <input type="text" id="name" name="name" />
      </div>
      <div style={labelStyle}>
        <label htmlFor="name">Image</label>
        <input type="text" id="name" name="name" />
      </div>
      <div style={labelStyle}>
        <label htmlFor="name">Image</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
            <Slider title="Zealousness" onChange={(value) => handleSliderChange("Zealousness", value)} />
            <Slider title="Mysticism" onChange={(value) => handleSliderChange("Mysticism", value)} />
            <Slider title="Squeamishness" onChange={(value) => handleSliderChange("Squeamishness", value)} />
            <Slider title="Technology" onChange={(value) => handleSliderChange("Technology", value)} />
            <Slider title="Erudition" onChange={(value) => handleSliderChange("Erudition", value)} />
            <Slider title="Organization" onChange={(value) => handleSliderChange("Organization", value)} />
            <Slider title="Morality" onChange={(value) => handleSliderChange("Morality", value)} />
            <Slider title="Zen" onChange={(value) => handleSliderChange("Zen", value)} />
            <Slider title="Aggression" onChange={(value) => handleSliderChange("Aggression", value)} />
            <Slider title="Grandeur" onChange={(value) => handleSliderChange("Grandeur", value)} />
            <Slider title="Temperament" onChange={(value) => handleSliderChange("Temperament", value)} />
        </div>
      <input type="button" value="Delete Deity" />
    </form>
  );
};

export default AddDeity;
