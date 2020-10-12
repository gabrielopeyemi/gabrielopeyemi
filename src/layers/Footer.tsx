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
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="socail_links">
                                <ul>
                                    <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                    <li><a href="#"> <i className="fab fa-twitter"></i> </a></li>
                                    <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                                    <li><a href="#"> <i className="fa fa-google-plus"></i> </a></li>
                                </ul>
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
                                Copyright &copy; {date} All rights reserved 
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
