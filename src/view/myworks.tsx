import React from 'react'
import Comingsoon from '../layers/comingsoon'
import Footer from '../layers/Footer'
import HeroThree from '../layers/HeroThree'
import HeroThreeB from '../layers/HeroThreeB'
import Herotwo from '../layers/herotwo'
import INavbar from '../layers/NavBar'

export default function Myworks() {
  return (
    <>
      <INavbar />
        {/* <Comingsoon/> */}
        <Herotwo />
        <HeroThree />
        <HeroThreeB/>
      <Footer/>
    </>
  )
}
