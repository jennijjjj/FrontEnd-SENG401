import React, { useState, useEffect, useRef } from 'react';
import SearchList from './SearchList';

function BrowseDatabase({selectedOption, searchVar, controller}) {
//  const {userType, setFlightCode}=props
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 
  const [deitiesData, setDeitiesData] = useState(null);
  const [forumData, setForumData] = useState(null);
  const [deitiesData, setDeitiesData] = useState(null);

  const deitiesDataH = 
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

  const usersDataH = 
  {
    "users": [
      {
        "UserName": "Maximus",
        "Email": "maximus@example.com",
        "UserPassword": "pass123",
        "ChosenDeity": "Jupiter",
        "Zealousness": 3.5,
        "Mysticism": 4,
        "Squeamishness": 0.5,
        "Technology": 2,
        "Erudition": 3.5,
        "Organization": 4,
        "Morality": 3,
        "Zen": 1.5,
        "Aggression": 3.5,
        "Grandeur": 4,
        "Temperament": 3
      },
      {
        "UserName": "Livia",
        "Email": "livia@example.com",
        "UserPassword": "pass123",
        "ChosenDeity": "Venus",
        "Zealousness": 2,
        "Mysticism": 4,
        "Squeamishness": 1,
        "Technology": 2,
        "Erudition": 3.5,
        "Organization": 3,
        "Morality": 4,
        "Zen": 4,
        "Aggression": 2,
        "Grandeur": 3.5,
        "Temperament": 3
      },
      {
        "UserName": "Julius",
        "Email": "julius@example.com",
        "UserPassword": "pass321",
        "ChosenDeity": "Venus",
        "Zealousness": 2,
        "Mysticism": 4,
        "Squeamishness": 1,
        "Technology": 2,
        "Erudition": 3.5,
        "Organization": 3,
        "Morality": 4,
        "Zen": 4,
        "Aggression": 2,
        "Grandeur": 3.5,
        "Temperament": 3
      },
      {
        "UserName": "Titus",
        "Email": "titus@example.com",
        "UserPassword": "pass123",
        "ChosenDeity": "Mars",
        "Zealousness": 4,
        "Mysticism": 2,
        "Squeamishness": 0,
        "Technology": 1.5,
        "Erudition": 2,
        "Organization": 2.5,
        "Morality": 1,
        "Zen": 1,
        "Aggression": 4,
        "Grandeur": 3.5,
        "Temperament": 4
      }
    ]
  }

  const fetchJson = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {

      const retreiveData = {
        topicData: controller
      };

      fetch('/Admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(retreiveData)
      })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            console.log(data);
            setDeitiesData(data);
          });
        } else {
          alert('Response NOT ok: trying to retreive json from backend.');
          console.error(response);
        }
      })

    } catch (error) {
      alert("Exception occured trying to retreive json from backend.");
      console.error('Exception occured trying to retreive json from backend.');
    }
  };




const filteredSearchDeity = deitiesData.deities.filter((deity) => {
    const searchTerm = searchField.toLowerCase().trim();
    if (!searchTerm) {
      return true;
    } else {
      return (
        deity.DeityName.toLowerCase().includes(searchTerm)
      );
    }
  });


  const filteredSearchUser = usersData.users.filter((user) => {
    const searchTerm = searchField.toLowerCase().trim();
    if (!searchTerm) {
      return true;
    } else {
      return (
        user.Email.toLowerCase().includes(searchTerm)
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
        <SearchList filteredSearch={filteredSearchDeity} controller={controller}/>
      );
    } else if (searchShow && controller === "User") {
      return (
        <SearchList filteredSearch={filteredSearchUser} controller={controller}/>
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