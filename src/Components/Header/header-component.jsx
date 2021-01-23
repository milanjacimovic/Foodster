import React from "react";
import "./header.styles.scss";
import Logo from "../../../src/assets/img/logo.png";
import Navigation from "../Navigation/navigation-component";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-box">
        <img src={Logo} alt="" className="logo" />
        {/* <nav>
          <ul>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              {" "}
              <a href="#">Meal plan</a>
            </li>
            <li>
              {" "}
              <a href="#about">About</a>
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav> */}
        <Navigation />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Foodster</span>
          <span className="heading-primary-sub">bon appetit!</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
