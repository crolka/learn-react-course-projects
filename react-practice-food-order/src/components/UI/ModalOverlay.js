import React from "react";

import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <header>
        <h2>{props.header}</h2>
      </header>
      <div className={classes.content}>{props.children}</div>
      <footer>
        <p>{props.footer}</p>
      </footer>
    </div>
  );
};

export default ModalOverlay;