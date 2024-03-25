import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const Slider = ({ title, onChange }) => {
  const [infoText, setInfoText] = useState("Slide for Position");

  const getInfoText = (value) => {
    const contentMapping = {
      "Zealousness": {
        "-4": "Yeah, yeah, do whatever you want, I’m busy",
        "-3": "Just stay out of my way",
        "-2": "I'm OK with other people having their faith",
        "-1": "Not my business",
        "0": "Meh. I haven’t an opinion",
        "1": "Religion is good",
        "2": "My faith is better than yours",
        "3": "Deus vult!",
        "4": "Caedite eos. Novit enim Dominus qui sunt eius."
      },
      "Mysticism": {
        "-4": "Delusions must be eradicated",
        "-3": "Science above all",
        "-2": "I mean really, what is wrong with you people",
        "-1": "Can’t we be reasonable?",
        "0": "Eh… Say what again?",
        "1": "A little spiritualism won’t do us harm",
        "2": "Religion is good",
        "3": "Faith is salvation",
        "4": "Embrace the occult!"
      },
      "Squeamishness": {
        "-4": "Dirt. My favorite cocktail. I think there is some puss in it. Yummy.",
        "-3": "I think my preferences are getting… problematic",
        "-2": "I want to live on a farm",
        "-1": "A little dirt won’t do any harm",
        "0": "Just wash your hands",
        "1": "Hygiene is good",
        "2": "I own a CBRN rated gas mask",
        "3": "I live in a plastic box",
        "4": "UV irradiation and disinfectant poisoning are a little price to pay"
      },
      "Technology": {
        "-4": "Return to monke",
        "-3": "Shut it all down",
        "-2": "Preservation takes priority",
        "-1": "Nature must be protected",
        "0": "Industry and nature can coexist",
        "1": "Comfort comes at a price",
        "2": "Production takes priority",
        "3": "Solution to pollution is dilution",
        "4": "Burn it all! Make way for factories."
      },
      "Erudition": {
        "-4": "Brain on vacation, no forwarding address",
        "-3": "Sitting in a lecture would send me to the hospital",
        "-2": "Information allergic, with a side of ignorance",
        "-1": "I can only microdose knowledge",
        "0": "Average awareness",
        "1": "I seek knowledge",
        "2": "Curious and inspired to learn about most things",
        "3": "Mind’s gym: lifting facts and dropping knowledge.",
        "4": "My wisdom makes me ascend"
      },
      "Organization": {
        "-4": "The natural state of the world is chaos",
        "-3": "A person’s loyalty is only to themselves",
        "-2": "Laws are just suggestions",
        "-1": "Always down for some slightly illegal fun",
        "0": "Life is both order and chaos",
        "1": "The average concerned citizen",
        "2": "Goodie two shoes",
        "3": "You really like the military and their uniforms",
        "4": "Order and control at any cost"
      },
      "Morality": {
        "-4": "My desires are selfish at the cost of others",
        "-3": "I like to rebel against society",
        "-2": "The bad guys are always just misunderstood",
        "-1": "A mild menace to society",
        "0": "I possess traits/habits that are both good and evil",
        "1": "Not perfect but I try",
        "2": "People would say I'm pleasant to be around",
        "3": "Trying my best to be a good person",
        "4": "I would never even dare jaywalk"
      },
      "Zen": {
        "-4": "Always either regretting the past or worrying about the future",
        "-3": "Getting lost in the sauce",
        "-2": "My friends say I’m an anxious person",
        "-1": "Just a little on edge all the time",
        "0": "Calm, until there’s trouble in paradise",
        "1": "Can keep most of my cool when things go awry",
        "2": "After hours are when I'm chill",
        "3": "Hippie vegan who does yoga",
        "4": "Have found inner peace, life could not be better"
      },
      "Aggression": {
        "-4": "I’m packing my bags. Tibet calls!",
        "-3": "Pacifism is right",
        "-2": "Diplomacy will prevail",
        "-1": "Can’t we just talk about it?",
        "0": "One must carefully weigh his options",
        "1": "Stay out of my way",
        "2": "Plata o plomo",
        "3": "Where did I leave my guns?",
        "4": "Blood for the blood God!"
      },
      "Grandeur": {
        "-4": "Lover of brutalist architecture",
        "-3": "I am a sad beige mom",
        "-2": "I am being suffocated by mediocrity",
        "-1": "Tends to blend into the background",
        "0": "Neither loud nor quiet",
        "1": "Self-expression is important",
        "2": "Sometimes people think I am too loud",
        "3": "Everything I own is bedazzled and with my god's name on it",
        "4": "I want a Notre-Dame on every street corner"
      },
      "Temperament": {
        "-4": "Obsession is my middle name",
        "-3": "Alot very bad habits",
        "-2": "I prefer lots of repetition and structure in life",
        "-1": "I chew on my fingernails sometimes",
        "0": "Pretty normal human",
        "1": "Look a squirrel!",
        "2": "Everything excites me too much",
        "3": "It's hard to control myself",
        "4": "Nothing but primal urges"
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
          </div>

        )}

        min={-4}
        max={4}
        step={0.05}
        onChange={handleValueChange}
      />
      <div>
        <p style={{ marginBottom: "50px" }}>{infoText}</p>
      </div>
    </div>
  );
};

export default Slider;
