import React, { useState, useEffect } from "react";
import './overlayDisplayCardAnimation.css';

const leftColumnStyles = {
  borderRadius: 15,
  width: "250px",
  height: "460px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingBottom: "10px",
  background: "rgba(255, 255, 255, 0.40)",
  color: "black",
  backgroundImage: "url('./images/cardBack.png')", // Correct way to reference an image
  backgroundSize: 'cover', // Ensure the background covers the entire element
  backgroundRepeat: 'no-repeat', // Do not repeat the background image
  backgroundPosition: 'center', // Center the background image
};

const cardStyles = {
  borderRadius: 15,
  width: "250px",
  height: "460px",
  cursor: "pointer",
  userSelect: "none",
  perspective: "1000px", // Required for the 3D effect
};

const cardInnerStyles = {
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transition: "transform 0.5s",
};

const cardFrontStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
};

const cardBackStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
};

const imageStyles = {
  maxWidth: "220px",
  height: "400px",
  objectFit: "cover",
  border: "2px solid black",
};

const DisplayCardAnimation = ({ zIndex = 0, name, image }) => {
  const [isFlipped, setFlipped] = useState(false);

  useEffect(() => {
    const flipTimeout = setTimeout(() => {
      setFlipped(true);
    }, 1000); // Delay flip by 1 second

    return () => clearTimeout(flipTimeout);
  }, []);

  const handleFlip = () => {
    //setFlipped(!isFlipped); dont do anything
  };

  return (
    <div className="SwipeableCard" style={{ ...cardStyles, zIndex }} onClick={handleFlip}>
      <div style={{ ...cardInnerStyles, transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        <div style={{ ...cardFrontStyles, ...leftColumnStyles }} className="card-front-overlay">
          <h2>{name}</h2>
          <img src={image} alt={`${name}'s Photo`} style={imageStyles} />
        </div>
        <div style={{ ...cardBackStyles, ...leftColumnStyles }} className="card-back-overlay"/>
      </div>
    </div>
  );
};

export default DisplayCardAnimation;
