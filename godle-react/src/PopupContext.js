
import React, { createContext, useState, useContext } from 'react'

const PopupContext = createContext()

export const PopupProvider = ({ children }) => {
   const [symbol, setSymbol] = useState()
   const [title, setTitle] = useState()
   const [text, setText] = useState()
   const triggerPopup = (symbol, title, text) => {
    setSymbol(symbol);
    setTitle(title);
    setText(text);
  };
   const clearPopup = () => {
    setSymbol();
    setTitle();
    setText();
  };
   
   return (
     <PopupContext.Provider value={{ symbol, title, text, triggerPopup, clearPopup }}>
       {children}
     </PopupContext.Provider>
    )
}

export const usePopup = () => useContext(PopupContext)