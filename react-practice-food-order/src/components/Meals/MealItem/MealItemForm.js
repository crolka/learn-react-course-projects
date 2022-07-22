import React from "react";

import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   console.log(`The ${props.id} form was submitted!!!`)
  // };

  return (
    <form className={classes.form}>
      <Input
        id={props.id}
        value={1}
        title="Amount"
        input={{
          id: `amount-${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
