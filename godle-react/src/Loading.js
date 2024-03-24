import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsRotated(prevIsRotated => !prevIsRotated); // Toggle the rotation state
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    zIndex: 9999,
  };

  const imageAndTextStyle = {
    position: 'relative', // Parent container for text and image, positioned relatively
    display: 'flex', // Use flexbox for centering
    justifyContent: 'center', // Center horizontally in the flex container
    alignItems: 'center', // Center vertically in the flex container
    flexDirection: 'column', // Stack children vertically
  };

  const textStyle = {
    position: 'absolute', // Position the text absolutely to overlay it on the image
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Offset the position correctly
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    transition: 'transform 0.5s ease',
    transform: `rotate(${isRotated ? 180 : 0}deg)`,
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    borderRadius: '15px',
  };

  return (
    <div style={containerStyle}>
      <div style={imageAndTextStyle}>
        <img
          src={`${process.env.PUBLIC_URL}/Images/loading.png`}
          alt="Loading..."
          style={imageStyle}
        />
        <div style={textStyle}>...loading...</div>
      </div>
    </div>
  );
};

export default Loading;
