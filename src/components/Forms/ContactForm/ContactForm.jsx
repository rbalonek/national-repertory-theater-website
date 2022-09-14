import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"

export default function ContactForm(props) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID_CONTACT_FORM, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert("Thanks, an email will be sent to you shortly!")
        window.location.reload()
      }, (error) => {
        console.log(error.text);
        alert("uh oh, please try again!")
      });
  };


  return (
    <div className='mailer-contact__container'>
      <div style={{width:'100%', textAlign:'center'}}>
      <h3>{ props.title }</h3>
      </div>
      <form className='mailer-contact__form' ref={form} onSubmit={sendEmail}>
      <label>Name: </label>
        <input type="text" name="user_name" />
        <input type="hidden" name="user_topic" value={props.value} />
        <br />
        <label>Email: </label>
        <input type="email" name="user_email" required />
        <br />
        {props.volunteer && (
          <>
          <label>City: </label>
            <input type="text" name="user_city" />
            <br />
          <label>State: </label>
            <input type="text" name="user_state" />
            <br />
          </>
        )}
        <label>Message</label>
        <textarea name="message" />
        <br />
        <br />
    <input className='mailer-contact__submit-btn' type="submit" value="Contact Us" />
  </form>
    </div>
  )
}
