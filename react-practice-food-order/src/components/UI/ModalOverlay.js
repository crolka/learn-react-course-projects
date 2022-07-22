import React from "react";
import Card from "./Card";

import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      
      <div className={classes.content}>{props.children}</div>
      
    </Card>
  );
};

export default ModalOverlay;
/* <header>
        <h2>{props.header}</h2>
      </header><footer>
        <p>{props.footer}</p>
      </footer> */