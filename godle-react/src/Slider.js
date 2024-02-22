import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const Slider = ({ title, onChange }) => {

  const [discription, setDescription] = useState("Description");
  const [infoText, setInfoText] = useState("Slide for Position");

  const getInfoText = (value) => {
    const contentMapping = {
      "Zealousness": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      },
      "Mysticism": {
        '-4': "Placeholder for Mysticism -4",
        '-3': "Placeholder for Mysticism -3",
        '-2': "Placeholder for Mysticism -2",
        '-1': "Placeholder for Mysticism -1",
        '0': "Placeholder for Mysticism 0",
        '1': "Placeholder for Mysticism 1",
        '2': "Placeholder for Mysticism 2",
        '3': "Placeholder for Mysticism 3",
        '4': "Placeholder for Mysticism 4"
      },
      "Squeamishness": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      },
      "Technology": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      },
      "Erudition": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      },
      "Organization": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      },
      "Morality": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      },
      "Zen": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      },
      "Aggression": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      },
      "Grandeur": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      },
      "Temperament": {
        '-4': "Your information text for position -4",
        '-3': "Your information text for position -3",
        '-2': "Your information text for position -2",
        '-1': "Your information text for position -1",
        '0': "Your information text for position 0",
        '1': "Your information text for position 1",
        '2': "Your information text for position 2",
        '3': "Your information text for position 3",
        '4': "Your information text for position 4"
      }
    };

    // Find the closest key in the contentMapping based on the current value
    const closestValue = Object.keys(contentMapping[title]).reduce((prev, curr) => (
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    ));

    return contentMapping[title][closestValue] || contentMapping[title]['0'];
  };

  const handleValueChange = (value) => {
    setInfoText(getInfoText(value));

    onChange(value);
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
        step={0.05}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default Slider;
