import React from "react";

const leftColumnStyles = {
  borderRadius: 15,
  width: "160px", // Decreased width by 20%
  height: "268px", // Decreased height by 20%
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingBottom: "10px",
  background: "white",
  color: "black",
  border: "2px solid black",
};

const cardStyles = {
  borderRadius: 15,
  width: "160px", // Decreased width by 20%
  height: "268px", // Decreased height by 20%
  cursor: "pointer",
  userSelect: "none",
  // perspective: "1000px", // Required for the 3D effect
};

const cardInnerStyles = {
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transition: "transform 0.5s",
};

const cardFrontStyles = {
  position: "relative", // Change position to relative
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
  // maxWidth: "220px",
  width: "100%",
  height: "85%",
  objectFit: "cover",
  borderRadius: "15px 15px 0 0", // Top left and top right corners have border-radius

};

const nameStyles = {
  position: "absolute", // Position the name absolutely
  top: "90%", // Place it at the vertical center
  left: "50%", // Place it at the horizontal center
  transform: "translate(-50%, -50%)", // Center the name
  zIndex: 1, // Make sure it's above the image
  fontWeight: "bold", // Make the text bold
  maxWidth:"160px"
};


const SlideCard = ({ name, image }) => {
  return (
    <div className="SwipeableCard" style={{ ...cardStyles}} >
      <div style={{...cardInnerStyles}}>
        <div style={{ ...cardFrontStyles, ...leftColumnStyles }}>
          <img src={image} alt={`${name}'s Photo`} style={imageStyles} />
          <p style={nameStyles}>{name}</p> {/* Render name over the image */}
        </div>
        <div style={{ ...cardBackStyles, ...leftColumnStyles }}>
          <h2>back of card</h2>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
