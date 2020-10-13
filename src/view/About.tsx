import React from 'react'
import Footer from '../layers/Footer'
import INavbar from '../layers/NavBar'
import about from '../assets/img/about/about.png';

export default function About() {
  return (
    <>
      <INavbar />
      <div className="container" style={{marginBottom: '70px', marginTop: '70px'}}>
        <div className="row ">
            <div className="col-xl-6 col-md-6">
                <div className="about_img">
                    <div className="color_pattern d-lg-block">
                        <img className='img-fluid' src={about} alt="grid"/>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-md-6">
                <div className="about_e_details">
                    <h3>About me</h3>
                    <p>
                      I’m Opeyemi Gabriel-Famosipe. I’m a developer who does little designs. 
                      I’ve worked in-house and remotely on projects for different brands, 
                      agencies, and startups. I care deeply about creating world-class, 
                      useful and beautiful products that help people and make a difference. 
                    </p>
                    <p>
                      I like to be involved at different stages of a digital project, from 
                      the seed of the idea, through to building, development and even the front-end 
                      and WordPress build. As a freelancer, this means I can jump in at any stage of 
                      a project, or take on the whole project, from start to end.
                    </p>
                    <p>
                      Am skilled in Website development, Mobile development, Microsoft Word, 
                      HTML Emails, WordPress, and HTML Scripting. Strong business development 
                      professional with a Bachelor's degree focused on Transport Management 
                      technology from The Federal University of Technology, Akure. 
                    </p>
                    <p>
                      As a transportation management I can supervise many aspects of transportation 
                      systems, including planning, logistics, maintenance and repair. I focus on 
                      getting materials, people and goods from one place to another while considering 
                      safety, efficiency and cost. I can also expect to manage financial aspects of 
                      transportation systems, including budgets and expenditures. 
                    </p>
                    <p>
                      I have specialized knowledge about topics such as traffic 
                      operations, planning methods, system operation, marketing, 
                      accounting and statistics.
                    </p>
                    <div className="download_cv">
                        <a className="boxed-btn3" href="https://wa.link/4eyttg"><i className= "fab fa-whatsapp"></i> Message me</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
