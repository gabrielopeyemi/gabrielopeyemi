import React from 'react';
import img from '../assets/img/about/grid.png'

export default function Homeslider() {
  return (
    <>
      {/* <!-- slider_area_start --> */}
      <div className="slider_area">
          <div className="single_slider  d-flex align-items-center slider_bg_1">
              <div className="shap_pattern d-none d-lg-block">
                  <img src={img} alt="grid"/>
              </div>
              <div className="social_links">
                  <ul>
                        <li><a href="https://wa.link/rs7uva"><i className= "fab fa-whatsapp"></i></a></li>
                        <li><a href="https://web.facebook.com/famosipe"> <i className="fab fa-facebook"></i> </a></li>
                        <li><a href="https://twitter.com/GabrielOpeyemi_"> <i className="fab fa-twitter"></i> </a></li>
                        <li><a href="https://github.com/gabrielopeyemi"> <i className="fab fa-github"></i> </a></li>
                        <li><a href="https://linkedin.com/in/gabrielopeyemi"> <i className="fab fa-linkedin"></i> </a></li>
                    </ul>
              </div>
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-xl-12">
                          <div className="slider_text text-center" style={{paddingTop: '370px', paddingLeft: '150px'}}>
                              <h3>
                                  I'm Opeyemi Gabriel
                              </h3>
                              <span>Software Engineer</span>
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
