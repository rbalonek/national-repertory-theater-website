import React from 'react'
import "./Footer.css"

import Necks from "../../assets/CelloNeckPopout.png"

export default function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__links-holder'>
        <div>
          <p>Home</p>
          <p>About</p>
          <p>Support</p>
          <p>Contact</p>
        </div>
        <div>
          <p>Outreach</p>
          <p>Popup Opera</p>
          <p>Amahl</p>
          <p>Concerts</p>
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
