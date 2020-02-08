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
          <Link to={`/Login`}>Login</Link>
        </div>
        <div>
          <Link to={`/Register`}>Register</Link>
        </div>
      </div>
    </>
  );
}
