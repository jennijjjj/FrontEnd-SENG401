import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";

function ThreadCard({thread}) {


  const flexColumn={
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  }
  const flexRow={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }


  return(
    <div className="cardContainer" style={{width:"100%"}}>
        <div style={flexColumn}>
        <div style={flexRow}></div>
            <h1>{thread.subtitle}</h1>
            <p style={{fontSize:"small"}}>Posted by: {thread.user}, {thread.date}</p>
        </div>
   
      
    </div>
  );
}

export default ThreadCard;