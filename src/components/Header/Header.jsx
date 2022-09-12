import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./Header.css"

export default function Header() {
  
  return (
    <header className="header-container">
      <div className="nrt-title-container">
        <h1 className="nrt-title">National Repertory Theater</h1>
      </div>
      <div className="nav-holder">
        <NavBar />
      </div>
    </header>
  )
}
