import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { Collapse } from 'reactstrap';
import DeleteDeity from "./DeleteDeity";
import AddDeity from "./AddDeity";
import BrowseDatabase from "./BrowseDatabase";

const Admin = () => {
  const [selectedOption, setSelectedOption] = useState("Manage Deities");
  const headingStyle = {
    textAlign: 'center',
  };

  const flexRow = {
    display: "flex",
    flexDirection: "row",
    marginleft: "20px",
  };

  useEffect(() => {
    console.log("Controller prop in BrowseDatabase:", selectedOption);
  }, [selectedOption]);
  const formsStyle ={
    marginTop: "100px",
  }

  

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1 style={headingStyle}>Admin Controller</h1>
      <div className="panel">
      <AdminPanel onOptionClick={handleOptionClick}></AdminPanel>
    </div>
    <div style={formsStyle} className="forms"></div>

    <div>
      <BrowseDatabase controller={selectedOption}></BrowseDatabase>
    </div>
    </div>
  );
};

export default Admin;
