import React from 'react'
import DonateButton from '../../components/Buttons/DonateButton/DonateButton'
import ContactForm from '../../components/Forms/ContactForm/ContactForm'
import "./Contact.css"
import Banner from "../../assets/a71fb2a094044dd783bc9dcdb148f00e.webp"

export default function Contact() {
  return (
    <div style={{textAlign:'center', minHeight:'60vh', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img src={Banner} alt="contact-img" style={{marginRight:'5px'}} />
      <ContactForm title="Contact Us" value="Contact Page" />
      </div>
      <br />
      <br />
      <DonateButton />
    </div>
  )
}
