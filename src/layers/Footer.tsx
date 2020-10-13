import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <>
       {/* <!-- footer start --> */}
        <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-md-6">
                            <div className="menu_links">
                                <ul>
                                    <li><a href="/aboutme">About</a></li>
                                    <li><a href="/resume">Resume</a></li>
                                    <li><a href="/myworks">Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="socail_links">
                                <ul>
                                    <li><a href="tel:+2347031612450"><i className= "fas fa-phone"></i></a></li>
                                    <li><a href="https://wa.link/rs7uva"><i className= "fab fa-whatsapp"></i></a></li>
                                    <li><a href="https://web.facebook.com/famosipe"> <i className="fab fa-facebook"></i> </a></li>
                                    <li><a href="https://twitter.com/GabrielOpeyemi_"> <i className="fab fa-twitter"></i> </a></li>
                                    <li><a href="https://github.com/gabrielopeyemi"> <i className="fab fa-github"></i> </a></li>
                                    <li><a href="https://linkedin.com/in/gabrielopeyemi"> <i className="fab fa-linkedin"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        
                          
                            <div className="col-xl-12">
                                {/* <div className="more_portfolio text-center">
                                    <a className="line_btn" href="#">More Folio</a>
                              </div> */}
                              <div className="text-center" style={{marginBottom: '40px', marginTop: '40px'}}>
                                    <a className="boxed-btn3" href="tel:+2347031612450">Hire me ?</a>
                                </div>
                            </div>
                      </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="footer_border"></div>
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center">
                                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                Copyright &copy; {date} All rights reserved <br/> made with <i className="fab fa-react"></i>
                                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!--/ footer end  --> */}
    </>
  )
}
