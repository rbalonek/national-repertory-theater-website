import React from 'react'
import "./Footer.css"
import { NavLink } from "react-router-dom";

import Necks from "../../assets/CelloNeckPopout.png"

export default function Footer() {

  const scrollToTop = () => {
    document.body.scrollTop()
  }

  return (
    <div className='footer__container'>
      <div className='footer__links-holder'>
        <div>
          <NavLink onClick={scrollToTop} to="/"><p>Home</p></NavLink>
          <NavLink onClick={scrollToTop} to="/about"><p>About</p></NavLink>
          <NavLink onClick={scrollToTop} to="/support"><p>Support</p></NavLink>
         <NavLink onClick={scrollToTop} to="/contact"> <p>Contact</p></NavLink>
        </div>
        <div>
         <NavLink onClick={scrollToTop} to="/outreach"> <p>Outreach</p></NavLink>
         <NavLink onClick={scrollToTop} to="/popup-opera"> <p>Popup Opera</p></NavLink>
         <NavLink onClick={scrollToTop} to="/amahl"> <p>Amahl</p></NavLink>
          <NavLink onClick={scrollToTop} to="/concerts-events"><p>Concerts</p></NavLink>
        </div>
        <div className='footer__neck-img-holder'>
        <img className='footer__neck-img' src={Necks} ALT="NECKS" />
      </div>
      </div>
      
      <div className='footer__bottom-text'>
      <p>© 2017 by National Repertory Theater.
      The National Repertory Theater Is A Non-Profit Organization Under The 501(C)(3) Internal Revenue Service Filing.</p>
      </div>
    </div>
  )
}
