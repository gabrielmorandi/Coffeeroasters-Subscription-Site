import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Logo from "../assets/shared/desktop/logo.svg"
import LogoWhite from "../assets/shared/desktop/logo-white.svg"
import MenuIcon from "../assets/shared/mobile/icon-hamburger.svg"
import Commitment from "../assets/about/mobile/image-commitment.jpg"
import Quality from "../assets/about/mobile/image-quality.jpg"
import UK from "../assets/about/desktop/illustration-uk.svg"
import Australia from "../assets/about/desktop/illustration-australia.svg"
import Canada from "../assets/about/desktop/illustration-canada.svg"
import Facebook from "../assets/shared/desktop/icon-facebook.svg"
import Twitter from "../assets/shared/desktop/icon-twitter.svg"
import Instagram from "../assets/shared/desktop/icon-instagram.svg"

function AboutPage() {
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
          <div className="container-flex about-img">
            <h2>About Us</h2>
            <p>
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </div>
      </header>
      <main>
        <section id="commitment">
          <div className="container-flex">
            <div className="our">
              <img src={Commitment} alt="Our commitment" />
              <h2>Our Commitment</h2>
              <p>
                We’re built on a simple mission and a commitment to doing good
                along the way. We want to make it easy for you to discover and
                brew the world’s best coffee at home. It all starts at the
                source. To locate the specific lots we want to purchase, we
                travel nearly 60 days a year trying to understand the challenges
                and opportunities in each of these places. We collaborate with
                exceptional coffee growers and empower a global community of
                farmers through with well above fair-trade benchmarks. We also
                offer training, support farm community initiatives, and invest
                in coffee plant science. Curating only the finest blends, we
                roast each lot to highlight tasting profiles distinctive to
                their native growing region.
              </p>
            </div>
            <div className="quality"></div>
          </div>
        </section>
        <section id="quality">
          <div className="container-flex">
            <img src={Quality} alt="Uncompromising quality" />
            <h2>Uncompromising quality</h2>
            <p>
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </section>
        <section id="headquarters">
          <div className="container-flex">
            <h2>Our headquarters</h2>
            <div className="headquarters-card">
              <img src={UK} alt="United Kingdom" />
              <h2>United Kingdom</h2>
              <p>
                68 Asfordby Rd <br />
                Alcaston <br />
                SY6 1YA <br />
                +44 1241 918425
              </p>
            </div>
            <div className="headquarters-card">
              <img src={Canada} alt="Canada" />
              <h2>Candada</h2>
              <p>
                1528 Eglinton Avenue <br />
                Toronto <br />
                Ontario M4P 1A6 <br />
                +1 416 485 2997
              </p>
            </div>
            <div className="headquarters-card">
              <img src={Australia} alt="Australia" />
              <h2>Australia</h2>
              <p>
                36 Swanston Street <br />
                Kewell <br />
                Victoria <br />
                +61 4 9928 3629
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container-flex">
          <div className="logo">
            <img src={LogoWhite} alt="Coffeeroasters" />
          </div>
          <div className="menu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Create Your Plan</a>
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
    </>
  )
}

export default AboutPage
