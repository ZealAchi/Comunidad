import React, { useContext, useState,useEffect } from "react";
import { ModalContext } from "./../../Context/Modal.Context";

const Modal = () => {
  const { data = [] } = useContext(ModalContext);
  const [state, setState] = useState({});
  const { data: dataV = [] } = data;

  useEffect(() => {
    {
      Object.keys(dataV).forEach(key => {
        setState({ ...state, la: key, value: dataV[key] });
      });
    }
  }, [dataV]);
  const Item = () => {
    console.log(state)
    return <div className="jumbotron" />;
  };
  // console.log("data", dataV);

  return (
    <>
      <div
        className="modal fade"
        id="ModalGlobal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="ModalGlobalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalGlobalTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Item />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
