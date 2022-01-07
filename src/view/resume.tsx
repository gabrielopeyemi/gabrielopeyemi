/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Comingsoon from '../layers/comingsoon'
import Footer from '../layers/Footer'
import INavbar from '../layers/NavBar'

export default function Resume() {
  return (
    <>
      <INavbar />
      <object
        data='https://docs.google.com/document/d/1iwQNUhYW_deqvpW14paXRiIE7f5dSz99o0hWbXWkXf0/edit'
        type="application/pdf"
        width="100%"
        height="1178"
      >

        <iframe
          src='https://docs.google.com/document/d/1iwQNUhYW_deqvpW14paXRiIE7f5dSz99o0hWbXWkXf0/edit'
          width="100%"
          height="100vh"
        >
        <p>This browser does not support PDF!</p>
        </iframe>

      </object>
      <Footer/>
    </>
  )
}
