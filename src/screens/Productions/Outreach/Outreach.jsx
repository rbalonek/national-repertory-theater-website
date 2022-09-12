import React from 'react'
import "./Outreach.css"

import OperaForTheAges from "../../../assets/projects/OperaForTheAges.png"

export default function Outreach() {
  return (
    <div className="outreach-container">
      <div className="kids-opera-banner-img-container">
        <img className="kids-opera-banner-img" src={OperaForTheAges} alt="banner-kids" />
      </div>
      <div className="outreach-text-container">
        <p className="global-text">
          Our Children's outreach program, "Opera for the Ages" is a fun and
          educational concert or concert series for ages kindergarten and up.{" "}
        </p>
        <p className="global-text">
          We tell the story of opera through various composers and languages
          with lots of audience participation. After, we discuss what it's like
          to be an opera singer and a musician for a living. We finish with some
          Q&A and info on local performances they can see for free through the
          National Repertory Theater.
        </p>
        <br />
        <p className="global-text">
          To donate directly to the advancement of "Opera for the Ages" click
          the link below:
        </p>
        <h1>DONATE BUTTON</h1>

        <br />
        <p className="global-text">
          And if you have any questions, or would like to add your school to our
          list, please email us here:
        </p>
        <p>OUTREACH FORM</p>
      </div>
    </div>
  )
}
