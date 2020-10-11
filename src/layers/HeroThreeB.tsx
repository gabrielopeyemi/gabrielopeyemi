import React from 'react';
import one from '../assets/img/portfolio/1.png';
import two from '../assets/img/portfolio/2.png';
import three from '../assets/img/portfolio/3.png';
import four from '../assets/img/portfolio/4.png';
import five from '../assets/img/portfolio/5.png';

export default function HeroThreeB() {

  

  return (
    <>
      {/* <!-- portfolio_image_area  --> */}
        <div className="portfolio_image_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-5">
                        <div className="single_Portfolio">
                            <div className="portfolio_thumb">
                                <img className='img-fluid' src={one} alt="img"/>
                            </div>
                            <a href={one} className="popup popup-image"></a>
                            <div className="portfolio_hover">
                                <div className="title">
                                        <h3>Product Design</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-7">
                        <div className="single_Portfolio">
                            <div className="portfolio_thumb">
                                <img src={two} alt="img"/>
                            </div>
                            <a href={two} className="popup popup-image"></a>
                            <div className="portfolio_hover">
                                <div className="title">
                                        <h3>Product Design</h3>
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
                                        <h3>Product Design</h3>
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
                                      <h3>Product Design</h3>
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
                                        <h3>Product Design</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="more_portfolio text-center">
                            <a className="line_btn" href="#">More Folio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* <!--/ portfolio_image_area  --> */}
    </>
  )
}
