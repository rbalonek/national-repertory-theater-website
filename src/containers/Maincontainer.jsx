import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../screens/Home/Home';
export default function Maincontainer() {

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
  )
}
