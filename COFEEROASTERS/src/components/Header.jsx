import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Logo from "../assets/shared/desktop/logo.svg"
import MenuIcon from "../assets/shared/mobile/icon-hamburger.svg"

const Header = ({ type }) => {
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
        <div
          className={
            type === "home"
              ? "container-flex"
              : type === "about"
              ? "container-flex about-img"
              : type === "plan"
              ? "container-flex plan-img"
              : null
          }
        >
          {type === "home" ? (
            <>
              <h2>Great coffee made simple.</h2>
              <p>
                Start your mornings with the world’s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
              </p>
            </>
          ) : type === "about" ? (
            <>
              <h2>About Us</h2>
              <p>
                Coffeeroasters began its journey of exotic discovery in 1999,
                highlighting stories of coffee from around the world. We have
                since been dedicated to bring the perfect cup - from bean to
                brew - in every shipment.
              </p>
            </>
          ) : type === "plan" ? (
            <>
              <h2>Create plan</h2>
              <p>
                Coffee the way you wanted it to be. For coffee delivered
                tomorrow, or next week. For whatever brew method you use. For
                choice, for convenience, for quality.
              </p>
            </>
          ) : null}
          {type === "home" ? (
            <div className="button-primary">
              <Link to={"/plan"}>
                <button>Create your plan</button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Header
