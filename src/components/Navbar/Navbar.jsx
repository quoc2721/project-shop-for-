import React from "react";
import "../Navbar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faHeart,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="n-container">
      <div className="n-row">
        <div className="n-col">
          <span className="n-email">quoc020721@gmail.com</span>
          <span>
            <FontAwesomeIcon icon={faUser} /> Guest
          </span>
        </div>
        <div className="n-col">
          <div className="socials">
            <a href="#">
              <img src="/img/facebook.png" alt="" />
            </a>
            <a href="#">
              <img src="/img/instagram.png" alt="" />
            </a>
            <a href="#">
              <img src="/img/twitter.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="n-row">
        <div className="n-col">
          <a href="#">
            <h1 className="logo">LOGO</h1>
          </a>
        </div>
        <div className="n-col">
          <div className="icons">
            <a href="/login">
              <span>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                Login
              </span>
            </a>
            <a href="/wish">
              <span>
                <FontAwesomeIcon icon={faHeart} />
                <span className="totalItems">0</span>
              </span>
            </a>
            <a href="/cart">
              <span>
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className="totalItems">0</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="n-row">
        <nav className="nav">
          <ul className="items">
            <li className="list">
              <a href="/">Home</a>
            </li>
            <li className="list">
              <a href="/shop">Shop</a>
            </li>
            <li className="list">
              <a href="/about">About</a>
            </li>
            <li className="list">
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <button className="btn">BTN</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
