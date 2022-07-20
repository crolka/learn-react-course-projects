import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const inputValueChangeHandler = (eventObj) => {
    console.log("Something changed on the input.");
  };

  // pass in an input object with all the configuration properties
  // needed for any input control
  // use the spread operator {...props.input} to ensure that all
  // properties in the input object are laid out no matter which
  // properties are passed in. There is no need to interpret these
  // values. we can just distribute them using the spread operator.
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.title}</label>
      <input        
        {...props.input}
        onChange={inputValueChangeHandler}
      />
    </div>
  );
};

export default Input;
