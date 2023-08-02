import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Logo from "../assets/shared/desktop/logo.svg"
import LogoWhite from "../assets/shared/desktop/logo-white.svg"
import MenuIcon from "../assets/shared/mobile/icon-hamburger.svg"
import Facebook from "../assets/shared/desktop/icon-facebook.svg"
import Twitter from "../assets/shared/desktop/icon-twitter.svg"
import Instagram from "../assets/shared/desktop/icon-instagram.svg"

function Plan() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden"
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menuIsOpen])
  return (
    <>
      <header>
        <nav>
          <div className="container-flex">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Coffeeroasters" />
              </Link>
              <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <img src={MenuIcon} alt="Menu" />
              </button>
            </div>
            <div className="menu-desktop">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/plan">Create Your Plan</Link>
            </div>
            {menuIsOpen && (
              <div className="menu-mobile">
                <div className="container-flex">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/plan">Create Your Plan</Link>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="hero">
          <div className="container-flex plan-img">
            <h2>Create a plan</h2>
            <p>
              Build a subscription plan that best fits your needs. We offer an
              assortment of the best artisan coffees from around the globe
              delivered fresh to your door.
            </p>
          </div>
        </div>
      </header>
    </>
  )
}

export default Plan
