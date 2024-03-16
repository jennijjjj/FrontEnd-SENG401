import React, { useState, useEffect, useRef } from 'react';
import ForumList from './ForumList';
import AddNewthreadCard from './AddNewthreadCard';
import { fetchThreads } from './ForumApiRequests';

const Forum = (user) => {
    const [searchField, setSearchField] = useState("");
    const [categoryToggle, setCategoryToggle] = useState(false);
    const [addMode, setAddMode]=useState(false);
    const [isPostActive, setPostActive] = useState(false);
    const [isUserActive, setUserActive] = useState(false);
    const [isMyPostsActive, setMyPostsActive] = useState(false);
    const username = (user ? user.user.username : "");
    const [threads, setThreads] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedThreads = await fetchThreads(username); // Replace with the actual email
          setThreads(fetchedThreads);
        } catch (error) {
          alert('Error fetching data: ' + error.message);
        }

        console.log("home"+threads);
      };
      fetchData();
    }, []);
    // Function to handle the click event for the "Post" item
    const handlePostClick = () => {
        setMyPostsActive(false);
        // Toggle the active state of "Post"
        setPostActive(true);
        // Deactivate other items
        setUserActive(false);
    };

    const handleMyPostsClick = () => {
        setMyPostsActive(true);
        // Toggle the active state of "Post"
        setPostActive(false);
        // Deactivate other items
        setUserActive(false);
    };

    // Function to handle the click event for the "User" item
    const handleUserClick = () => {
        setMyPostsActive(false);
        // Toggle the active state of "User"
        setUserActive(true);
        // Deactivate other items
        setPostActive(false);
    };

    const handleSearch = e => {
        setSearchField(e.target.value);
        
        // if(e.target.value===""){
        //   setSearchShow(true);
        // }
        // else {
        //   setSearchShow(false);
        // }
        console.log(e.target.value);
      };

    const handleAddMode = e => {
        setAddMode(true);
        console.log("add");
    };


      const submitSearch = e => {
        // setSearchShow(true)
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
              "user": "1@1",
              "date": "2024-3-13 19:38:5",
              "subtitle": "Introduction",
              "body": "Hello everyone! I'm new here job. Just wanted to introduce myself."
            },
            {
              "user": "AliceSmith",
              "date": "2023-3-13 19:38:5",
              "subtitle": "Question about Forum Rules",
              "body": "Can someone clarify the rules regarding posting @1@1 links?"
            },
            {
              "user": "JaneDoe",
              "date": "2024-3-13 10:38:5",
              "subtitle": "Feedback on New Feature",
              "body": "I really like the new feature. Great job to the development team!"
            },
            {
              "user": "1@1",
              "date": "2024-3-18 19:38:5",
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

      const filteredSearchPost = jsonForum.forums.filter((thread) => {
        const searchTerm = searchField.toLowerCase().trim();
        if (!searchTerm) {
          return true;
        } else {
          return (
            thread.subtitle.toLowerCase().includes(searchTerm)||
            thread.body.toLowerCase().includes(searchTerm)
          );
        }
      });

      const filteredSearchUser = jsonForum.forums.filter((thread) => {
        const searchTerm = searchField.toLowerCase().trim();
        if (!searchTerm) {
          return true;
        } else {
          return (
            thread.user.toLowerCase().includes(searchTerm)
          );
        }
      });
      const filteredMyPosts = jsonForum.forums.filter((thread) => {
        const searchTerm = searchField.toLowerCase().trim();
        if (!searchTerm) {
          // If searchTerm is empty, return true to include all threads
          return thread.user === username; // Check if thread.user exactly matches username
        } else {
          // Otherwise, filter based on the conditions
          return (
            thread.user === username && // Check if thread.user exactly matches username
            (thread.body.includes(searchTerm) || thread.subtitle.includes(searchTerm)) // Check if body or subtitle includes searchTerm
          );
        }
      });
      
    const filteredData=()=>{
        if (!isPostActive && !isUserActive && !isMyPostsActive){
            return <ForumList filteredSearch={filteredSearch} username={username} />
        } else if (isPostActive){
            return <ForumList filteredSearch={filteredSearchPost} username={username} />
        } else if ( isUserActive){
            return <ForumList filteredSearch={filteredSearchUser} username={username} />
        } else if (isMyPostsActive){
            return <ForumList filteredSearch={filteredMyPosts} username={username} />
        } 
    }

    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <div className="forum-center-container">
                    <h1 style={{fontWeight:"bolder"}}>🗪 ThreadTalk🗧</h1>
                    <div class="searchBar">
                        <input id="searchQueryInput" 
                        type="text" 
                        name="searchQueryInput" 
                        placeholder="Search for a topic..." 
                        onChange={handleSearch}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                submitSearch(e);
                            }
                        }}/>
                        <button id="searchQuerySubmit" 
                        type="submit" 
                        name="searchQuerySubmit"
                        onClick={submitSearch}>
                        🔎︎
                        </button>
                    </div>
                </div>
                {!addMode &&
                    <div className="addThreadContainer" style ={{width:"57%", marginBottom:"30px"}}>
                        <div>
                            <h2 style={{fontSize:"bigger", marginLeft:"80px",margin:"-30px", marginTop:"-18px"}}>
                                🕬</h2>
                            <h2 style={{fontSize:"100px", marginLeft:"15px",marginTop:"-40px"}}>
                                🗺</h2>
                        </div>
                        <div >
                            <h2 style={{marginTop:"20px"}}><strong>Begin your own discussion!</strong></h2>
                            <p>Passionate about a topic but can't find it here?</p>
                            <p style={{marginTop:"-20px"}}>Start your own thread!</p>

                        </div>
                        
                        <button className="submit-button" 
                        onClick={() =>handleAddMode()}>
                            <div>
                                <p style={{fontWeight:"bolder",marginTop:"12px"}}>Add Thread</p>
                            </div>
                        </button>

                    </div>
            }           
            <div style={{width:"80%"}}>
                {addMode && <AddNewthreadCard setAddMode={setAddMode}/> }

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
                        <li
                            style={isUserActive ? { ...listItemStyle, backgroundColor: 'lightblue' } : listItemStyle}
                            className="list-group-item"
                            onClick={handleUserClick}
                        >
                            User
                        </li>
                        <li
                            style={isPostActive ? { ...listItemStyle, backgroundColor: 'lightblue' } : listItemStyle}
                            className="list-group-item"
                            onClick={handlePostClick}
                        >
                            All Posts
                        </li>
                        
                        <li
                            style={isMyPostsActive ? { ...listItemStyle, backgroundColor: 'lightblue' } : listItemStyle}
                            className="list-group-item"
                            onClick={handleMyPostsClick}
                        >
                            My Posts Only
                        </li>
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <div style={{width:"60%"}}>
                {filteredData()}
                </div>
            </div>
        </div>
        
    );
};

export default Forum;
