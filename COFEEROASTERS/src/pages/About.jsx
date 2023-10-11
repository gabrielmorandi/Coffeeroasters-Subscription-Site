import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Commitment from "../assets/about/mobile/image-commitment.jpg"
import CommitmentTablet from "../assets/about/tablet/image-commitment.jpg"
import CommitmentDesk from "../assets/about/desktop/image-commitment.jpg"
import Quality from "../assets/about/mobile/image-quality.jpg"
import UK from "../assets/about/desktop/illustration-uk.svg"
import Australia from "../assets/about/desktop/illustration-australia.svg"
import Canada from "../assets/about/desktop/illustration-canada.svg"

function AboutPage() {
  return (
    <>
      <Header type="about" />
      <main>
        <section id="commitment">
          <div className="container-flex">
            <div className="our">
              <picture>
                <source srcset={CommitmentDesk} media="(min-width: 1024px)" />
                <source srcset={CommitmentTablet} media="(min-width: 768px)" />
                <img src={Commitment} alt="Our commitment" />
              </picture>
              <div className="our-content">
                <h2>Our Commitment</h2>
                <p>
                  We’re built on a simple mission and a commitment to doing good
                  along the way. We want to make it easy for you to discover and
                  brew the world’s best coffee at home. It all starts at the
                  source. To locate the specific lots we want to purchase, we
                  travel nearly 60 days a year trying to understand the
                  challenges and opportunities in each of these places. We
                  collaborate with exceptional coffee growers and empower a
                  global community of farmers through with well above fair-trade
                  benchmarks. We also offer training, support farm community
                  initiatives, and invest in coffee plant science. Curating only
                  the finest blends, we roast each lot to highlight tasting
                  profiles distinctive to their native growing region.
                </p>
              </div>
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
            <div className="headquarters-cards">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
