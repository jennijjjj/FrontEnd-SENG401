import React, { useEffect } from 'react'
import { usePopup } from './PopupContext'

const fullPageDivStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',// set background color as needed
  };

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: 'fit-content',
    backgroundColor: 'white',
    borderRadius: '10px', 
    textAlign: 'center', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Update boxShadow
    padding: '20px',
    color: 'black',
  };
  
  
const Popup = () => {
   const { symbol, title, text, clearPopup} = usePopup();
 
   function closeModal() {
    clearPopup();
   }

   return (
     
        <div style={{ display: title ? 'block' : 'none' }}>
            <div style={{...fullPageDivStyle}}>
            <div style={{...boxStyle}}>
                <h2>{symbol}</h2>
                <h2>{title}</h2>
                <p>{text}</p>
                <button className='submit-button' onClick={closeModal}>Ok</button>
            </div>
        </div>
     </div>
   );
 }
  
export default Popup