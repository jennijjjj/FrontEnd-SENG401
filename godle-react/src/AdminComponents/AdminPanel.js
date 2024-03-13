import React, { useState } from 'react';

const AdminPanel = ({ onOptionClick }) => {
  const [toggle, setToggle] = useState(true);

  const panelStyle = {
    width: '170px',
    color: 'white',
    marginTop: '10px',
    height: '100%',
  };

  const listItemStyle = {
    transition: 'background 0.3s', // Smooth transition on hover
    paddingBottom: '10px',
    paddingTop: '10px',
    display: 'flex', // Added flex display for the new structure
    flexDirection: 'column', // Display items in a column
    alignItems: 'flex-start', // Align items to the left
    paddingLeft: '2px',
    paddingRight: '2px',
  };

  const handleOptionClick = (option) => {
    console.log("panel", option);
    onOptionClick(option);
  };

  return (
    <>
      <div
        onClick={() => setToggle(!toggle)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span>{toggle ? '↴' : '→'}</span>
      </div>
      {toggle && (
        <div style={panelStyle}>
          <li
            className="list-group-item"
            style={listItemStyle}
            onClick={() => handleOptionClick("Manage Deities")} 
          >
            ⚚  Manage Deities
          </li>
          <li
            className="list-group-item"
            style={listItemStyle}
            onClick={() => handleOptionClick("Manage Deities")} 
          >
            ⚚  Manage Users
          </li>
          <li
            style={listItemStyle}
            className="list-group-item"
            onClick={() => handleOptionClick("Manage Forum")}
          >
            🗪  Manage Forum
          </li>
          <li
            style={listItemStyle}
            className="list-group-item"
            onClick={() => handleOptionClick("Manage Calendar")} 
          >
            🗒  Manage Calendar
          </li>
        </div>
      )}
    </>
  );
};

export default AdminPanel;
