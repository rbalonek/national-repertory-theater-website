import React from 'react'
import ContactForm from '../../../components/Forms/ContactForm/ContactForm'
import MailerSignupForm from '../../../components/Forms/MailerSignupForm/MailerSignupForm'
import "./ConcertEvents.css"

export default function ConcertEvents() {
  return (
    <div className='concert__container'>
    <img
    className="conert__banner-img"
    src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1663027033/National%20Repertory%20Theater/Banners/Screen_Shot_2022-09-12_at_4.54.48_PM_oycx0h.png"
    alt="blah"
      />
      <div style={{padding:'10px'}}>
      <p>
      The National Repertory Theater has many concerts and events throughout
      the year.
      </p>
      <p>
      Because of our vast network of traveling performers and venues, we can
      accommodate the following upon request:
        </p>
        <div className='concert__event-holder'>
          <div className='concert__events'>
          <p>- Weddings</p>
          <p>- Funerals</p>
          <p>- Concerts</p>
          <p>- Chamber music</p>
          <p>- Fundraising events</p>
          <p>- Dinner Theater</p>
          <p>- Community Outreach</p>
          </div>
        </div>
        <p>If you have any questions or suggestions, please email us below:</p>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <ContactForm title="Concerts" value="Concerts" />
      </div>
      <br />
      <br/>
      </div>
<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <MailerSignupForm  />
      </div>
      <br />
      <br/>
    </div>
  )
}
