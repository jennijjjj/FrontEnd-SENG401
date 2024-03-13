import React, { useState, useEffect } from 'react';
import { UploadImage } from './UploadImage';
function DeityCard({deity, setModalOpen}) {
  const [modifyMode, setModifyMode] = useState(deity ? false : true);
  const [modifiedName, setModifiedName] = useState(deity ? deity.DeityName : null);
  const [sourceUniverse, setSourceUniverse] = useState(deity ? deity.SourceUniverse : null);
  const [deityDescription, setDeityDescription] = useState(deity ? deity.DeityDescription : null);
  const [zealousness, setZealousness] = useState(deity ? deity.Zealousness : null);
  const [mysticism, setMysticism] = useState(deity ? deity.Mysticism : null);
  const [squeamishness, setSqueamishness] = useState(deity ? deity.Squeamishness : null);
  const [technology, setTechnology] = useState(deity ? deity.Technology : null);
  const [erudition, setErudition] = useState(deity ? deity.Erudition : null);
  const [organization, setOrganization] = useState(deity ? deity.Organization : null);
  const [morality, setMorality] = useState(deity ? deity.Morality : null);
  const [zen, setZen] = useState(deity ? deity.Zen : null);
  const [aggression, setAggression] = useState(deity ? deity.Aggression : null);
  const [grandeur, setGrandeur] = useState(deity ? deity.Grandeur : null);
  const [temperament, setTemperament] = useState(deity ? deity.Temperament : null);
  // const [imageFile, setImageFile] = useState(null);


  const handleDelete = () => {
    const userResponse = window.confirm(`Are you sure you want to delete ${modifiedName}?`);
    if (userResponse) {
      alert(`Successfully deleted ${modifiedName}!`);
        // User clicked "OK" or "Yes"
        // Perform action
    } else {
        // User clicked "Cancel" or "No"
        // Perform alternative action or do nothing
    }
   
  };
  const handleSave = () => {
    alert(`Successfully saved ${modifiedName}!`);
    setModifyMode(false); 
    if (deity==null){
      setModalOpen(false);
    }
  };
  const handleAdd = () => {
    alert(`Added new deity: ${modifiedName}!`);
    setModifyMode(false); 
    if (deity==null){
      setModalOpen(false);
    }
  };
  const handleCancel = () => {
    setModifyMode(false); 
    if (deity==null){
      setModalOpen(false);
    }
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
  
  const handleZealousnessChange = (e) => {
    setZealousness(e.target.value);
  };

  const handleMysticismChange = (e) => {
    setMysticism(e.target.value);
  };

  const handleSqueamishnessChange = (e) => {
    setSqueamishness(e.target.value);
  };

  const handleTechnologyChange = (e) => {
    setTechnology(e.target.value);
  };

  const handleEruditionChange = (e) => {
    setErudition(e.target.value);
  };

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  const handleMoralityChange = (e) => {
    setMorality(e.target.value);
  };

  const handleZenChange = (e) => {
    setZen(e.target.value);
  };

  const handleAggressionChange = (e) => {
    setAggression(e.target.value);
  };

  const handleGrandeurChange = (e) => {
    setGrandeur(e.target.value);
  };

  const handleTemperamentChange = (e) => {
    setTemperament(e.target.value);
  };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setImageFile(file);
  // };

  const handleUpload = () => {
    // Send imageFile to the backend
    // You can use Fetch API or Axios to send a POST request to the backend
    // Include the imageFile in the request body or as form data
  };

  const flexColumn={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width:"50%",
    // paddingRight:"50%",
  }
  const flexRow={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: 'wrap',
  }


  return(
    <div className="cardContainer">
        <div style={flexRow}>
        <div style={{ ...flexColumn, alignItems: "flex-start" }}>
          <textarea
            rows = {1} 
            value={modifiedName}
            onChange={handleNameChange}
            disabled={!modifyMode}
            placeholder = "Deity Name"  
            style={{ 
              width: '100%', // Set width to 100%
            }}
            />
            <textarea
            rows = {1} 
            value={sourceUniverse}
            onChange={handleSourceUniverseChange}
            disabled={!modifyMode}
            placeholder = "Source Universe"  
            style={{ 
              width: '100%', // Set width to 100%
            }}
            />
            <textarea
              rows = {1} 
              cols={50} 
              value={deityDescription}
              disabled={!modifyMode}
              onChange={handleDeityDescriptionChange}
              placeholder = "Description"   
              overflow = 'auto'
              style={{ 
                width: '100%', // Set width to 100%
              }}
            />
            {/* <img src={"./images/" + deity.imagePath} alt={`${modifiedName}'s Photo`} />
            <input
              type="file"
              defaultValue={imageFile!=null ? modifiedName : ''}
              onChange={handleImageChange}
              disabled={!modifyMode}
            /> */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "8px" }}>
                  {modifyMode ? (
                      <UploadImage />
                  ) : (
                      <div></div>
                  )}
              </div>
            </div>
            

        <div style = {flexRow}>
            {modifyMode ? (
            <>
              {deity==null ? (
                  <>
               
                    <button className='adminbutton' onClick={handleAdd}>Add</button>
                  </>
                ) : (
                  <>
                  
                    <button className='adminbutton' onClick={handleSave}>Save</button>
                  </>
              )}
              <button className='deletebutton' onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <button className='adminbutton' onClick={modifyClick}>Modify</button>
              <button className='deletebutton' onClick={handleDelete}><strong>DELETE</strong></button>
            </>
          )}
                   
        </div>
        </div>
        <div style={flexRow}>
              <label>Zealousness: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={zealousness}
                  disabled={!modifyMode}
                  onChange={handleZealousnessChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Mysticism: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={mysticism}
                  disabled={!modifyMode}
                  onChange={handleMysticismChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Squeamishness: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={squeamishness}
                  disabled={!modifyMode}
                  onChange={handleSqueamishnessChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Technology: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={technology}
                  disabled={!modifyMode}
                  onChange={handleTechnologyChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Erudition: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={erudition}
                  disabled={!modifyMode}
                  onChange={handleEruditionChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Organization: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={organization}
                  disabled={!modifyMode}
                  onChange={handleOrganizationChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Morality: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={morality}
                  disabled={!modifyMode}
                  onChange={handleMoralityChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Zen: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={zen}
                  disabled={!modifyMode}
                  onChange={handleZenChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Aggression: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={aggression}
                  disabled={!modifyMode}
                  onChange={handleAggressionChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Grandeur: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={grandeur}
                  disabled={!modifyMode}
                  onChange={handleGrandeurChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
              <label>Temperament: 
                <textarea
                  rows = {1}  
                  cols = {3}
                  value={temperament}
                  disabled={!modifyMode}
                  onChange={handleTemperamentChange}
                  placeholder = ""   
                  overflow = 'auto' 
                />
              </label>
            </div>
      
      
    </div>
  );
}

export default DeityCard;