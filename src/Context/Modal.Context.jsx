import React, { useState, createContext } from "react";

export const ModalContext = createContext();
const initialData={
  
}
export default function Modal({ children }) {
  const [state, setState] = useState(initialData);
  function setMode({data}) {
    console.log(data)
    setState({data});
  }
  return (
    <ModalContext.Provider value={{ ...state, setMode: setMode }}>
      {children}
    </ModalContext.Provider>
  );
}
