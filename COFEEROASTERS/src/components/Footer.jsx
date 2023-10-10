import React from "react"
import { Link } from "react-router-dom"

import LogoWhite from "../assets/shared/desktop/logo-white.svg"
import Facebook from "../assets/shared/desktop/icon-facebook.svg"
import Twitter from "../assets/shared/desktop/icon-twitter.svg"
import Instagram from "../assets/shared/desktop/icon-instagram.svg"

const Footer = () => {
  return (
    <footer>
      <div className="container-flex">
        <div className="footer-header">
          <div className="logo">
            <img src={LogoWhite} alt="Coffeeroasters" />
          </div>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/plan">Create Your Plan</Link>
          </div>
        </div>
        <div className="socials">
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
