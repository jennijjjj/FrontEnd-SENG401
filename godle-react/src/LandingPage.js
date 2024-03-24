import React from "react";
import SlideShow from "./SlideShowComponents/Slide"; // Assuming SlideShow component is imported correctly
import {useNavigate } from 'react-router-dom';

const LandingPage = ({deity}) => {
    const navigate = useNavigate(); 

    const handleStartJourney = () => {
        if(deity){
            navigate('/Deity'); 
        } else{
            navigate('/Quiz');
        }
    };
    return (
       
        <><div style={{}}>
            <div style={{marginLeft:"10%",width: '60%', // Position the name absolutely
         // Place it at the vertical center
            left: "22%",}}>
                 <div style={{ justifyContent:'center',textAlign: 'left',
        marginRight: '10%', marginTop: '5%', width:"60%" }}>
            <h1 style={{ textAlign:"left",color:"#5500e7f", fontWeight: 'bold', fontFamily: "Helvetica, sans-serif" }}>Embark on a Journey of <br/>Self-Discovery</h1>
            <p style={{ textAlign:"left", marginTop: '5%'}}>Explore and discover diverse faiths, featuring a quiz to match you with your most suitable Deities, engaging community forums, and a comprehensive calendar of spiritual observances. Start your quest now and unearth the sacred connections waiting to be discovered within you.</p>
            <button onClick={handleStartJourney} style={{alignSelf:"left", marginTop: '5%', textAlign: 'left' }} className="start-button">{deity !== undefined  ? "View My Deity" : "Start your Journey"}</button>
            
            </div>
            {/* Container with 80% width */}
            <div style={{ textAlign:"center",margin: 'auto' }}>
            {/* <h5 style={{textAlign:"left", marginTop: '5%' ,color:"#5500e7f",fontFamily: "Helvetica, sans-serif"}}>Featured Deities</h5> */}
                
            </div>
        </div>
            <div style={{ padding:"10px 0 5px 0",marginTop: '5%'}}>
                <h5 style={{textAlign:"center" ,fontWeight: 'bold',color:"white"}}>Featured Deities</h5>
                <SlideShow />
                
            </div>
        </div>
        </>
    );
};

export default LandingPage;