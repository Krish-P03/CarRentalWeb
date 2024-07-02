import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import FunFacts from '../Components/FunFacts'

const AboutPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero title="About"/>
        <FunFacts/>
        <div class="fun-facts">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="left-content">
              <span></span>
              <h2>More about us..
                <br></br>
                <em>Our records</em></h2>
              <p>We are the most trustable organization from the last 5 years across 12 metro cities in India.
              <br/><br/></p>
            </div>
          </div>
          <div class="col-md-6 align-self-center">
            <div class="row">
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">130000+</div>
                  <div class="count-title">Miles driven</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">1000+</div>
                  <div class="count-title">Happy clients</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">12</div>
                  <div class="count-title">Cities</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">14</div>
                  <div class="count-title">Cars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPage