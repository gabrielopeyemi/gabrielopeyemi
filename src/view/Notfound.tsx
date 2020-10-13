import React from 'react'
import Footer from '../layers/Footer';
import INavbar from '../layers/NavBar';
import '../assets/css/main.css'
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <>
      <INavbar />
        <div className="container">
          <div className="row">
            <div className="error404-section">
              <h1>Oops!</h1>
              <h2>Page not found</h2>
              <div className="text-center" style={{marginBottom: '40px', marginTop: '40px'}}>
              <Link to='/' className="boxed-btn3">Go back to homepage</Link>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}
