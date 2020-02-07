import React,{useState,createContext} from 'react'

export const LoadContext=createContext()
const initialData={
  data:{
    loading:true,
  }
}
export default function LoadContextProvider({children}){
  const [state,setState]=useState(initialData)
  return(
    <LoadContext.Provider value={{...state}}>
      {children}
    </LoadContext.Provider>
  )
}