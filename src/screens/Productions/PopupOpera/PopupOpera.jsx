import React from 'react'
import "./PopupOpera.css"

import PopupOperaImg from "../../../assets/projects/PopupWide.png"
import DonateButton from '../../../components/Buttons/DonateButton/DonateButton'
import ContactForm from '../../../components/Forms/ContactForm/ContactForm'

export default function PopupOpera() {
  return (
    <div className='popup-opera__container'>
    <img className="popup-banner" src={PopupOperaImg} alt="popup-img" />
    <div className="popup-opera-text-container">
      <p className="global-text">
        Popup opera is a new concept for the working opera singer. Through our
        extensive network, we place singers into productions throughout the US
        to help build out their repertoire, exposure, and to make some money
        while performing!
      </p>
      <p className="global-text">
        To donate specifically to the Popup Opera project, click the link
        below:
      </p><div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <DonateButton />
        </div>
      <p className="global-text">
        {" "}
        If you have an idea, performance space or any other questions about
        the Popup Opera project, please contact us below:
      </p>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ContactForm title="Contact Us" value="Popup Opera" />
        </div>
    </div>
  </div>
  )
}
