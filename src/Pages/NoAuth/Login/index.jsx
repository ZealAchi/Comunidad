import React from "react";

export default function Login({ setMode }) {
  const login = {
    data: {
      typeModal: "login",
      data: [
        { value: "luis", label: "usuario",placeholder:"Ingresa tu usuario" },
        { value: "127asd127", label: "contraseña",placeholder:"Ingresa tu contraseña" }
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
