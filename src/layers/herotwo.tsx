import React from 'react'

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
                          <h3>Build brands campaigns  <br/>
                                & digital projects</h3>
                      </div>
                  </div>
              </div>
              
              <div className="row">
                  <div className="col-xl-4 col-md-4">
                      <div className="single_service text-center">
                          <div className="icon">
                              <img src="img/svg_icon/1.svg" alt="icon"/>
                          </div>
                          <h3>FrontEnd Development</h3>
                          <p>HTML, CSS, Bootstraps, Materialize CSS, JS, VanillaJs, Reactjs, and VueJs</p>
                      </div>
                  </div>
                  <div className="col-xl-4 col-md-4">
                      <div className="single_service text-center">
                          <div className="icon">
                              <img src="img/svg_icon/2.svg" alt="icon"/>
                          </div>
                          <h3>WordPress Developement</h3>
                          <p>WordPress, Headless WordPress, Elementor, Woo commerce, Optimization</p>
                      </div>
                  </div>
                  <div className="col-xl-4 col-md-4">
                      <div className="single_service text-center">
                          <div className="icon">
                              <img src="img/svg_icon/3.svg" alt="icon"/>
                          </div>
                          <h3>Mobile Development</h3>
                          <p>Cordovajs, React-Native.</p>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
      {/* <!--/ service_area  --> */}
    </>
  )
}
