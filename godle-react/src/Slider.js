import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const Slider = ({ title, onChange }) => {

  const [discription, setDescription] = useState("Description");
  const [infoText, setInfoText] = useState("Your information text for position 0");

  const getInfoText = (value) => {
    const contentMapping = {
      '-4': "Your information text for position -4",
      '-2': "Your information text for position -2",
      '0': "Your information text for position 0",
      '2': "Your information text for position 2",
      '4': "Your information text for position 4"
    };

    // Find the closest key in the contentMapping based on the current value
    const closestValue = Object.keys(contentMapping).reduce((prev, curr) => (
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    ));

    return contentMapping[closestValue] || "Your information text for position 0";
  };

  const handleValueChange = (value) => {
    setInfoText(getInfoText(value));
    
    const contentMapping = {
      '-4': -4,
      '-2': -2,
      '0': 0,
      '2': 2,
      '4': 4
    };

    const closestValue = Object.keys(contentMapping).reduce((prev, curr) => (
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    ));

      onChange(closestValue);
  };

  return (
    <div>
      <h3 className="slider-title" data-info={discription}>{title}</h3>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => (
          <div
            {...props}
            className="example-thumb"
            data-info={infoText}
          >
          </div>
          
        )}
        
        min={-4}
        max={4}
        step={0.1}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default Slider;
