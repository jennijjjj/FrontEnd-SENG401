import React from 'react';

function UserCard({user}) {

  const handleDelete = () => {
    alert('Button clicked!');
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