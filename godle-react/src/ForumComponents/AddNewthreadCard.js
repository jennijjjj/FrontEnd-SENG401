import React, { useState } from 'react';
import { postThread } from './ForumApiRequests';

function AddNewthreadCard({ setAddMode, username , fetchData}) {
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');

    const flexColumn = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width:"100%" ,
        padding:"20px"
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

    const handleCancel = () => {
        const userResponse = window.confirm(`Are you sure you want to cancel? Your draft will be lost.`);
        if (userResponse) {
            setAddMode(false);
            console.log('Item deleted');
        } else {
            console.log('Delete operation cancelled');
        }
    }

    const handlePost = async () => {
        if (!topic || !content) {
            alert('Please fill in all fields.');
            return;
        }
    
        try {
            // Call the postThread function with topic and content
            await postThread(username, topic, content);
            setAddMode(false);
            alert('New thread created!');
            fetchData();
        } catch (error) {
            // Handle any errors that occur during the HTTP request
            console.error('Error posting thread:', error);
            alert('Error creating thread. Please try again later.');
        }
    };

    return (
        <div className="threadCardContainer" style={{borderRadius:0,marginTop:"0px", justifyContent:"center", margin:0, padding:0, boxShadow:"0 0px 0px"}}>

            <div style = {headingStyle}>
                <button onClick={() => handleCancel()} className="submit-button" style={{height:"40px", fontWeight: "bolder", padding:"8px", marginLeft:"10px"}}>
                    ⓧ
                </button>
                <h2>New Thread</h2>
                <button onClick={() => handlePost()} className="post-button" style={{height:"40px", fontWeight: "bolder", padding:"8px", marginRight:"10px"}}>
                    Post
                </button>
            </div>
            <div style={flexColumn}>
                <textarea style={{alignText:"center", width:"100%"}} rows="1" placeholder="Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
                <textarea style={{width:"100%", marginTop:"5px"}} rows="6" placeholder="Enter your text here..." value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
        </div>
    );
}

export default AddNewthreadCard;


