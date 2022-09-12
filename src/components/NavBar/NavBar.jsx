import React, {useState, useEffect} from 'react'
import "./NavBar.css"
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  
  const [productionDropdown, setProductionDropdown] = useState('nav__productions-dropdown-closed')
  const [navStatusHome, setNavStatusHome] = useState("nav-unchosen")
  const [navStatusAbout, setNavStatusAbout] = useState("nav-unchosen")
  const [navStatusJoin, setNavStatusJoin] = useState("nav-unchosen")
  const [navStatusSupport, setNavStatusSupport] = useState("nav-unchosen")
  const [navStatusProductions, setNavStatusProductions] = useState("nav-unchosen")
  const [navStatusContact, setNavStatusContact] = useState("nav-unchosen")

  const toggleProductionDropdown = () => {
    if (productionDropdown === 'nav__productions-dropdown-closed') {
      setProductionDropdown('nav__productions-dropdown-open')
    } else {
      setProductionDropdown('nav__productions-dropdown-closed')
    }
  }

  const closeProductDropdown = () => {
    setProductionDropdown('nav__productions-dropdown-closed')
  }
  

  useEffect(() => {
    if (location.pathname === "/") {
      setNavStatusHome("nav-chosen")
    } else if (location.pathname === "/about") {
      setNavStatusAbout('nav-chosen')
    }else if (location.pathname === "/join") {
      setNavStatusJoin('nav-chosen')
    }else if (location.pathname === "/support") {
      setNavStatusSupport('nav-chosen')
    }else if (location.pathname === "/productions") {
      setNavStatusProductions('nav-chosen')
    }else if (location.pathname === "/contact") {
      setNavStatusContact('nav-chosen')
    } else {
      setNavStatusHome('nav-unchosen')
      setNavStatusAbout('nav-unchosen')
      setNavStatusJoin('nav-unchosen')
      setNavStatusSupport('nav-unchosen')
      setNavStatusProductions('nav-unchosen')
      setNavStatusContact('nav-unchosen')
    }
  }, [])
  
  
  return (
    <div className='nav__container'>
      <div className='nav__tab-holder'>
        <p className={navStatusHome }>Home</p>
      <p className={navStatusAbout }>About</p>
      <p className={navStatusJoin }>Join</p>
      <p onMouseEnter={closeProductDropdown} className={navStatusSupport }>Support</p>
      <div>
      <p className={navStatusProductions } onMouseEnter={toggleProductionDropdown} >Productions</p>
      <div onMouseLeave={()=>setProductionDropdown('nav__productions-dropdown-closed') } className={productionDropdown}>
      <p>Outreach</p>
      <p>Popup Opera</p>
      <p>Amahl and the Night Visitors</p>
      <p>Concerts / Events</p>
      </div>
      </div>
      <p onMouseEnter={closeProductDropdown} className={navStatusContact }>Contact</p>
      </div>
    </div>
  )
}
