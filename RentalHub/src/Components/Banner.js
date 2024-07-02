import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
          <div className="item item-1">
            <div className="img-fill">
                <div className="text-content">
                  <h6>With RentalHub, Renting your car seems Easy!</h6>
                  <h4>Transparent prising and easy Booking.</h4>
                  <p>Rent car with seamless experience with affordable price.</p>
                  <Link to="contact" className="filled-button">contact us</Link>
                </div>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Banner