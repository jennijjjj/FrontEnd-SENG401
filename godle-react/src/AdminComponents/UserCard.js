import React from 'react';
import { deleteUser } from './ApiRequests/DeleteRequests';

function UserCard({user, fetchJsonData}) {

  const handleDelete = async () => {
    const userResponse = window.confirm(`Are you sure you want to delete ${user.Email}?`);
    if (userResponse) {
      await deleteUser(user.Email);
      fetchJsonData();
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
        <div style={flexRow}>
          <p><strong>{user.UserName} </strong></p>
          
          <p style={{marginLeft:"30px"}}> Email: {user.Email}</p>
        </div>
        <div style = {flexRow}>
          <button className='deletebutton' onClick={handleDelete}><strong>DELETE</strong></button>      
        </div>
        </div>
    </div>
  );
}

export default UserCard;