import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('tabs-1');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="more-info">
      <div className="container">
        <div className="section-heading">
          <h2>Read our <em>Reviews!</em></h2>
          <span> </span>
        </div>

        <div className="row" id="tabs">
          <div className="col-md-4">
            <ul>
              <li>
                <Link to="#tabs-1" onClick={() => handleTabClick('tabs-1')}>
                  The car was in a very great condition. We enjoyed riding it. <br/>
                  <small>Rakesh Gupta &nbsp;|&nbsp; 27.07.2024 10:10</small>
                </Link>
              </li>
              <li>
                <Link to="#tabs-2" onClick={() => handleTabClick('tabs-2')}>
                  I got fine car in affordable price! <br/>
                  <small>Sagar Mehta &nbsp;|&nbsp; 02.06.2024 19:13</small>
                </Link>
              </li>
              <li>
                <Link to="#tabs-3" onClick={() => handleTabClick('tabs-3')}>
                  We got a great variety of selection to choose the car. Nice experience! <br/>
                  <small>Pradeep Zaveri &nbsp;|&nbsp; 15.06.2024 14:49</small>
                </Link>
              </li>
            </ul>

            <br/>

            <div className="text-center">
              <Link to="/" className="filled-button">See More</Link>
            </div>

            <br/>
          </div>

          <div className="col-md-8">
            <section className="tabs-content">
              <article id="tabs-1" style={{ display: activeTab === 'tabs-1' ? 'block' : 'none' }}>
                <img src={require("../images/blog-image-1-940x460.jpg")} alt=""/>
                <h4>The car was in a very great condition. We enjoyed riding it.</h4>
                <p></p>
              </article>
              <article id="tabs-2" style={{ display: activeTab === 'tabs-2' ? 'block' : 'none' }}>
                <img src={require("../images/blog-image-2-940x460.jpg")} alt=""/>
                <h4>I got fine car in affordable price!</h4>
                <p></p>
              </article>
              <article id="tabs-3" style={{ display: activeTab === 'tabs-3' ? 'block' : 'none' }}>
                <img src={require("../images/blog-image-3-940x460.jpg")} alt=""/>
                <h4> We got a great variety of selection to choose the car. Nice experience!</h4>
                <p></p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
