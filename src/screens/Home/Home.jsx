import React from 'react';
import ContactForm from '../../components/Forms/ContactForm/ContactForm';
import MailerSignupForm from '../../components/Forms/MailerSignupForm/MailerSignupForm';
import "./Home.css";

import ViolinPopout from "../../assets/JustNeck.png"
import CelloPopout from "../../assets/CelloNeckPopout.png"


export default function Home() {
 

  return (
    <div className="home-container">
      <div className='home__text-img'>
        <div>
        <p style={{paddingLeft:'40px',paddingRight:'40px', fontSize:'20px'}}>The National Repertory Theater was created to provide performance opportunities for local artists while bringing communities together through music and the arts.</p>
          <div style={{paddingLeft:'40px'}}>
          <MailerSignupForm />
          </div>
        </div>
      <img className='home__banner' src={ViolinPopout} />
      </div>
      <img className='home__cello' src={CelloPopout} />
      
      <p style={{paddingLeft:'40px',paddingRight:'40px', fontSize:'20px'}}>The National Repertory Theater Is A Non-Profit Organization Under The 501(C)(3) Internal Revenue Service Filing.</p>
      <p style={{paddingLeft:'40px',paddingRight:'40px', fontSize:'20px'}}>For more information, send us a message or join our mailing list for updates!</p>
      <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
      <ContactForm title="Contact Us" value="General" />
      </div>
    </div>
    );
  }