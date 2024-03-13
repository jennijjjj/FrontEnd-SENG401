import React, { useState, useEffect, useRef } from 'react';
import ForumList from './ForumList';

const Forum = () => {
    const [searchField, setSearchField] = useState("");
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
              "body": "What are your thoughts on the recent political developments?"
            }
          ]          
    }
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
    
    function forumList() {
        if (searchShow) {
          return (
            <ForumList filteredSearch={filteredSearch}/>
          );
        } 
      }

    return (
        <div className="align-center">
            <h1 className="titleText">Forum</h1>
            <div class="searchBar">
                <input id="searchQueryInput" 
                type="text" 
                name="searchQueryInput" 
                placeholder="Search for a topic..." 
                onChange={handleSearch} />
                <button id="searchQuerySubmit" 
                type="submit" 
                name="searchQuerySubmit"
                onClick={()=>handleSearch}>
                🔎︎
                </button>
            </div>
            <div>
                {forumList()}
            </div>
        </div>
    );
};

export default Forum;
