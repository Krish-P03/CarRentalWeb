import React from 'react'

const Fleet = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="service-item">
              <img src={require('../images/product-1-720x480.jpg')} alt=""/>
              <div className="down-content">
                <h4>Volkswagen Caddy</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from $65 per day</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> A
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-2-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Volkswagen UP</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from $65 per day</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> A
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-3-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Opel Vivaro</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from $100 per day</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 9 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 6 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> M
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-4-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Tesla Model 3</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from $90 per day</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 2 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> E
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-5-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Fial Panda</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from $40 per day</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 2 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 2 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 2 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> M
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-6-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>BMW X3</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from $80 per day</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 6 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> A
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>
        </div>

        <br/>
        <br/>

        <nav>
          <ul className="pagination pagination-lg justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>

        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  )
}

export default Fleet