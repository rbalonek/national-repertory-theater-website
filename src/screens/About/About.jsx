import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <p className="about-text">
          The National Repertory Theater was created to provide performance
          opportunities for local artists while bringing communities together
          through music and the arts.{" "}
        </p>
        <p className="about-text">
          Our goal is to pay performers livable wages while utilizing the
          amazing talent we have throughout the United States of America. We
          accomplish these goals with children's outreach, fully staged
          productions, and community outreach.
        </p>
        <p className="about-text">
          We team up with local vendors to help promote small business and local
          engagement while supporting local talent, nationwide.
        </p>
        <p className="about-text">
          For more information, send us a message or join our mailing list for
          updates!
        </p>
      </div>
    </div>
  )
}
