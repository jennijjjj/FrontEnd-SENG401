import React, { useState, useEffect, useRef } from 'react';
import ForumList from './ForumList';

const Forum = () => {
    const [searchField, setSearchField] = useState("");
    const [categoryToggle, setCategoryToggle] = useState(false);
    const [searchShow, setSearchShow] = useState(false); 
    const handleSearch = e => {
        setSearchField(e.target.value);
        if(e.target.value===""){
          setSearchShow(false);
        }
        else {
          setSearchShow(true);
        }
      };

      const clearSearch = e => {
        setSearchField(e.target.value);
        if(e.target.value===""){
          setSearchShow(false);
        }
      };


      const listItemStyle = {
        transition: 'background 0.3s', // Smooth transition on hover
        marginBottom: '10px',
        marginTop: '10px',
        display: 'flex', // Added flex display for the new structure
        flexDirection: 'column', // Display items in a column
        alignItems: 'flex-start', // Align items to the left
        marginLeft: '10px',
        width: '120px',
        padding:"5px",
      };
    
    const jsonForum={
        "forums":[
            {
              "user": "JohnDoe",
              "date": "2024-03-12T08:30:00",
              "subtitle": "Introduction",
              "body": "Hello everyone! I'm new here. Just wanted to introduce myself."
            },
            {
              "user": "AliceSmith",
              "date": "2024-03-12T09:45:00",
              "subtitle": "Question about Forum Rules",
              "body": "Can someone clarify the rules regarding posting links?"
            },
            {
              "user": "JaneDoe",
              "date": "2024-03-12T11:20:00",
              "subtitle": "Feedback on New Feature",
              "body": "I really like the new feature. Great job to the development team!"
            },
            {
              "user": "BobJohnson",
              "date": "2024-03-12T13:10:00",
              "subtitle": "Discussion on Current Events",
              "body": "What are your thoughts on the recent political developments?I really like the new feature. Great job to the development team!I really like the new feature. Great job to the development team!"
            }
          ]          
    }
    const handleCategoryHover = () => {
        setCategoryToggle(true);
    };

    const handleCategoryLeave = () => {
        setCategoryToggle(false);
    };
    
    const filteredSearch = jsonForum.forums.filter((thread) => {
        const searchTerm = searchField.toLowerCase().trim();
        if (!searchTerm) {
          return true;
        } else {
          return (
            thread.subtitle.toLowerCase().includes(searchTerm)||
            thread.user.toLowerCase().includes(searchTerm)||
            thread.body.toLowerCase().includes(searchTerm)
          );
        }
      });
    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <div className="forum-center-container">
                    <h1 style={{fontWeight:"bolder"}}>🗪 Forum🗧</h1>
                    <div class="searchBar">
                        <input id="searchQueryInput" 
                        type="text" 
                        name="searchQueryInput" 
                        placeholder="Search for a topic..." 
                        onChange={clearSearch}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch(e);
                            }
                        }}/>
                        <button id="searchQuerySubmit" 
                        type="submit" 
                        name="searchQuerySubmit"
                        onClick={handleSearch}>
                        🔎︎
                        </button>
                    </div>
                </div>
                
            <div className="addThreadContainer" style ={{width:"57%", marginBottom:"30px"}}>
                <div>
                    <h2 style={{fontSize:"bigger", marginLeft:"80px",margin:"-30px", marginTop:"-18px"}}>🕬</h2>
                    <h2 style={{fontSize:"100px", marginLeft:"15px",marginTop:"-40px",margin:"-25px"}}>🗺</h2>
                </div>
                <div>
                    <h2><strong>Join the conversation!</strong></h2>
                    <p>Share your questions and thoughts to the community.</p>

                </div>
                
                <button type="submit" className="submit-button" ><div><p style={{fontWeight:"bolder"}}>Add Thread</p></div></button>

            </div>

            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginLeft: "23%",
                    width:"fit-content"
                }}
                onMouseEnter={handleCategoryHover} 
                onMouseLeave={handleCategoryLeave}
            >   
                <span style={{marginTop:"20px", fontSize:"small", textDecoration:"0.5px underline"}}>{categoryToggle ? 'Filter By 🠹' : 'Filter By 🠻'}</span>
                {categoryToggle && ( // Conditionally render options when showOptions is true
                    <div>
                        {/* Render your options here */}
                        <li
                            style={listItemStyle}
                            className="list-group-item"
                            // onClick={() => handleOptionClick("Manage Forum")}
                        >
                            Post
                        </li>
                        <li
                            style={listItemStyle}
                            className="list-group-item"
                            // onClick={() => handleOptionClick("Manage Forum")}
                        >
                            User
                        </li>
                        <li
                            style={listItemStyle}
                            className="list-group-item"
                            // onClick={() => handleOptionClick("Manage Forum")}
                        >
                            ⮽ Clear Filter
                        </li>
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <div style={{width:"60%"}}>
                    <ForumList filteredSearch={filteredSearch} />
                </div>
            </div>
        </div>
        
    );
};

export default Forum;
