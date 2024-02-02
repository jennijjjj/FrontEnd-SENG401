import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const Slider = ({ title }) => {
  const [infoText, setInfoText] = useState("default");

  // create if title = "" statements for different information text mappings
  // useeffect to render the default text depending on the title as well to display the information about that attribute
  const getInfoText = (value) => {
    const contentMapping = {
      '-4': "Your information text for hgyhl -4",
      '-2': "Your information text for position -2",
      '0': "Your information text for position 0",
      '2': "Your information text for position 2",
      '4': "Your information text for position 4"
  };

    return contentMapping[value.toString()] || "Your default information text";
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
        step={2}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default Slider;
