import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../screens/Home/Home';
import About from "../screens/About/About"
import Support from "../screens/Support/Support"
import ConcertsEvents from "../screens/Productions/ConcertEvents/ConcertEvents"
import Amahl from "../screens/Productions/Amahl/Amahl"
import PopupOpera from "../screens/Productions/PopupOpera/PopupOpera"
import Outreach from "../screens/Productions/Outreach/Outreach"
import Contact from "../screens/Contact/Contact"

export default function Maincontainer() {

  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/outreach" element={<Outreach />} />
      <Route path="/popup-opera" element={<PopupOpera />} />
      <Route path="/amahl" element={<Amahl />} />
      <Route path="/concerts-events" element={<ConcertsEvents />} />
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About />} />
    <Route path="/" element={<Home />} />
    </Routes>
  )
}
