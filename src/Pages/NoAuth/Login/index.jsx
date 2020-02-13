import React from "react";

export default function Login({ setMode }) {
  const login = {
    data: {
      typeModal: "Iniciar Sesión",
      data: [
        { value: "luis", label: "usuario",placeholder:"Ingresa tu usuario" ,type:'text' },
        { value: "127asd127", label: "contraseña",placeholder:"Ingresa tu contraseña",type:'text' }
      ]
    }
  };
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
    </>
  );
}
