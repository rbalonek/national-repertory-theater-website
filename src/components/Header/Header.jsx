import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./Header.css"
import { NavLink } from "react-router-dom"
export default function Header() {
  
  return (
    <header className="header-container">
      <div className="nrt-title-container">
        <NavLink to="/"><h1 className="nrt-title">National Repertory Theater</h1></NavLink> 
      </div>
      <div className="nav-holder">
        <NavBar />
      </div>
    </header>
  )
}
