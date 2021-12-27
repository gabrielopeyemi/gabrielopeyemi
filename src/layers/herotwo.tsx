import React from 'react';
import one from '../assets/img/icons/web-design.png';
import two from '../assets/img/icons/wordpress.png';
import three from '../assets/img/icons/app-development.png';

export default function Herotwo() {
  return (
    <>
      {/* <!-- service_area  --> */}
      <div className="service_area">
          <div className="container">
            
              <div className="row">
                  <div className="col-xl-12">
                      <div className="section_title text-center mb-65">
                          <span>Service Provided</span>
                          <h3>My Skills</h3>
                      </div>
                  </div>
              </div>
              
              <div className="row">
                  <div className="col-xl-4 col-md-4">
                      <div className="single_service text-center">
                          <div className="icon">
                              <img className="img-fluid" style={{width: '50px'}} src={one} alt="icon"/>
                          </div>
                          <h3>FrontEnd Engineering</h3>
                          <p>ReactJS, NextJS, GatsbyJS and VueJS</p>
                      </div>
                  </div>
                  <div className="col-xl-4 col-md-4">
                      <div className="single_service text-center">
                          <div className="icon">
                              <img className="img-fluid" style={{width: '50px'}}  src={two} alt="icon"/>
                          </div>
                          <h3>Backend Engineering</h3>
                          <p>NestJS, Elixir, NodeJS, ExpressJS</p>
                      </div>
                  </div>
                  <div className="col-xl-4 col-md-4">
                      <div className="single_service text-center">
                          <div className="icon">
                              <img className="img-fluid" style={{width: '50px'}} src={three} alt="icon"/>
                          </div>
                          <h3>Mobile Engineering</h3>
                          <p>CordovaJS, React-Native</p>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
      {/* <!--/ service_area  --> */}
    </>
  )
}
