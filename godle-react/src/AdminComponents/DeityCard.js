import React, { useState, useEffect } from 'react';
import { uploadImage, deleteImage } from './ApiRequests/ImageApi';
import {UploadImage} from './UploadImage';
import { postDeity } from './ApiRequests/PostRequest';
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
  const [images, setImages] = useState([]);

  const handleDelete = () => {
    const result =deleteImage(modifiedName);
    if (result===1){
        const userResponse = window.confirm(`Are you sure you want to delete ${modifiedName}?`);
      if (userResponse) {
        
        alert(`Successfully deleted ${modifiedName}!`);
        
          // User clicked "OK" or "Yes"
          // Perform action
      } else {
          // User clicked "Cancel" or "No"
          // Perform alternative action or do nothing
      }

    } 
   
  };

  // const handleImageUpload = (uploadImageFunction) => {
  //   // Call the uploadImageFunction whenever you want to trigger the image upload
  //   // For example, you can call it when a submit button is pressed in another class
  //   uploadImageFunction();
  // };
  const handleSave = async () => {
    // await postDeity(
    //     zen,
    //     organization,
    //     squeamishness,
    //     technology,
    //     temperament,
    //     zealousness,
    //     aggression,
    //     erudition,
    //     grandeur,
    //     morality,
    //     mysticism,
    //     modifiedName,
    //     sourceUniverse,
    //     deityDescription,
    //     images
    // );
    // uploadImage(images, modifiedName);
    // setModifyMode(false); 
    // if (deity == null) {
    //     setModalOpen(false);
    // }
};

  const handleAdd = async ()=> {
    const imageName = `${modifiedName}.${images[0].file.name.split('.').pop()}`;
    await postDeity(
      zen,
      organization,
      squeamishness,
      technology,
      temperament,
      zealousness,
      aggression,
      erudition,
      grandeur,
      morality,
      mysticism,
      modifiedName,
      sourceUniverse,
      deityDescription,
      imageName
      );
      uploadImage(images, modifiedName);
      setModifyMode(false); 
      if (deity == null) {
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
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
        setZealousness(parseFloat(e.target.value));
    } else if (e.target.value ===""){
        setZealousness("");
    } else {
      console.log("Input is not a valid float.");
  }
};

const handleMysticismChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setMysticism(value);
  } else if (e.target.value === "") {
      setMysticism("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleSqueamishnessChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setSqueamishness(value);
  } else if (e.target.value === "") {
      setSqueamishness("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleTechnologyChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setTechnology(value);
  } else if (e.target.value === "") {
      setTechnology("");
  } else {
      console.log("Input is not a valid float.");
  }
};
const handleEruditionChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setErudition(value);
  } else if (e.target.value === "") {
      setErudition("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleOrganizationChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setOrganization(value);
  } else if (e.target.value === "") {
      setOrganization("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleMoralityChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setMorality(value);
  } else if (e.target.value === "") {
      setMorality("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleZenChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setZen(value);
  } else if (e.target.value === "") {
      setZen("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleAggressionChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setAggression(value);
  } else if (e.target.value === "") {
      setAggression("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleGrandeurChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setGrandeur(value);
  } else if (e.target.value === "") {
      setGrandeur("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleTemperamentChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setTemperament(value);
  } else if (e.target.value === "") {
      setTemperament("");
  } else {
      console.log("Input is not a valid float.");
  }
};


  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setImageFile(file);
  // };

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
                      <UploadImage images={images} setImages={setImages} deityName={modifiedName}/>
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