import React, { useState } from 'react';
import { postThread } from './ForumApiRequests';

function AddNewthreadCard() {

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

    const handlePostClick = () => {
        if (userResponse) {
            console.log('Item deleted');
        } else {
            console.log('Delete operation cancelled');
        }
    };


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
        </div>
    );
}

export default AddNewthreadCard;
