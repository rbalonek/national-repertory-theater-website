import React from 'react'
import DonateButton from '../../components/Buttons/DonateButton/DonateButton'
import ContactForm from '../../components/Forms/ContactForm/ContactForm'
import "./Contact.css"
import Banner from "../../assets/a71fb2a094044dd783bc9dcdb148f00e.webp"

export default function Contact() {
  return (
    <div className='contact__container'>
      <div className='contact__banner-holder'>
        <img className='contact__image' src={Banner} alt="contact-img" />
      <ContactForm title="Contact Us" value="Contact Page" />
      </div>
      <br />
      <br />
      <DonateButton />
    </div>
  )
}
