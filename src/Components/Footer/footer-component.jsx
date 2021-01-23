import React from "react";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="footer__row">
      <div className="footer__row--col1">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#meals">Meals</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer__row--col2">
        <ul>
          <li>
            <a href="https://github.com/milanjacimovic" target="_blank" rel="noreferrer">
              <FaGithubSquare className="social-icon github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/milanjacimovic/" target="_blank" rel="noreferrer">
              <FaLinkedin className="social-icon linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/unavailablern" target="_blank" rel="noreferrer">
              <FaFacebookSquare className="social-icon facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/milan_jacimovic/" target="_blank" rel="noreferrer">
              <FaInstagramSquare className="social-icon instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer__about">Copyright © 2021 by Milan Jaćimović.</div>
    <div className="footer__download">
      <a
        // CV link will be fixed before the production
        className="btn btn--white btn--animated"
        href="pizza-wine.jpeg"
        download="Milan Jaćimović CV"
        target="_blank"
      >
        Download cv
      </a>
    </div>
  </footer>
);

export default Footer;
