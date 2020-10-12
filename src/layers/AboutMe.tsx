import React from 'react';
import About from '../assets/img/about/about.png';

export default function AboutMe() {
  
  

  return (
    <>
      {/* <!-- about_me  --> */}
      <div className="about_me">
          <div className="about_large_title d-none d-lg-block">
                About
          </div>
          
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-xl-6 col-md-6">
                      <div className="about_e_details">
                          <h3>About me</h3>
                          <p>I’m Opeyemi Gabriel-Famosipe. I’m a developer who does little designs. I’ve worked in-house and remotely on projects for different brands, agencies, and startups. I care deeply about creating world-class, useful and beautiful products that help people and make a difference. 
</p>
                          <div className="download_cv">
                              <a className="boxed-btn3" href="#">Learn More</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                      <div className="about_img">
                          <div className="color_pattern d-none d-lg-block">
                              <img className='img-fluid' src={About} alt="grid"/>
                          </div>
                          <div className="my_Pic">
                                <img src="img/about/about.png" alt="about"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!--/ about_me  --></div> */}
    </>
  )
}
