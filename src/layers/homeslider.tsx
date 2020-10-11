import React from 'react';

export default function homeslider() {
  return (
    <>
      {/* <!-- slider_area_start --> */}
      <div className="slider_area">
          <div className="single_slider  d-flex align-items-center slider_bg_1">
              <div className="shap_pattern d-none d-lg-block">
                  <img src="img/about/grid.png" alt="grid"/>
              </div>
              <div className="social_links">
                  <ul>
                      <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                      <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                      <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                  </ul>
              </div>
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-xl-12">
                          <div className="slider_text text-center">
                              <h3>
                                  Hello This is Milan
                              </h3>
                              <span>Creative Designer</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    {/* <!-- slider_area_end --> */}
    </>
  )
}
