import React from "react";
import { Link } from "react-router-dom";
export default function NoAuth() {
  return (
    <>
      NoAuth
      <div
        style={{ padding: 12, flex: 1, display: "flex", flexDirection: "row" }}
      >
        <div style={{ marginRight: "8%" }}>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalGlobal">
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
