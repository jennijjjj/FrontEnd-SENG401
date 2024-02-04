import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const Slider = ({ title }) => {
  const [infoText, setInfoText] = useState("default");

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

    return contentMapping[closestValue] || "Your default information text";
  };

  const handleValueChange = (value) => {
    setInfoText(getInfoText(value));
  };

  return (
    <div>
      <h3 className="slider-title">{title}</h3>
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
            {/* <div className="value-display">{state.valueNow}</div> */}
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
