import React, { useState, useEffect, useRef } from 'react';
import SearchList from './SearchList';

function BrowseDatabase({selectedOption, controller}) {
//  const {userType, setFlightCode}=props
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 
  const jsonData = 
  {
    "deities": [
      {
        "DeityName": "Aetherius",
        "SourceUniverse": "Celestial Realm",
        "DeityDescription": "God of the Sky and Atmosphere",
        "ImagePath": "/images/aetherius.jpg",
        "Zealousness": 0.9,
        "Mysticism": 0.8,
        "Squeamishness": 0.2,
        "Technology": 0.3,
        "Erudition": 0.7,
        "Organization": 0.6,
        "Morality": 0.9,
        "Zen": 0.8,
        "Aggression": 0.1,
        "Grandeur": 0.9,
        "Temperament": 0.5
      },
      {
        "DeityName": "Terrafira",
        "SourceUniverse": "Earthrealm",
        "DeityDescription": "Goddess of Nature and Earth",
        "ImagePath": "/images/terrafira.jpg",
        "Zealousness": 0.7,
        "Mysticism": 0.6,
        "Squeamishness": 0.3,
        "Technology": 0.5,
        "Erudition": 0.6,
        "Organization": 0.8,
        "Morality": 0.8,
        "Zen": 0.7,
        "Aggression": 0.2,
        "Grandeur": 0.7,
        "Temperament": 0.6
      }
    ]
  }


const filteredSearchDeity = jsonData.deities.filter((deity) => {
    const searchTerm = searchField.toLowerCase().trim();
    if (!searchTerm) {
      return true;
    } else {
      return (
        deity.DeityName.toLowerCase().includes(searchTerm)
      );
    }
  });

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
    if (searchShow && controller === "Deity") {
      return (
        <SearchList filteredSearch={filteredSearchDeity}/>
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
            placeholder={`Search name of ${controller}`}
            onChange={handleChange}
          />
        </div>
        
          
  
        {searchList()}
      </div>
    </>
  );
}

export default BrowseDatabase