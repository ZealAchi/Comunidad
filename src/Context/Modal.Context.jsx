import React, {useState,createContext} from 'react'

export const ModalContext=createContext()
const initialData={
    data:{
        
    }
}
export default function Modal({children}){
 const [state,setState]=useState(initialData)   
    return(
        <ModalContext.Provider value={{...state}}>
        {children}
        </ModalContext.Provider>
    )
}