import React, { useState } from 'react';

const AdminPanel = ({ onNestedOptionClick }) => {
  const [toggle, setToggle] = useState(true);
  const [toggleDatabaseOptions, setToggleDatabaseOptions] = useState(false); // Initial state for the nested options
  const [toggleForumOptions, setToggleForumOptions] = useState(true);
  const [toggleCalendarOptions, setToggleCalendarOptions] = useState(true);

  const panelStyle = {
    width: '170px',
    color: 'white',
    marginTop: '10px',
    height: '100%',
  };

  const listItemStyle = {
    transition: 'background 0.3s', // Smooth transition on hover
    marginBottom: '10px',
    marginTop: '10px',
    display: 'flex', // Added flex display for the new structure
    flexDirection: 'column', // Display items in a column
    alignItems: 'flex-start', // Align items to the left
    marginLeft: '2px',
  };

  const nestedOptionStyle = {
    transition: 'background 0.3s', // Smooth transition on hover
    listStyleType: 'none',
 
  };
  const handleManageDatabaseClick = () => {
    console.log('Manage Database clicked!');
    setToggleDatabaseOptions(!toggleDatabaseOptions); // Toggle the state for the nested options
  };

  const handleManageForumClick = () => {
    console.log('Manage Forum clicked!');
    setToggleForumOptions(!toggleForumOptions); 
  };

  const handleManageCalendarClick = () => {
    console.log('Manage Calendar clicked!');
    setToggleCalendarOptions(!toggleCalendarOptions); 
  };

  const handleNestedOptionClick = (option) => {
    onNestedOptionClick(option);
    setToggleForumOptions(false); 
    setToggleCalendarOptions(false); 
    setToggleDatabaseOptions(false);
    setToggle(false);
  };
  const spanStyle = {
    textDecoration: 'none', // Initially, no underline
    cursor: 'pointer',
  };

  const handleHover = () => {
    spanStyle.textDecoration = 'underline';
  };

  const handleLeave = () => {
    spanStyle.textDecoration = 'none';
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
            style={listItemStyle}
            onClick={handleManageDatabaseClick}
          >
            <span className='adminUnderlineOption'>{toggleDatabaseOptions ? '⛃  Manage Database ↴' : '⛃  Manage Database →'}</span>
            {toggleDatabaseOptions && (
              <ul style={{ paddingLeft: '40px'}}>
                <li className="list-group-item" style={nestedOptionStyle}
                onClick={() => handleNestedOptionClick('Add Deity')}>
                  Add Deity
                </li>
                <li className="list-group-item" style={nestedOptionStyle}
                onClick={() => handleNestedOptionClick('Edit Deity')}>
                  Edit Deity
                </li>
                <li className="list-group-item" style={nestedOptionStyle}
                onClick={() => handleNestedOptionClick('Delete Deity')}>
                  Delete Deity
                </li>
                
                {/* Add more nested options as needed */}
              </ul>
            )}
          </li>
          <li
            style={listItemStyle}
            onClick={handleManageForumClick}
          >
            <span className='adminUnderlineOption'>{toggleForumOptions ? '🗪  Manage Forum ↴' : '🗪  Manage Forum →'}</span>
            {toggleForumOptions && (
              <ul style={{ paddingLeft: '40px' }}>
                <li className="list-group-item" style={nestedOptionStyle}>
                  Nested Option 1
                </li>
                <li className="list-group-item" style={nestedOptionStyle}>
                  Nested Option 2
                </li>
                {/* Add more nested options as needed */}
              </ul>
            )}
          </li>
          <li
            style={listItemStyle}
            onClick={handleManageCalendarClick}
          >
            <span className='adminUnderlineOption'>{toggleCalendarOptions ? '🗒  Manage Calendar ↴' : '🗒  Manage Calendar →'}</span>
            {toggleCalendarOptions && (
              <ul style={{ paddingLeft: '40px' }}>
                <li className="list-group-item" style={nestedOptionStyle}>
                  Nested Option 1
                </li>
                <li className="list-group-item" style={nestedOptionStyle}>
                  Nested Option 2
                </li>
                {/* Add more nested options as needed */}
              </ul>
            )}
          </li>
        </div>
      )}
    </>
  );
};

export default AdminPanel;
