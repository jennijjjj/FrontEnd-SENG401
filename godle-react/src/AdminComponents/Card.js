import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";

function Card({deity, }) {
  const navigate = useNavigate();
  const [modifyMode, setModifyMode] = useState(false);
  const [modifiedName, setModifiedName] = useState(deity.DeityName);
  const [sourceUniverse, setSourceUniverse] = useState(deity.SourceUniverse);
  const [deityDescription, setDeityDescription] = useState(deity.DeityDescription);

  const handleClick = () => {
    alert('Button clicked!');
  };

  const modifyClick = () => {
    setModifyMode(!modifyMode); // Toggle modify mode
  };

  const handleNameChange = (e) => {
    setModifiedName(e.target.value);
  };

  const handleSourceUniverseChange = (e) => {
    setSourceUniverse(e.target.value);
  };

  const handleDeityDescriptionChange = (e) => {
    setDeityDescription(e.target.value);
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
  }


  return(
    <div className="cardContainer">
        <div style={flexColumn}>

        
        <div style = {flexRow}>
            <div style = {flexColumn}>
                {modifyMode ? (
                <>
                <input
                    type="text"
                    value={modifiedName}
                    onChange={handleNameChange}
                />
                <br></br>
                <input
                    type="text"
                    value={sourceUniverse}
                    onChange={handleSourceUniverseChange}
                />
                <br></br>
                <input
                    type="text"
                    value={deityDescription}
                    onChange={handleDeityDescriptionChange}
                />
                <br />
                </>
            ) : (
                <>
                <p><strong>{deity.DeityName}</strong></p>
                <p>{deity.SourceUniverse} </p>
                <p>{deity.DeityDescription}</p>
                </>
            )}
            </div>
            <div style = {flexColumn}>
                <p>Zealousness({deity.Zealousness}) Mysticism({deity.Mysticism}) Squeamishness({deity.Squeamishness}) </p>
                <p>Technology({deity.Technology}) Erudition({deity.Erudition}) Organization({deity.Organization}) </p>
                <p>Morality({deity.Morality}) Zen({deity.Zen}) Aggression({deity.Aggression})</p>
                <p>Grandeur({deity.Grandeur}) Temperament({deity.Temperament})</p>
          
            </div>
            <div style = {flexColumn}>
                <button
                    className='modifybutton'
                    onClick={modifyClick}
                    >
                    Modify
                </button>
                <br></br>
                <button
                    className='deletebutton'
                    onClick={handleClick}
                    >
                    Delete
                </button>
                   
                    
            </div>
        </div>
        </div>
      
      
    </div>
  );
}

export default Card;