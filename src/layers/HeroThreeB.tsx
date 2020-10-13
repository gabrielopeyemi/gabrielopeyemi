import React from 'react';
import { Link } from 'react-router-dom';
import one from '../assets/img/portfolio/9jastudio.jpg';
import two from '../assets/img/portfolio/ices_website.jpg';
import three from '../assets/img/portfolio/noisefiles.jpg';
import four from '../assets/img/portfolio/riveting.jpg';
import five from '../assets/img/portfolio/thiacplicity.jpg'

export default function HeroThreeB() {

  

  return (
    <>
      {/* <!-- portfolio_image_area  --> */}
        <div className="portfolio_image_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="single_Portfolio">
                            <div className="portfolio_thumb">
                                <img className='img-fluid' src={one} alt="img"/>
                            </div>
                            <a href={one} className="popup popup-image"></a>
                            <div className="portfolio_hover">
                                <div className="title">
                                        <h3>WordPress</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="single_Portfolio">
                            <div className="portfolio_thumb">
                                <img src={two} alt="img"/>
                            </div>
                            <a href={two} className="popup popup-image"></a>
                            <div className="portfolio_hover">
                                <div className="title">
                                        <h3>Frontend development</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="single_Portfolio">
                            <div className="portfolio_thumb">
                                <img src={three} alt="img"/>
                            </div>
                            <a href={three} className="popup popup-image"></a>
                            <div className="portfolio_hover">
                                <div className="title">
                                        <h3>WordPress</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="single_Portfolio">
                            <div className="portfolio_thumb">
                                <img src={four} alt="img"/>
                            </div>
                            <a href={four} className="popup popup-image"></a>
                            <div className="portfolio_hover">
                                <div className="title">
                                      <h3>FrontEnd Development</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-12 col-lg-4">
                        <div className="single_Portfolio">
                            <div className="portfolio_thumb">
                                <img src={five} alt="img"/>
                            </div>
                            <a href={five} className="popup popup-image"></a>
                            <div className="portfolio_hover">
                                <div className="title">
                                        <h3>WordPress</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="more_portfolio text-center">
                            <Link to="/myworks" className="line_btn">More Folio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* <!--/ portfolio_image_area  --> */}
    </>
  )
}
