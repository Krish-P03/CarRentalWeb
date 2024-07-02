import React from 'react'
import { Link } from 'react-router-dom'

const Request = () => {
  return (
    <div className="request-form">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4>Book vehicle via call?</h4>
            <span>You are one phone-call away to drive your dream car.</span>
          </div>
          <div className="col-md-4">
            <Link to="/" className="border-button">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request