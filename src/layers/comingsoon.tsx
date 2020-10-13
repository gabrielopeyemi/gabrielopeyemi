import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css'

export default function Comingsoon() {
  return (
    <>
      <div className="container">
        <div className="row align-text">
          <div className="col-12">
            <div className="comingsoon-section">
              <h1>Hi, I am Gabriel</h1>
              <p>Am working on this page</p>
              <p>Please come back in few hours</p>
              <Link to='/' className="boxed-btn3">Go back to homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
