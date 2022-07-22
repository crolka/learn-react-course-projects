import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  const portalElement = document.querySelector("#modal-root");
  // const portalElement = document.getElementById("modal-root");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay 
          header={"React Meals Cart"} 
          footer={"Thank you for your business"}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
      
    </Fragment>
  );
};

export default Modal;
// // 
// // 