import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Deity = ({ deity, setDeity }) => {
    const navigate = useNavigate(); 
    const reset = () => {
        setDeity(undefined);
        localStorage.removeItem('deity');
        navigate('/Quiz');
    };

    const [highestAttributes, setHighestAttributes] = useState([["", 0]]);
    const [lowestAttributes, setLowestAttributes] = useState([["", 0]]);

    useEffect(() => {
        const getAttributes = () => {
            const attributesArray = Object.entries(deity.attributes);
            attributesArray.sort((a, b) => b[1] - a[1]);
        
            setHighestAttributes(attributesArray.slice(0, 3));
        
            const lowestAttributesArray = [...attributesArray].reverse();
            setLowestAttributes(lowestAttributesArray.slice(0, 3));
        };
    
      if (deity!==undefined){
        getAttributes();
    } 
    }, [deity]);

    useEffect(() => {
        console.log(highestAttributes);
    }, [highestAttributes]);

    useEffect(() => {
        console.log(lowestAttributes);
    }, [lowestAttributes]);

    return (
        <>
            {deity ? (
                <div className="deity-profile">
                    <img className="deity-profile-image" src={"./images/" + deity.imagePath} alt={deity.name} />
                    <p className="deity-profile-name">{deity.name}</p>
                    <p className="deity-profile-source-universe">{deity.sourceUniverse}</p>
                    <div className="deity-profile-description-attributes-container">
                        <div className="deity-profile-attributes">
                            <p style={{ textAlign: "right", marginRight: "168px", paddingTop: "122px" }}>HIGH</p>
                            <p style={{ marginRight: "154px", paddingTop: "46px" }}>Attributes</p>
                            {highestAttributes.map(([attribute, value]) => (
                                <p style={{ color: "#FFFFFF", paddingRight: "30px" }} key={attribute}>{attribute}: {value}</p>
                            ))}
                        </div>
                        <div className="deity-profile-description">
                            <h2 className="deity-profile-description-title">DESCRIPTION</h2>
                            <p>{deity.description}</p>
                        </div>
                        <div className="deity-profile-attributes">
                            <p style={{ textAlign: "left", marginLeft: "168px", paddingTop: "122px" }}>LOW</p>
                            <p style={{ marginLeft: "154px", paddingTop: "46px" }}>Attributes</p>
                            {lowestAttributes.map(([attribute, value]) => (
                                <p style={{ color: "#FFFFFF", paddingLeft: "30px" }} key={attribute}>{attribute}: {value}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Deity error</p>
            )}
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default Deity;
