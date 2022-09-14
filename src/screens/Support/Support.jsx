import React from 'react'
import "./Support.css"
import DonateButton from "../../components/Buttons/DonateButton/DonateButton"
import ContactForm from '../../components/Forms/ContactForm/ContactForm'

export default function Support() {
  return (
    <div className="support-container">
      <h1>Support</h1>
      <p>
        The National Repertory Theater offers numerous ways to lend your
        support. From hosting an event, to enjoying one of our performances,
        every bit of support to the local music community helps keep our goal.
      </p>
      <h2>Donations</h2>
<div style={{width:'100%', display:'flex', justifyContent:'center'}}>
      <DonateButton />
      </div>
      <p>
        NRT is dedicated to the support of local musicians, artists, and
        businesses. That being said, we like to keep all of our donations in
        alignment with the community they support. If you are in an area that we
        don't currently cover, we can provide recordings, video, and with your
        help, we can eventually bring our fabulous performances directly to you!
        The link below is for general donations for the production of the
        company as a whole. To donate to a specific project, please refer to the
        "productions" tab:
      </p>
      <h2>Volunteers</h2>
      <p>
        Whether its an instrument, box office / concession, choral or any other
        help, we would love to chat and discuss what you can do to help build
        our musical community!{" "}
      </p>
<div style={{width:'100%', display:'flex', justifyContent:'center'}}>
      <ContactForm title="Volunteer" value="Volunteer" volunteer="yaas" />
      </div>
      <h2>Internships</h2>
      <p>
        The NRT internship program is a great way to learn and advance your
        career in performing arts administration, fundraising, and event
        planning. Contact us to discuss today:
      </p>
<div style={{width:'100%', display:'flex', justifyContent:'center'}}>
      <ContactForm title="Internship" value="Volunteer" volunteer="yaas" />
    </div>
    </div>
  )
}
