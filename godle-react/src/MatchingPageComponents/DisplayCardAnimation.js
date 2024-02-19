import React, { useState, useEffect } from "react";

const leftColumnStyles = {
  borderRadius: 15,
  width: "264px",
  height: "460px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingBottom: "10px",
  background: "white",
  color: "black",
};

const cardStyles = {
  borderRadius: 15,
  width: "264px",
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
  maxWidth: "238px",
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
    setFlipped(!isFlipped);
  };

  return (
    <div className="SwipeableCard" style={{ ...cardStyles, zIndex }} onClick={handleFlip}>
      <div style={{ ...cardInnerStyles, transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        <div style={{ ...cardFrontStyles, ...leftColumnStyles }}>
          <h2>{name}</h2>
          <img src={image} alt={`${name}'s Photo`} style={imageStyles} />
        </div>
        <div style={{ ...cardBackStyles, ...leftColumnStyles }}>
          <h2>back of card</h2>
        </div>
      </div>
    </div>
  );
};

export default DisplayCardAnimation;
