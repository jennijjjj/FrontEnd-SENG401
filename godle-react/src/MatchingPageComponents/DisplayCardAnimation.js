  const leftColumnStyles = {
    borderRadius: 15,
    width: "264px",
    height: "460px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    textAlign: "center", // Center text
    paddingBottom: "10px", // Add some padding to separate the line from content
    background:"white",
    color:"black"
  };
  
  const cardStyles = {
    borderRadius: 15,
    background: "transparent",
    width: "264px",
    height: "460px",
    cursor: "pointer",
    userSelect: "none",
    display: "flex",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between", 
    color: "white",
  };
  const imageStyles = {
    maxWidth: "238px",
    height: "400px",
    objectFit: "cover",
    border: "2px solid black"
  };
  
  // ...
  
  const DisplayCardAnimation = ({ zIndex = 0, name, image,}) => (
    <div className="SwipeableCard" style={{ ...cardStyles, zIndex }}>
    <div style={leftColumnStyles}>
      <h2>{name}</h2>
      <img src={image} alt={`${name}'s Photo`} style={imageStyles} />
    </div>
  </div>
  );
  
  export default DisplayCardAnimation;