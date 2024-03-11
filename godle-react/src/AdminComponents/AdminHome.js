import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { Collapse } from 'reactstrap';
import DeleteDeity from "./DeleteDeity";
import AddDeity from "./AddDeity";

const Admin = () => {
  const headingStyle = {
    textAlign: 'center',
  };

  const flexRow = {
    display: "flex",
    flexDirection: "row",
    marginleft: "20px",
  };

  const formsStyle ={
    marginTop: "100px",
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const handleNestedOptionClick = (option) => {
    setSelectedOption(option);
  };

  const clearSelectedOption = () => {
    setSelectedOption(null);
  };
  return (
    <div>
      <h1 style={headingStyle}>Admin Controller</h1>
      <div style={flexRow}>
        <div className="panel">
          <AdminPanel onNestedOptionClick={handleNestedOptionClick}></AdminPanel>
        </div>
        <div style = {formsStyle} classname ="forms"></div>
        <Collapse isOpen={selectedOption === "Delete Deity"}>
          <DeleteDeity></DeleteDeity>
        </Collapse>
        <Collapse isOpen={selectedOption === "Add Deity"}>
          <AddDeity></AddDeity>
        </Collapse>
      </div>
    </div>
  );
};

export default Admin;
