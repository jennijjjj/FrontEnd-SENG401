import React, { useState, useEffect, useRef } from 'react';
import SearchList from './SearchList';
import { getDeitiesData, getCalendarData, getForumData, getUsersData } from './ApiRequests/GetRequests';

function BrowseDatabase({selectedOption, searchVar, controller, data}) {
//  const {userType, setFlightCode}=props
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const [deityData, setDeityData] = useState([]);
  const [userData, setUserData] = useState([]);

 // UNCOMMENT WHEN BACKEND GET REQUESTS ARE MADE

 const fetchJsonData = async () => {
  setDeityData([]);
  setUserData([]);  
  if (selectedOption === 'Manage Deities'){
    getDeitiesData()
    .then(jsonString => {
      // Parse the JSON string to get the actual JSON object
      const jsonData = JSON.parse(jsonString);
      // return jsonData;
      // Now you can use jsonData as your JSON object
      setDeityData(jsonData);
      // console.log(deitiesData);
      
    })
    .catch(error => {
      console.error('Error fetching deities data:', error);
    });
  }
  if (selectedOption === 'Manage Users'){
    getUsersData()
    .then(jsonString => {
      // Parse the JSON string to get the actual JSON object
      const jsonData = JSON.parse(jsonString);
      // return jsonData;
      // Now you can use jsonData as your JSON object
      setUserData(jsonData);
      // console.log(deitiesData);
      
    })
    .catch(error => {
      console.error('Error fetching deities data:', error);
    });
  // }if (selectedOption === 'Manage Forum'){
  //   setForumData(getForumData());
  // }
  // if (selectedOption === 'Manage Calendar'){
  //   setCalendarData(getCalendarData());
  }
};
  useEffect(() => {
    console.log("Controller prop in BrowseDatabase:", selectedOption);
    fetchJsonData()
  }, [selectedOption]);

  
  const filteredSearchDeity = deityData.filter((element) => {
    const searchTerm = searchField.trim().toLowerCase(); 
    console.log(deityData, "search", searchTerm);
    
    if (element.DeityName !== undefined) {
      // Check deity.Email if DeityName is undefined
      return element.DeityName.toLowerCase().includes(searchTerm);
    } 
    // else  if (element.Email === undefined){
    //   // Otherwise, continue with the existing logic to check DeityName
    //   return element.Email.toLowerCase().includes(searchTerm);
    // }
  });

  const filteredSearchUser = userData.filter((element) => {
    const searchTerm = searchField.trim().toLowerCase(); 
    console.log(deityData, "search", searchTerm);
    
    if (element.Email !== undefined) {
      // Check deity.Email if DeityName is undefined
      return element.Email.toLowerCase().includes(searchTerm);
    } 
  });
  
  
  
  // const filteredSearchUser = data.filter((user) => {
  //   const searchTerm = searchField.trim();
  //     return (
  //       user.Email.includes(searchTerm)
  //     );
  // });
  

  // const filteredSearchUser = data.filter((user) => {
  //   const searchTerm = searchField.toLowerCase().trim();
  //   if (!searchTerm) {
  //     return true;
  //   } else {
  //     return (
  //       user.Email.toLowerCase().includes(searchTerm)
  //     );
  //   }
  // });
  
  //UNCOMMENT WHEN CALENDAR AND FORUM IS IMPLEMENTED
  // const filteredSearchForum = forumData.users.filter((forum) => {
  //   const searchTerm = searchField.toLowerCase().trim();
  //   if (!searchTerm) {
  //     return true;
  //   } else {
  //     return (
  //       forum.Title.toLowerCase().includes(searchTerm)
  //     );
  //   }
  // });
  // const filteredSearchCalendar = calendarData.users.filter((event) => {
  //   const searchTerm = searchField.toLowerCase().trim();
  //   if (!searchTerm) {
  //     return true;
  //   } else {
  //     return (
  //       event.Title.toLowerCase().includes(searchTerm)
  //     );
  //   }
  // });

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    // console.log(selectedOption);
    if (selectedOption==='Manage Deities' && deityData && deityData.length>0) {
      console.log("blac"+deityData.length);
      return (
        <SearchList filteredSearch={filteredSearchDeity} controller={controller}/>
      );
    } 
    else if (selectedOption==='Manage Users' && userData && userData.length > 0) {
      console.log("here");
      return (
       <SearchList filteredSearch={filteredSearchUser} controller={controller}/>
      );
    } 
    //UNCOMMENT WHEN CALENDAR AND FORUM IS IMPLEMENTED
    // else if (searchShow && controller === "Event") {
    //   return (
    //     <SearchList filteredSearch={filteredSearchCalendar} controller={controller}/>
    //   );
    // } else if (searchShow && controller === "Forum") {
    //   return (
    //     <SearchList filteredSearch={filteredSearchForum} controller={controller}/>
    //   );
    // } 
  }

  return (
    <>
      <div className={"align-center"}>
        <div className="navy georgia ma0 grow">
          <h2 className="f2"><strong>{selectedOption}</strong></h2>
        </div>
        <div className={"inputContainer"}>
          <input 
            type="search" 
            placeholder={`Search ${searchVar} of ${controller}`}
            onChange={handleChange}
          />
        </div>
        {searchList()}
      </div>
    </>
  );
}

export default BrowseDatabase