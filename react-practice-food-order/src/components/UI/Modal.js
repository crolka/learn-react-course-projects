import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  const portalElement = document.querySelector("#modal-root");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay 
          
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
      
    </Fragment>
  );
};

export default Modal;
// header={props.header} 
// footer={props.footer}