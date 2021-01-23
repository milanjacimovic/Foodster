import React from "react";
import "./navigation.styles.scss";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <a href="#recipes">Recipes</a>
      </li>
      <li>
        {" "}
        <a href="#meals">Meal plan</a>
      </li>
      <li>
        {" "}
        <a href="#about">About</a>
      </li>
      <li>
        {" "}
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
