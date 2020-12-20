import React from 'react'
import Comingsoon from '../layers/comingsoon'
import Footer from '../layers/Footer'
import INavbar from '../layers/NavBar'

export default function Resume() {
  return (
    <>
      <INavbar />
      <object
        data='https://gabrielopeyemi.com/gabrielcv.pdf'
        type="application/pdf"
        width="100%"
        height="678"
      >

        <iframe
          src='https://gabrielopeyemi.com/gabrielcv.pdf'
          width="100%"
          height="678"
        >
        <p>This browser does not support PDF!</p>
        </iframe>

      </object>
      <Footer/>
    </>
  )
}
