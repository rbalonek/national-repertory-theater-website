import React from 'react';
import ContactForm from '../../components/Forms/ContactForm/ContactForm';
import MailerSignupForm from '../../components/Forms/MailerSignupForm/MailerSignupForm';
import "./Home.css";


export default function Home() {
 

  return (
    <div className="home-container">
      <div style={{marginLeft:'10px'}}>
      <MailerSignupForm />
      </div>
      <br />
      <br />
      <div style={{marginLeft:'10px'}}>
      <ContactForm value="General" />
      </div>
    </div>
    );
  }