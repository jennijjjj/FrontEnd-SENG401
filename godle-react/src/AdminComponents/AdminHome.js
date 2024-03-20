import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { Collapse } from 'reactstrap';
import DeityCard from "./DeityCard";
import BrowseDatabase from "./BrowseDatabase";
import Deity from "../Deity";
import { getDeitiesData, getCalendarData, getForumData, getUsersData } from './ApiRequests/GetRequests';

const Admin = () => {
  const [selectedOption, setSelectedOption] = useState("Manage Deities");
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);


  const ControllerMap = {
    'Manage Deities': ['name', 'Deity'],
    'Manage Forum': ['title','Forum'],
    'Manage Calendar' : ['title','Event'],
    'Manage Users' : ['email','User'],
  };

  const headingStyle = {
    textAlign: 'center',
  };

  // useEffect(() => {
  //   console.log("Controller prop in BrowseDatabase:", selectedOption);
  //   fetchJsonData
  // }, [selectedOption]);

  // CSS style for the button
  const buttonStyle = {
    marginLeft: 'auto', // Push the button to the right
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setModalOpen(false);
    // fetchJsonData()
  };

  const addButtonClicked = () => {
    // No need to return here, just set the modalOpen state to true
    // This will cause the DeityCard component to be rendered
    setModalOpen(true);
  };





  // const fetchJsonData = async () => {
    
  //   if (selectedOption === 'Manage Deities'){
  //     getDeitiesData()
  //     .then(jsonString => {
  //       // Parse the JSON string to get the actual JSON object
  //       const jsonData = JSON.parse(jsonString);
  //       // return jsonData;
  //       // Now you can use jsonData as your JSON object
  //       setData(jsonData);
  //       // console.log(deitiesData);
        
  //     })
  //     .catch(error => {
  //       console.error('Error fetching deities data:', error);
  //     });
  //   }
  //   if (selectedOption === 'Manage Users'){
  //     getUsersData()
  //     .then(jsonString => {
  //       // Parse the JSON string to get the actual JSON object
  //       const jsonData = JSON.parse(jsonString);
  //       // return jsonData;
  //       // Now you can use jsonData as your JSON object
  //       setData(jsonData);
  //       // console.log(deitiesData);
        
  //     })
  //     .catch(error => {
  //       console.error('Error fetching deities data:', error);
  //     });
  //   // }if (selectedOption === 'Manage Forum'){
  //   //   setForumData(getForumData());
  //   // }
  //   // if (selectedOption === 'Manage Calendar'){
  //   //   setCalendarData(getCalendarData());
  //   }
  // };


  return (
    <div>
      <h1 className="titleText" style={headingStyle}><strong>🛠 Admin Controller</strong></h1>
      <div style={{ display: 'flex' }}>
      {selectedOption !== "Manage Users" && (
        <button className='adminbutton' style={buttonStyle} onClick={() => addButtonClicked()}>{`Add ${ControllerMap[selectedOption][1]}`} </button>
      )}
    </div>
      <div style={{ width: "100px" }} className="panel">
        <AdminPanel onOptionClick={handleOptionClick}></AdminPanel>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        {modalOpen && <DeityCard setModalOpen={setModalOpen}/>}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <BrowseDatabase selectedOption={selectedOption} searchVar={ControllerMap[selectedOption][0]} controller={ControllerMap[selectedOption][1]} data={data} madalOpen={modalOpen}></BrowseDatabase>
      </div>
      
    </div>
  );
}

export default Admin;
