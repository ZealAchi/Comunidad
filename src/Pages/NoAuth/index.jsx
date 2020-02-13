import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {ModalContext} from './../../Context/Modal.Context'
export default function NoAuth() {
  const Context =useContext(ModalContext)
  const {setMode}=Context
  const login={
    data:{
        typeModal:'login',
        data:{
          user:'luis',
          password:"127asd127"
        }
    }
}
  
  return (
    <>
      NoAuth
      <div
        style={{ padding: 12, flex: 1, display: "flex", flexDirection: "row" }}
      >
        <div style={{ marginRight: "8%" }}>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalGlobal"
          onClick={()=>setMode(login)}
          >
            Inicia Sesión
          </button>
        </div>
        <div>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalGlobal">
            Registrate
        </button>
        </div>
      </div>
    </>
  );
}
