import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {ModalContext} from './../../Context/Modal.Context'
import Login from './Login'
export default function NoAuth() {
  const Context =useContext(ModalContext)
  const {setMode}=Context
  return (
    <>
      NoAuth
      <div
        style={{ padding: 12, flex: 1, display: "flex", flexDirection: "row" }}
      >
        <div style={{ marginRight: "8%" }}>
          <Login setMode={setMode}/>
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
