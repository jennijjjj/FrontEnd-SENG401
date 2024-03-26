import React, { useState, useEffect} from 'react';
import SearchList from './SearchList';
import { getDeitiesData, getCalendarData, getForumData, getUsersData } from './ApiRequests/GetRequests';

function BrowseDatabase({selectedOption, searchVar, controller}) {
  const [searchField, setSearchField] = useState("");
  const [deityData, setDeityData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [forumData, setForumData] = useState([]);
  const [calendarData, setCalendarData] = useState([]);

 const fetchJsonData = async () => {
  setDeityData([]);
  setUserData([]);  
  if (selectedOption === 'Manage Deities'){
    getDeitiesData()
    .then(jsonString => {
      const jsonData = JSON.parse(jsonString);
      setDeityData(jsonData);
    })
    .catch(error => {
      console.error('Error fetching deities data:', error);
    });
  }
  else if (selectedOption === 'Manage Users'){
    getUsersData()
    .then(jsonString => {
      const jsonData = JSON.parse(jsonString);
      setUserData(jsonData);
    })
    .catch(error => {
      console.error('Error fetching deities data:', error);
    });
  }
  else if (selectedOption === 'Manage Forum'){
    getForumData()
    .then(jsonString => {
      const jsonData = JSON.parse(jsonString);
      setForumData(jsonData);
      
    })
    .catch(error => {
      console.error('Error fetching deities data:', error);
    });
  }
  else if (selectedOption === 'Manage Calendar'){
    getCalendarData()
    .then(jsonString => {
      const jsonData = JSON.parse(jsonString);
      setCalendarData(jsonData);
    })
    .catch(error => {
      console.error('Error fetching deities data:', error);
    });
  }
};
  useEffect(() => {
    console.log("Controller prop in BrowseDatabase:", selectedOption);
    fetchJsonData()
  }, [selectedOption]);

  
  const filteredSearchDeity = deityData.filter((element) => {
    const searchTerm = searchField.trim().toLowerCase();
    if (!searchTerm) {
      return true;
    } else {
      return (
        element.DeityName.toLowerCase().includes(searchTerm)
      );
    }
  }); 

  const filteredSearchUser = userData.filter((element) => {
    const searchTerm = searchField.trim().toLowerCase(); 
    if (!searchTerm) {
      return true;
    } else {
      return (
        element.Email.toLowerCase().includes(searchTerm)
      );
    }
  });

  const filteredSearchForum = forumData.filter((element) => {
    const searchTerm = searchField.trim().toLowerCase(); 
    if (element.Title !== undefined) {
      return element.Title.toLowerCase().includes(searchTerm);
    } 
  });

  const filteredSearchCalendar = calendarData.filter((element) => {
    const searchTerm = searchField.trim().toLowerCase(); 
    if (element.Title !== undefined) {
      return element.Title.toLowerCase().includes(searchTerm);
    } 
  });
  
  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    if (selectedOption==='Manage Deities' && deityData && deityData.length>0) {
      return (
        <SearchList filteredSearch={filteredSearchDeity} controller={controller} fetchJsonData={fetchJsonData}/>
      );
    } 
    else if (selectedOption==='Manage Users' && userData && userData.length > 0) {
      return (
       <SearchList filteredSearch={filteredSearchUser} controller={controller} fetchJsonData={fetchJsonData}/>
      );
    } else if (selectedOption==='Manage Forum' && forumData && forumData.length > 0) {
      return (
       <SearchList filteredSearch={filteredSearchForum} controller={controller} fetchJsonData={fetchJsonData}/>
      );
    } else if (selectedOption==='Manage Calendar' && calendarData && calendarData.length > 0) {
      return (
       <SearchList filteredSearch={filteredSearchCalendar} controller={controller} fetchJsonData={fetchJsonData}/>
      );
    } 
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