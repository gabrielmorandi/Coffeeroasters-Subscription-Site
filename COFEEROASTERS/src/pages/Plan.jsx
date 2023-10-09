import React, { useState } from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"

import LogoWhite from "../assets/shared/desktop/logo-white.svg"
import Arrow from "../assets/plan/desktop/icon-arrow.svg"
import Facebook from "../assets/shared/desktop/icon-facebook.svg"
import Twitter from "../assets/shared/desktop/icon-twitter.svg"
import Instagram from "../assets/shared/desktop/icon-instagram.svg"

function Plan() {
  const [select1, setSelect1] = useState(true)
  const [selectedInput1, setSelectedInput1] = useState("Filter")

  const [select2, setSelect2] = useState(true)
  const [selectedInput2, setSelectedInput2] = useState("Decaf")

  const [select3, setSelect3] = useState(true)
  const [selectedInput3, setSelectedInput3] = useState("250g")

  const [select4, setSelect4] = useState(true)
  const [selectedInput4, setSelectedInput4] = useState("Cafetiére")

  const [select5, setSelect5] = useState(true)
  const [selectedInput5, setSelectedInput5] = useState("Every Week")

  return (
    <>
      <Header type="plan" />
      <main>
        <section id="plans">
          <div className="container-flex">
            <div className="plan">
              <h2>01</h2>
              <h3>Pick your coffee</h3>
              <p>
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
            <div className="plan">
              <h2>02</h2>
              <h3>Choose the frequency</h3>
              <p>
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>
            <div className="plan">
              <h2>03</h2>
              <h3>Receive and enjoy!</h3>
              <p>
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>
        </section>
        <section id="make-plan">
          <div className="container-flex">
            <form id="form" action="">
              <div className="select">
                <div
                  className="select-header"
                  onClick={() => setSelect1(!select1)}
                >
                  <h2>How do you drink your coffee?</h2>
                  <img
                    src={Arrow}
                    alt="Arrow"
                    className={select1 != true ? "" : "invert-arrow"}
                  />
                </div>
                {select1 && (
                  <div className="select-content">
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee"
                        id="capsule"
                        onChange={() => setSelectedInput1("Capsule")}
                      />
                      <label
                        htmlFor="capsule"
                        className={
                          selectedInput1 == "Capsule" ? "selected" : null
                        }
                      >
                        <h3>Capsule</h3>
                        <p>
                          Compatible with Nespresso systems and similar brewers
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee"
                        id="filter"
                        onChange={() => setSelectedInput1("Filter")}
                      />
                      <label
                        htmlFor="filter"
                        className={
                          selectedInput1 == "Filter" ? "selected" : null
                        }
                      >
                        <h3>Filter</h3>
                        <p>
                          For pour over or drip methods like Aeropress, Chemex,
                          and V60
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee"
                        id="espresso"
                        onChange={() => setSelectedInput1("Espresso")}
                      />
                      <input type="radio" name="coffee" id="espresso" />
                      <label
                        htmlFor="espresso"
                        className={
                          selectedInput1 == "Espresso" ? "selected" : null
                        }
                      >
                        <h3>Espresso</h3>
                        <p>
                          Dense and finely ground beans for an intense,
                          flavorful experience
                        </p>
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className="select">
                <div
                  className="select-header"
                  onClick={() => setSelect2(!select2)}
                >
                  <h2>What type of coffee?</h2>
                  <img
                    src={Arrow}
                    alt="Arrow"
                    className={select2 != true ? "" : "invert-arrow"}
                  />
                </div>
                {select2 && (
                  <div className="select-content">
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-type"
                        id="origin"
                        onChange={() => setSelectedInput2("Single Origin")}
                      />
                      <label
                        htmlFor="origin"
                        className={
                          selectedInput2 == "Single Origin" ? "selected" : null
                        }
                      >
                        <h3>Single Origin</h3>
                        <p>
                          Distinct, high quality coffee from a specific
                          family-owned farm
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-type"
                        id="decaf"
                        onChange={() => setSelectedInput2("Decaf")}
                      />
                      <label
                        htmlFor="decaf"
                        className={
                          selectedInput2 == "Decaf" ? "selected" : null
                        }
                      >
                        <h3>Decaf</h3>
                        <p>
                          Just like regular coffee, except the caffeine has been
                          removed
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-type"
                        id="blended"
                        onChange={() => setSelectedInput2("Blended")}
                      />
                      <label
                        htmlFor="blended"
                        className={
                          selectedInput2 == "Blended" ? "selected" : null
                        }
                      >
                        <h3>Blended</h3>
                        <p>
                          Combination of two or three dark roasted beans of
                          organic coffees
                        </p>
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className="select">
                <div
                  className="select-header"
                  onClick={() => setSelect3(!select3)}
                >
                  <h2>What type of coffee?</h2>
                  <img
                    src={Arrow}
                    alt="Arrow"
                    className={select3 != true ? "" : "invert-arrow"}
                  />
                </div>
                {select3 && (
                  <div className="select-content">
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-size"
                        id="small"
                        onChange={() => setSelectedInput3("250g")}
                      />
                      <label
                        htmlFor="small"
                        className={selectedInput3 == "250g" ? "selected" : null}
                      >
                        <h3>250g</h3>
                        <p>
                          Perfect for the solo drinker. Yields about 12
                          delicious cups.
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-size"
                        id="medium"
                        onChange={() => setSelectedInput3("500g")}
                      />
                      <label
                        htmlFor="medium"
                        className={selectedInput3 == "500g" ? "selected" : null}
                      >
                        <h3>500g</h3>
                        <p>
                          Perfect option for a couple. Yields about 40
                          delectable cups.
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-size"
                        id="big"
                        onChange={() => setSelectedInput3("1000g")}
                      />
                      <label
                        htmlFor="big"
                        className={
                          selectedInput3 == "1000g" ? "selected" : null
                        }
                      >
                        <h3>1000g</h3>
                        <p>
                          Perfect for offices and events. Yields about 90
                          delightful cups.
                        </p>
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className="select">
                <div
                  className="select-header"
                  onClick={() => setSelect4(!select4)}
                >
                  <h2>Want us to grind them?</h2>
                  <img
                    src={Arrow}
                    alt="Arrow"
                    className={select4 != true ? "" : "invert-arrow"}
                  />
                </div>
                {select4 && (
                  <div className="select-content">
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-them"
                        id="wholebean"
                        onChange={() => setSelectedInput4("Wholebean")}
                      />
                      <label
                        htmlFor="wholebean"
                        className={
                          selectedInput4 == "Wholebean" ? "selected" : null
                        }
                      >
                        <h3>Wholebean</h3>
                        <p>
                          Best choice if you cherish the full sensory experience
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-them"
                        id="filtere"
                        onChange={() => setSelectedInput4("Filter")}
                      />
                      <label
                        htmlFor="filtere"
                        className={
                          selectedInput4 == "Filter" ? "selected" : null
                        }
                      >
                        <h3>Filter</h3>
                        <p>
                          For drip or pour-over coffee methods such as V60 or
                          Aeropress
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-them"
                        id="cafetiere"
                        onChange={() => setSelectedInput4("Cafetiére")}
                      />
                      <label
                        htmlFor="cafetiere"
                        className={
                          selectedInput4 == "Cafetiére" ? "selected" : null
                        }
                      >
                        <h3>Cafetiére</h3>
                        <p>
                          Course ground beans specially suited for french press
                          coffee
                        </p>
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className="select">
                <div
                  className="select-header"
                  onClick={() => setSelect5(!select5)}
                >
                  <h2>How often should we deliver?</h2>
                  <img
                    src={Arrow}
                    alt="Arrow"
                    className={select5 != true ? "" : "invert-arrow"}
                  />
                </div>
                {select5 && (
                  <div className="select-content">
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-time"
                        id="week"
                        onChange={() => setSelectedInput5("Every Week")}
                      />
                      <label
                        htmlFor="week"
                        className={
                          selectedInput5 == "Every Week" ? "selected" : null
                        }
                      >
                        <h3>Every week</h3>
                        <p>
                          $7.20 per shipment. Includes free first-class
                          shipping.
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-time"
                        id="two-weeks"
                        onChange={() => setSelectedInput5("Every 2 Weeks")}
                      />
                      <label
                        htmlFor="two-weeks"
                        className={
                          selectedInput5 == "Every 2 Weeks" ? "selected" : null
                        }
                      >
                        <h3>Every 2 weeks</h3>
                        <p>
                          $9.60 per shipment. Includes free priority shipping.
                        </p>
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        type="radio"
                        name="coffee-time"
                        id="month"
                        onChange={() => setSelectedInput5("Every Month")}
                      />
                      <label
                        htmlFor="month"
                        className={
                          selectedInput5 == "Every Month" ? "selected" : null
                        }
                      >
                        <h3>Every month</h3>
                        <p>
                          $12.00 per shipment. Includes free priority shipping.
                        </p>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
        <section id="create-plan">
          <div className="container-flex">
            <div className="order">
              <p>ORDER SUMMARY</p>
              <h2>
                “I drink my coffee as
                <span className="d"> {selectedInput1}</span>, with a
                <span className="d"> {selectedInput2}</span> type of bean.{" "}
                <span className="d"> {selectedInput3}</span> ground ala{" "}
                <span className="d"> {selectedInput4}</span>, sent to me{" "}
                <span className="d"> {selectedInput5}</span>.”
              </h2>
            </div>
            <div className="button-primary">
              <Link to={"/"}>
                <button form="form">Create your plan</button>
              </Link>
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

export default Plan
