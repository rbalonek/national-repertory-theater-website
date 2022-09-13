import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./MailerSignupForm.css"

export default function MailerSignupForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID_MAILING_LIST, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert("Thanks, an email will be sent to you shortly!")
      }, (error) => {
        console.log(error.text);
        alert("uh oh, please try again!")
      });
  };

  return (
    <div className='mailer-signup__container'>
    <form className='mailer-signup__form' ref={form} onSubmit={sendEmail}>
    <input style={{width:'200px'}} type="email" placeholder="Email" name="user_email" required/>
    <input className='mailer-signup__submit-btn' type="submit" value="Sign Up For Our Newsletter" />
  </form>
    </div>
  )
}
