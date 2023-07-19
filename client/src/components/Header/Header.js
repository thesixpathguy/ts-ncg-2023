import React from "react";
import classes from "./Header.module.css"; // Import the CSS file

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>World Bank Data Indicator</h1>
    </header>
  );
};

export default Header;
