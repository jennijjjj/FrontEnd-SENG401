import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { Collapse } from 'reactstrap';
import DeleteDeity from "./DeleteDeity";
import AddDeity from "./AddDeity";
import DeityCard from "./DeityCard";
import BrowseDatabase from "./BrowseDatabase";
import Deity from "../Deity";

const Admin = () => {
  const [selectedOption, setSelectedOption] = useState("Manage Deities");
  const [modalOpen, setModalOpen] = useState(false);


  const ControllerMap = {
    'Manage Deities': 'Deity',
    'Manage Forum': 'Forum',
    'Manage Calendar' : 'Event',
  };

  const headingStyle = {
    textAlign: 'center',
  };

  useEffect(() => {
    console.log("Controller prop in BrowseDatabase:", selectedOption);
  }, [selectedOption]);

  // CSS style for the button
  const buttonStyle = {
    marginLeft: 'auto', // Push the button to the right
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const addButtonClicked = () => {
    console.log("hi");
    // No need to return here, just set the modalOpen state to true
    // This will cause the DeityCard component to be rendered
    setModalOpen(true);
  };
  
  return (
    <div>
      <h1 className="titleText" style={headingStyle}><strong>Admin Controller</strong></h1>
      <div style={{ display: 'flex' }}>
        <button className='adminbutton' style={buttonStyle} onClick={() => addButtonClicked()}>{`Add ${ControllerMap[selectedOption]}`} </button>
      </div>
      <div style={{ width: "100px" }} className="panel">
        <AdminPanel onOptionClick={handleOptionClick}></AdminPanel>
      </div>
      {modalOpen && <DeityCard setModalOpen={setModalOpen}/>}
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <BrowseDatabase selectedOption={selectedOption} controller={ControllerMap[selectedOption]}></BrowseDatabase>
      </div>
      
    </div>
  );
}

export default Admin;
