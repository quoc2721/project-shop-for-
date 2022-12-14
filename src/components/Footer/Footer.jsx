import React from "react";
import { NavLink } from "react-router-dom";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="f-container">
      <div className="f-row">
        <div className="f-col">
          <a href="#">
            <h1 className="logo">LOGO</h1>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
            nesciunt! Ipsum repellat saepe, similique magnam aut ducimus eveniet
            nobis ut sunt neque harum consequatur.
          </p>
        </div>
        <div className="f-col">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="f-col">
          <h2>Category</h2>
          <ul>
            <li>
              <NavLink to="/">Men</NavLink>
            </li>
            <li>
              <NavLink to="/">Women</NavLink>
            </li>
            <li>
              <NavLink to="/">Kids</NavLink>
            </li>
          </ul>
        </div>
        <div className="f-col">
          <h2>Stay in touch with us</h2>
          <div className="socials">
            <a href="/">
              <img src="/images/socials/facebook.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/socials/instagram.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/socials/twitter.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="f-copyrow">
        <p>&copy; 2022. All Rights Reserved. Powered by Miljan Peric.</p>
      </div>
    </div>
  );
};

export default Footer;
