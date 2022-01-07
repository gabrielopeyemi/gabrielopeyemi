import React, {useState, useEffect} from 'react';
import AboutMe from '../layers/AboutMe';
import Footer from '../layers/Footer';
import HeroThree from '../layers/HeroThree';
import HeroThreeB from '../layers/HeroThreeB';
import Herotwo from '../layers/herotwo';
import Homeslider from '../layers/homeslider';
import INavbar from '../layers/NavBar';
export default function Home() {
  
  return (
    <>
      <INavbar/>
      <Homeslider />
      <Herotwo />
      <HeroThree />
      <HeroThreeB/>
      <AboutMe/>
      <Footer />
    </>
  )
}
