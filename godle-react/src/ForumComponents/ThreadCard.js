import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function ThreadCard({ thread }) {
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
                    <h1>{thread.subtitle}</h1>
                    <p style={{ fontSize: "small" }}>Posted by: {thread.user}</p>
                    {expand && <p>{thread.body}</p>}
                </div>
                <p style={{ fontSize: "small" }}>{thread.date}</p>
            </div>

            {showTooltip && (
                <div style={{ position: "absolute", bottom: "0", right: "0" }}>
                    <p style={{ fontSize: "small", backgroundColor: "lightgray", padding: "4px", borderRadius: "4px" }}>
                        {expand ? "Click to minimize" : "Click to expand"}
                    </p>
                </div>
            )}
        </div>
    );
}

export default ThreadCard;
