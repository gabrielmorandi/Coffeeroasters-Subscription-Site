import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

import GranExpresso from "../assets/home/desktop/image-gran-espresso.png"
import Planalto from "../assets/home/desktop/image-planalto.png"
import Picollo from "../assets/home/desktop/image-piccollo.png"
import Danche from "../assets/home/desktop/image-danche.png"
import CoffeeBean from "../assets/home/desktop/icon-coffee-bean.svg"
import ExclusiveBenefits from "../assets/home/desktop/icon-gift.svg"
import FreeShipping from "../assets/home/desktop/icon-truck.svg"

function HomePage() {
  return (
    <>
      <Header type="home" />
      <main>
        <section id="collection">
          <div className="container-flex">
            <h2>our collection</h2>
            <div className="card">
              <img src={GranExpresso} alt="Gran Expresso" />
              <div className="card-content">
                <h3>Gran Expresso</h3>
                <p>
                  Light and flavorful blend with cocoa and black pepper for an
                  intense experience
                </p>
              </div>
            </div>
            <div className="card">
              <img src={Planalto} alt="Planalto" />
              <div className="card-content">
                <h3>Planalto</h3>
                <p>
                  Brazilian dark roast with rich and velvety body, and hints of
                  fruits and nuts
                </p>
              </div>
            </div>
            <div className="card">
              <img src={Picollo} alt="Picollo" />
              <div className="card-content">
                <h3>Piccollo</h3>
                <p>
                  Mild and smooth blend featuring notes of toasted almond and
                  dried cherry
                </p>
              </div>
            </div>
            <div className="card">
              <img src={Danche} alt="Danche" />
              <div className="card-content">
                <h3>Danche</h3>
                <p>
                  Ethiopian hand-harvested blend densely packed with vibrant
                  fruit notes
                </p>
              </div>
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
                <div className="why-card-content">
                  <h3>Best quality</h3>
                  <p>
                    Discover an endless variety of the world’s best artisan
                    coffee from each of our roasters.
                  </p>
                </div>
              </div>
              <div className="why-card">
                <img src={ExclusiveBenefits} alt="Exclusive benefits" />
                <div className="why-card-content">
                  <h3>Exclusive benefits</h3>
                  <p>
                    Special offers and swag when you subscribe, including 30%
                    off your first shipment.
                  </p>
                </div>
              </div>
              <div className="why-card">
                <img src={FreeShipping} alt="Free shipping" />
                <div className="why-card-content">
                  <h3>Free shipping</h3>
                  <p>
                    We cover the cost and coffee is delivered fast. Peak
                    freshness: guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how">
          <div className="container-flex">
            <div className="how-header">
              <h2>How it works</h2>
              <div className="items">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>
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
              <Link to={"/plan"}>
                <button>Create your plan</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
