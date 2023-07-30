import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Logo from "../assets/shared/desktop/logo.svg"
import LogoWhite from "../assets/shared/desktop/logo-white.svg"
import MenuIcon from "../assets/shared/mobile/icon-hamburger.svg"
import GranExpresso from "../assets/home/desktop/image-gran-espresso.png"
import Planalto from "../assets/home/desktop/image-planalto.png"
import Picollo from "../assets/home/desktop/image-piccollo.png"
import Danche from "../assets/home/desktop/image-danche.png"
import CoffeeBean from "../assets/home/desktop/icon-coffee-bean.svg"
import ExclusiveBenefits from "../assets/home/desktop/icon-gift.svg"
import FreeShipping from "../assets/home/desktop/icon-truck.svg"
import Facebook from "../assets/shared/desktop/icon-facebook.svg"
import Twitter from "../assets/shared/desktop/icon-twitter.svg"
import Instagram from "../assets/shared/desktop/icon-instagram.svg"

function HomePage() {
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
          <div className="container-flex">
            <h2>Great coffee made simple.</h2>
            <p>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <div className="button-primary">
              <a href="#">
                <button>Create your plan</button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="collection">
          <div className="container-flex">
            <h2>our collection</h2>
            <div className="card">
              <img src={GranExpresso} alt="Gran Expresso" />
              <h3>Gran Expresso</h3>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
            <div className="card">
              <img src={Planalto} alt="Planalto" />
              <h3>Planalto</h3>
              <p>
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
            <div className="card">
              <img src={Picollo} alt="Picollo" />
              <h3>Piccollo</h3>
              <p>
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry
              </p>
            </div>
            <div className="card">
              <img src={Danche} alt="Danche" />
              <h3>Danche</h3>
              <p>
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
        </section>
        <section id="why">
          <div className="container-flex">
            <div className="why-header">
              <h2>Why choose us?</h2>
              <p>
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                the best coffee growers to give you a more impactful experience
                on every level.
              </p>
            </div>
            <div className="why-cards">
              <div className="why-card">
                <img src={CoffeeBean} alt="Coffee Bean" />
                <h3>Best quality</h3>
                <p>
                  Discover an endless variety of the world’s best artisan coffee
                  from each of our roasters.
                </p>
              </div>
              <div className="why-card">
                <img src={ExclusiveBenefits} alt="Exclusive benefits" />
                <h3>Exclusive benefits</h3>
                <p>
                  Special offers and swag when you subscribe, including 30% off
                  your first shipment.
                </p>
              </div>
              <div className="why-card">
                <img src={FreeShipping} alt="Free shipping" />
                <h3>Free shipping</h3>
                <p>
                  We cover the cost and coffee is delivered fast. Peak
                  freshness: guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how">
          <div className="container-flex">
            <h2>How it works</h2>
            <div className="how-cards">
              <div className="how-card">
                <span className="how-span">01</span>
                <h3>Pick your coffee</h3>
                <p>
                  Select from our evolving range of artisan coffees. Our beans
                  are ethically sourced and we pay fair prices for them. There
                  are new coffees in all profiles every month for you to try
                  out.
                </p>
              </div>
              <div className="how-card">
                <span className="how-span">02</span>
                <h3>Choose the frequency</h3>
                <p>
                  Customize your order frequency, quantity, even your roast
                  style and grind type. Pause, skip or cancel your subscription
                  with no commitment through our online portal.
                </p>
              </div>
              <div className="how-card">
                <span className="how-span">03</span>
                <h3>Receive and enjoy!</h3>
                <p>
                  We ship your package within 48 hours, freshly roasted. Sit
                  back and enjoy award-winning world-className coffees curated
                  to provide a distinct tasting experience.
                </p>
              </div>
            </div>
            <div className="button-primary">
              <a href="#">
                <button>Create your plan</button>
              </a>
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

export default HomePage
