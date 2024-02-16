import React from "react";

const cardStyles = {
  background: "whitesmoke",
  borderRadius: 3,
  width: "500px",
  height: "700px",
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  flexDirection: "column", 
  alignItems: "center",
  justifyContent: "center",
  color: "black",
};

const SwipeableCard = ({ zIndex = 0, name, image, aboutMe }) => (
  <div className="SwipeableCard" style={{ ...cardStyles, zIndex }}>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
    <img src={image} alt={`${name}'s Photo`} style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }} />
    </div>
    <div>
      <p>{aboutMe}</p>
    </div>
  </div>
);


export default SwipeableCard;
