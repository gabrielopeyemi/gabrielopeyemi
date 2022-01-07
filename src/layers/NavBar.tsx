import React, { useState, useEffect } from 'react';
import '../assets/css/navbar.css';
import { Link } from 'react-router-dom';
import { linkDirect } from '../assets/data';


const INavbar = (): any => {
  
  const [click, setClick] = useState(false);
  const [button, setbutton] = useState(true);
  const [navbar, setNavbar] = useState(false)
 

  const handleClick = () => {
    setClick(!click)
    console.log('click')
  };
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, [])
  
  window.addEventListener('resize', showButton)


  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.screenX >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>
            Gabriel Opeyemi 
            {/* <i className="fab fa-typo3"></i> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {linkDirect.map((link) => (
                <li className={link.cName}>
                  <Link to={link.direction} className={link.cname} onClick={closeMobileMenu}>
                    {link.name}
                  </Link>
                </li>
            ))}
            <li className='nav-item'>
                  <a href='https://docs.google.com/document/d/1iwQNUhYW_deqvpW14paXRiIE7f5dSz99o0hWbXWkXf0/edit?usp=sharing' className='nav-links'>
                    Resume
                  </a>
                </li>
          </ul>
        </div>
      </nav>
    </>
  );
  }
  // https://docs.google.com/document/d/12ElAJAIbm6UtlCJAg9GjQL9lpvIoU5Pe/edit?usp=sharing&ouid=115934831628310065718&rtpof=true&sd=true

  export default INavbar