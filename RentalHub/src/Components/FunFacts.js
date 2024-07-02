import React from 'react'
import { Link } from 'react-router-dom'

const FunFacts = () => {
  return (
    <div className="fun-facts">
      <div className="container">
        <div className="more-info-content">
          <div className="row">
            <div className="col-md-6">
              <div className="left-image">
                <img src={require("../images/about-1-570x350.jpg")} className="img-fluid" alt=""/>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="right-content">
                <span>Who we are</span>
                <h2>Get to know about <em>our company</em></h2>
                <p>This is a rental website which lends you cars on weekly and monthly basis with advantages of a great pricing and easy booking. We offer service with smooth browsing experience. </p>
                <Link to="about" className="filled-button">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FunFacts