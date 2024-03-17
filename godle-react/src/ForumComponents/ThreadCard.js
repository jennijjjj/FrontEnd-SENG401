import React, { useState } from 'react';
import { deleteThread } from './ForumApiRequests';

function ThreadCard({ thread , username, fetchData}) {
    const [expand, setExpand] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // const handleDelete = () => {
    //     const userResponse = window.confirm(`Are you sure you want to delete your post?`);
    //     if (userResponse) {
    //         console.log('Item deleted');
    //     } else {
    //         console.log('Delete operation cancelled');
    //     }
    // };

    const handleDelete = async () => {
        const userResponse = window.confirm(`Are you sure you want to delete your post?`);
        if (userResponse) {
            try {
                // Call the postThread function with topic and content
                await deleteThread(username, thread.date);
                alert('Thread deleted!');
            } catch (error) {
                // Handle any errors that occur during the HTTP request
                console.error('Error posting thread:', error);
                alert('Error deleting thread. Please try again later.');
            }
        } 
        fetchData();
        
    };


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

    const handleMouseEnter = () => {
        if (!expand) {
            setShowTooltip(true);
        }
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="threadCardContainer" onClick={() => setExpand(!expand)}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{ position: "relative", marginBottom: "10px" }}>

            <div style={flexRow}>
                <div style={flexColumn}>
                    <h1>{thread.title}</h1>
                    <p style={{ fontSize: "small" }}>Posted by: {thread.email}</p>
                    {expand && <p>{thread.body}</p>}
                </div>
                <p style={{ fontSize: "small" }}>{thread.date}</p>
            </div>

            {showTooltip && (
                <>
                    {username === thread.email && (
                        <div style={{ position: "absolute", top: "0", left: "0" }}>
                            <button  className="deleteButton" onClick={handleDelete}>
                                🗑️
                            </button>
                        </div>
                    )}
                    <div style={{ position: "absolute", bottom: "0", right: "0" }}>
                        <p style={{ fontSize: "small", backgroundColor: "lightgray", padding: "4px", borderRadius: "4px" }}>
                            {expand ? "Click to minimize" : "Click to expand"}
                        </p>
                    </div>
                </>
                
            )}
        </div>
    );
}

export default ThreadCard;
