import React from 'react';

function UserCard({user}) {

  const handleDelete = () => {
    const userResponse = window.confirm(`Are you sure you want to delete ${user.Email}?`);
    if (userResponse) {
      alert(`Successfully deleted ${user.Email}!`);
        // User clicked "OK" or "Yes"
        // Perform action
    } else {
        // User clicked "Cancel" or "No"
        // Perform alternative action or do nothing
    }
   
  };
  

  const flexColumn={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
  const flexRow={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: 'wrap',
  }


  return(
    <div className="cardContainer">
        <div style={flexRow}>
        <div style={flexColumn}>
          <p><strong>{user.UserName}</strong></p>
          <p>{user.Email}</p>
        </div>
        
        <div style = {flexRow}>
          <button className='deletebutton' onClick={handleDelete}><strong>DELETE</strong></button>      
        </div>
        </div>
    </div>
  );
}

export default UserCard;