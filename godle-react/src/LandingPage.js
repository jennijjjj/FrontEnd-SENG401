import React, { useEffect, useState } from "react";
import SlideShow from "./SlideShowComponents/Slide"; // Assuming SlideShow component is imported correctly

const LandingPage = ({ }) => {
    return (
       
            <div style={{width: '60%',position: "absolute", // Position the name absolutely
         // Place it at the vertical center
            left: "22%",}}>
                 <div style={{ justifyContent:'center',textAlign: 'left',
        marginRight: '10%', marginTop: '5%', width:"60%" }}>
            <h1 style={{ textAlign:"left",color:"#5500e7f", fontWeight: 'bold', fontFamily: "Helvetica, sans-serif" }}>Embark on a Journey of Self-Discovery</h1>
            <p style={{ textAlign:"left", marginTop: '5%'}}>Explore and discover diverse faiths, featuring a quiz to match you with your most suitable Deities, engaging community forums, and a comprehensive calendar of spiritual observances.</p>
            <button style={{alignSelf:"left", marginTop: '5%', textAlign: 'left' }} className="start-button">Start your Journey</button>
            
            </div>
            {/* Container with 80% width */}
            <div style={{ textAlign:"center",margin: 'auto' }}>
            <h5 style={{textAlign:"left", marginTop: '5%' ,color:"#5500e7f",fontFamily: "Helvetica, sans-serif"}}>Featured Deities</h5>
                <SlideShow />
            </div>
        </div>
    );
};

export default LandingPage;