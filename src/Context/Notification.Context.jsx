import React,{useState,createContext} from 'react'

export const NotificationContext=createContext()
const initialData={
  data:{
    type:'Avisosad',
    owner:'Luis Anasdtonio',
    message:'Hola',
    view:false
  }
}
export default function NotificationContextProvider({children}){
  const [state,setState]=useState(initialData)
  return(
    <NotificationContext.Provider value={{...state}}>
      {children}
    </NotificationContext.Provider>
  )
}