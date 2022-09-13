import React from 'react'
import "./Amahl.css"
import AmahlImg from "../../../assets/projects/Amahl.png"
import DonateButton from '../../../components/Buttons/DonateButton/DonateButton'

export default function Amahl() {
  return (
    <div>
    <img src={AmahlImg} alt="amahl-img" />
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
      <DonateButton />
      <p>To have this timeless piece performed near you, contact us below:</p>
      <p>AMAHL FORM</p>
      <p>
        To stay updated on our future performances, events, and opportunities,
        please join our newsletter:
      </p>
      <p>SIGNUP NEWSLETTER</p>
    </div>
    </div>
  )
}
