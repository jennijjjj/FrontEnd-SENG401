import React from 'react';
import { deleteForum } from './ApiRequests/DeleteRequests';

function ForumCard({forum, fetchJsonData}) {

  const handleDelete = async () => {
    const userResponse = window.confirm(`Are you sure you want to delete forum from ${forum.Email} with postdate of ${forum.Date}.?`);
    if (userResponse) {
      await deleteForum(forum.Email, forum.Date);
      fetchJsonData();
    } 
   
  };
  
  const flexColumn={
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  }
  const flexRow={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // Align items with space between them
    flexWrap: 'wrap',
    width: '100%', // Set width to 100%
  }

  return(
    <div className="cardContainer">
        <div style={flexColumn}>
          <div style={flexRow}>
            <p><strong>Title: </strong>{forum.Title}</p>
            <button className='deletebutton' onClick={handleDelete}><strong>DELETE</strong></button>
          </div>
          <p><strong>Email: </strong>{forum.Email}</p>
          <p><strong>Body: </strong>{forum.Body}</p>
          <p><strong>Post Date: </strong>{forum.Date}</p>   
        </div>
    </div>
  );
}

export default ForumCard;