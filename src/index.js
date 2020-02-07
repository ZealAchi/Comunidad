import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./Context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <AppContainer />
    </>
  );
}
if (document.getElementById("react_root")) {
  ReactDOM.render(<App />, document.getElementById("react_root"));
}
