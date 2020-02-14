import React,{useState} from "react";

export default function Login({ setMode }) {
 
  const login = {
    data: {
      typeModal: "Iniciar Sesión",
      data: [
        { value: "luis", label: "usuario",placeholder:"Ingresa tu usuario",type:'text' },
        { value: "127asd127", label: "contraseña",placeholder:"Ingresa tu contraseña",type:'password' },
        { type:'button',label:"Enviar", submit:(props)=>{console.log('XD',props)} }
      ]
    }
  };
  const [state,setState]= useState(login.data.data)
  console.log(state)
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#ModalGlobal"
        onClick={() => setMode(login)}
      >
        Inicia Sesión
      </button>
      {state.map((item,i)=>{
        console.log(item)
        if(item.type==='button') return <></>
      return(
        <input key={i}
                type="text"
                // value={item.value}
                onChange={(e)=>{console.log(e)}}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder={'item.placeholder'}
              />
      )})}
      
    </>
  );
}
