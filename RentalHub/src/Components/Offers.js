import React from 'react'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Our <em>Offers</em></h2>
              <span>Avail great offers on great cars!!</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/offer-1-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Dacia Logan MCV</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from $60 per day</span>
                </div>
                <p>5 seater car with facility of 2 airbags at front and Navigation system inctact.</p>
                <Link to="/" className="filled-button">Book Now</Link>
              </div>
            </div>
            
            <br/>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/offer-2-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Toyota RAV4 Prime</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from $120 per day</span>
                </div>
                <p>6 seater car with great suspension especially for mountain rides.</p>
                <Link to="offers.html" className="filled-button">Book Now</Link>
              </div>
            </div>
            <br/>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/offer-3-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Hyundai i10 (sports)</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from $50 per day</span>
                </div>
                <p>Our bestseller family car for family picnic and outing.</p>
                <Link to="offers.html" className="filled-button">Book Now</Link>
              </div>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers