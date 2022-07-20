// import React from "react"; // ---- OR ----
import { Fragment } from "react"; // then just reference <Fragment>

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Lots of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;