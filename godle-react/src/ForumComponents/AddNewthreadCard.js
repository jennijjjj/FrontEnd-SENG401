import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AddNewthreadCard({ thread }) {
    const [expand, setExpand] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const flexColumn = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    };
    const flexRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    };

    const headingStyle={
        background:"#5500e7",
        height:"60px",
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        color: "white",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        fontWeight: "bolder",
        alignItems:"center"
    }



    return (
        <div className="threadCardContainer" style={{borderRadius:0,marginTop:"0px", justifyItems:"flex-start", margin:0, padding:0, boxShadow:"0 0px 0px"}}>

            <div style = {headingStyle}>
                <button  className="submit-button" style={{
                height:"40px", fontWeight: "bolder", padding:"8px", marginLeft:"10px"}}>
                    ⓧ
                </button>
          
                <h2>New Thread</h2>
                <button  className="post-button" style={{
                height:"40px", fontWeight: "bolder", padding:"8px", marginRight:"10px"}}>
                    Post
                </button>
            </div>
            {/* // style={{ position: "relative", marginBottom: "10px" }}>

            // <div style={flexRow}>
            //     <div style={flexColumn}>
            //         <h1>{thread.subtitle}</h1>
            //         <p style={{ fontSize: "small" }}>Posted by: {thread.user}</p>
            //    <p>{thread.body}</p>
            //     </div>
            //     <p style={{ fontSize: "small" }}>{thread.date}</p>
            // </div>

            // {showTooltip && (
            //     <div style={{ position: "absolute", bottom: "0", right: "0" }}>
            //         <p style={{ fontSize: "small", backgroundColor: "lightgray", padding: "4px", borderRadius: "4px" }}>
            //         </p>
            //     </div> */}
        </div>
    );
}

export default AddNewthreadCard;
