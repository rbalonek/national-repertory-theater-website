import React from 'react'
import "./Amahl.css"
import AmahlImg from "../../../assets/projects/Amahl.png"
import DonateButton from '../../../components/Buttons/DonateButton/DonateButton'
import ContactForm from '../../../components/Forms/ContactForm/ContactForm'
import MailerSignupForm from "../../../components/Forms/MailerSignupForm/MailerSignupForm"

export default function Amahl() {
  return (
    <div className='amahl__container'>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img src={AmahlImg} alt="amahl-img" />
      </div>
    <div className="amahl-text">
      <h2>Amahl and the Night Visitors</h2>
      <p>
        This holiday season, enjoy Gian Carlo Menotti's fabulous 1 act opera
        with chamber orchestra.
      </p>
      <p>
        The beautiful story of the three wise men stopping in a small home
        near Bethlehem, helping a disabled young boy and his poor mother on
        their way to visit a miraculous child.{" "}
        </p>
        <p className="global-text">
        To donate specifically to the Popup Opera project, click the link
        below:
      </p>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <DonateButton />
      </div>
      <p>To have this timeless piece performed near you, contact us below:</p>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <ContactForm title="Amahl Performance" value="Amahl" />
      </div>
      <p>
        To stay updated on our future performances, events, and opportunities,
        please join our newsletter:
      </p>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <MailerSignupForm  />
      </div>
    </div>
    </div>
  )
}
