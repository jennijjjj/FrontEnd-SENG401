import React, { useState, useEffect } from 'react';
import {UploadImage} from './UploadImage';
import { deleteDeity } from './ApiRequests/DeleteRequests';
import { ImageReader } from './ImageReader';
import { putDeity } from './ApiRequests/ModifyRequests';
function DeityCard({deity, setModalOpen, fetchJsonData}) {
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
  const [imagePath, setImagePath] = useState("");

  const rerenderPage =()=>{
    if (deity) {
      setModifyMode(false);
      setModifiedName(deity.DeityName);
      setSourceUniverse(deity.SourceUniverse);
      setDeityDescription(deity.DeityDescription);
      setZealousness(deity.Zealousness);
      setMysticism(deity.Mysticism);
      setSqueamishness(deity.Squeamishness);
      setTechnology(deity.Technology);
      setErudition(deity.Erudition);
      setOrganization(deity.Organization);
      setMorality(deity.Morality);
      setZen(deity.Zen);
      setAggression(deity.Aggression);
      setGrandeur(deity.Grandeur);
      setTemperament(deity.Temperament);
      if (deity.ImagePath) {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp']; // Add more extensions if needed
        const lowerImagePath = deity.ImagePath.toLowerCase();
        const hasValidExtension = imageExtensions.some(ext => lowerImagePath.endsWith(ext));
      
        if (hasValidExtension) {
          setImagePath(`./images/${deity.ImagePath}`);
        }
      }
      try{
        if (imagePath!==""){
          ImageReader({ imagePath })
            .then(imageInfo => {
              console.log('Image info:', imageInfo);
            })
            .catch(error => {
              console.error('Error reading image:', error);
            });
        }
        console.log(imagePath);

      }catch (error){

      }
          
  }

  }
  useEffect(() => {
    rerenderPage();
}, [deity]);

  
const checkForNullAndAlert = () => {
  let nullProperties = '';

  // if (deity.Aggression === null || deity.Aggression === undefined) nullProperties += 'Aggression\n';
  // if (deity.Erudition === null || deity.Erudition === undefined) nullProperties += 'Erudition\n';
  // if (deity.Grandeur === null || deity.Grandeur === undefined) nullProperties += 'Grandeur\n';
  // if (deity.Morality === null || deity.Morality === undefined) nullProperties += 'Morality\n';
  // if (deity.Mysticism === null || deity.Mysticism === undefined) nullProperties += 'Mysticism\n';
  // if (deity.Organization === null || deity.Organization === undefined) nullProperties += 'Organization\n';
  // if (deity.Squeamishness === null || deity.Squeamishness === undefined) nullProperties += 'Squeamishness\n';
  // if (deity.Technology === null || deity.Technology === undefined) nullProperties += 'Technology\n';
  // if (deity.Temperament === null || deity.Temperament === undefined) nullProperties += 'Temperament\n';
  // if (deity.Zealousness === null || deity.Zealousness === undefined) nullProperties += 'Zealousness\n';
  // if (deity.Zen === null || deity.Zen === undefined) nullProperties += 'Zen\n';

  return nullProperties;
};


  const handleDelete = async () => {
    // const result =deleteImage(modifiedName);
    // if (result===1){
    const userResponse = window.confirm(`Are you sure you want to delete ${modifiedName}?`);
    if (userResponse) {
      
      await deleteDeity(modifiedName);
      fetchJsonData();
    } 
   
  };

  const handleSave = async () => {
    if (checkForNullAndAlert()!==""){
      window.alert(`Ensure name and attributes are not null.`);
    } else{
      let imageName = "";
    if (images.length>0){
      imageName = `${modifiedName}.${images[0].file.name.split('.').pop()}`;
    }
    try {
      await putDeity(
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
        setModifyMode(false); 
        if (deity == null) {
            setModalOpen(false);
        }
    } catch (error) {
        
    }  

    }
    
  };

  const postDeity = async (Zen,Organization,Squeamishness, Technology, Temperament, Zealousness,Aggression,Erudition,Grandeur,Morality,Mysticism,DeityName, SourceUniverse, DeityDescription, ImagePath) => {
    const data ={
        DeityName: DeityName,
        DeityDescription: DeityDescription,
        SourceUniverse: SourceUniverse,
        ImagePath:ImagePath,
        AGGRESSION:Aggression, 
        ERUDITION:Erudition,
        GRANDEUR:Grandeur,
        MORALITY:Morality,
        MYSTICISM:Mysticism,
        ORGANIZATION:Organization,
        SQUEAMISHNESS:Squeamishness,
        TECHNOLOGY:Technology,
        TEMPERAMENT:Temperament,
        ZEALOUSNESS:Zealousness,
        ZEN:Zen    
    }
    try {
        fetch('/Admin/Deities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    console.log(response)
                    alert(`Error: could not add diety.`);
                throw new Error('Network response was not ok');
                }
                alert(`Successfully added ${DeityName}!`);
                setModifyMode(false); 
                if (deity == null) {
                    setModalOpen(false);
                }
                return response.json();
            })
            .then(data => {
                console.log('POST request successful');
                alert(`Successfully added ${DeityName}!`);
                setModifyMode(false); 
                if (deity == null) {
                    setModalOpen(false);
                }
                console.log(data); // Response data from the server
            })
            .catch(error => {
                console.error('Error during POST request:', error);
                
            });
    } 
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error for the caller to handle
    }
};

  const handleAdd = async ()=> {
    if (checkForNullAndAlert()!==""){
      window.alert(`Ensure name and attributes are not null.`);
    } else{
      let imageName = "";
    if (images.length>0){
      imageName = `${modifiedName}.${images[0].file.name.split('.').pop()}`;
    }
    try {
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
        
        // alert(`ahError: could not add diety.`);
        
    } catch (error) {
      // alert(`ahSuccessfully added ${error}!`);
      // setModifyMode(false); 
      //   if (deity == null) {
      //       setModalOpen(false);
      //   }
        
    }  
  }
};
  const handleCancel = () => {
    rerenderPage();
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
        setZealousness(Number(e.target.value));
    } else if (e.target.value === "") {
        setZealousness("");
    } else {
        console.log("Input is not a valid double.");
    }
};

const handleMysticismChange = (e) => {
  const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setMysticism(Number(e.target.value));
    } else if (e.target.value === "") {
      setMysticism("");
    } else {
        console.log("Input is not a valid double.");
    }
};

const handleSqueamishnessChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(Number(e.target.value))) {
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
      setTechnology(Number(e.target.value));
  } else if (e.target.value === "") {
      setTechnology("");
  } else {
      console.log("Input is not a valid float.");
  }
};
const handleEruditionChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setErudition(Number(e.target.value));
  } else if (e.target.value === "") {
      setErudition("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleOrganizationChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setOrganization(Number(e.target.value));
  } else if (e.target.value === "") {
      setOrganization("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleMoralityChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setMorality(Number(e.target.value));
  } else if (e.target.value === "") {
      setMorality("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleZenChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setZen(Number(e.target.value));
  } else if (e.target.value === "") {
      setZen("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleAggressionChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setAggression(Number(e.target.value));
  } else if (e.target.value === "") {
      setAggression("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleGrandeurChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setGrandeur(Number(e.target.value));
  } else if (e.target.value === "") {
      setGrandeur("");
  } else {
      console.log("Input is not a valid float.");
  }
};

const handleTemperamentChange = (e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
      setTemperament(Number(e.target.value));
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
            disabled={deity !== undefined }
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
                      <UploadImage images={images} setImages={setImages} deityName={modifiedName} deityImagePath={imagePath}/>
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