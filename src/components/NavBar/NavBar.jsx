import React, {useState, useEffect} from 'react'
import "./NavBar.css"
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  
  const [productionDropdown, setProductionDropdown] = useState('nav__productions-dropdown-closed')
  const [navStatusHome, setNavStatusHome] = useState("nav-unchosen")
  const [navStatusAbout, setNavStatusAbout] = useState("nav-unchosen")
  // const [navStatusJoin, setNavStatusJoin] = useState("nav-unchosen")
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

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     setNavStatusHome("nav-chosen")
  //     setNavStatusAbout('nav-unchosen')
  //     setNavStatusSupport('nav-unchosen')
  //     setNavStatusProductions('nav-unchosen')
  //     setNavStatusContact('nav-unchosen')
  //   } else if (location.pathname === "/about") {
  //     setNavStatusAbout('nav-chosen')
  //     setNavStatusHome('nav-unchosen')
  //     setNavStatusSupport('nav-unchosen')
  //     setNavStatusProductions('nav-unchosen')
  //     setNavStatusContact('nav-unchosen')
  //   }else if (location.pathname === "/support") {
  //     setNavStatusSupport('nav-chosen')
  //     setNavStatusHome('nav-unchosen')
  //     setNavStatusAbout('nav-unchosen')
  //     setNavStatusProductions('nav-unchosen')
  //     setNavStatusContact('nav-unchosen')
  //   }else if (location.pathname === "/productions") {
  //     setNavStatusProductions('nav-chosen')
  //     setNavStatusHome('nav-unchosen')
  //     setNavStatusAbout('nav-unchosen')
  //     setNavStatusSupport('nav-unchosen')
  //     setNavStatusContact('nav-unchosen')
  //   }else if (location.pathname === "/contact") {
  //     setNavStatusContact('nav-chosen')
  //     setNavStatusHome('nav-unchosen')
  //     setNavStatusAbout('nav-unchosen')
  //     setNavStatusSupport('nav-unchosen')
  //     setNavStatusProductions('nav-unchosen')
  //   } else {
  //     setNavStatusHome('nav-unchosen')
  //     setNavStatusAbout('nav-unchosen')
  //     setNavStatusSupport('nav-unchosen')
  //     setNavStatusProductions('nav-unchosen')
  //     setNavStatusContact('nav-unchosen')
  //   }
  // }, [])

  
  
  return (
    <div className='nav__container'>
      <div className='nav__tab-holder'>
        <NavLink to="/"><p  className={navStatusHome }>Home</p></NavLink>
        <NavLink to="/about"><p  className={navStatusAbout }>About</p></NavLink>
      <NavLink to="/support"><p  onMouseEnter={closeProductDropdown} className={navStatusSupport }>Support</p></NavLink>
      <div>
      <p className={navStatusProductions } onMouseEnter={toggleProductionDropdown} >Productions</p>
      <div onMouseLeave={()=>setProductionDropdown('nav__productions-dropdown-closed') } className={productionDropdown}>
      <NavLink to="/outreach"><p >Outreach</p></NavLink>
      <NavLink to="/popup-opera"><p>Popup Opera</p></NavLink>
      <NavLink to="/amahl"><p >Amahl and the Night Visitors</p></NavLink>
      <NavLink to="/concerts-events"><p >Concerts / Events</p></NavLink>
      </div>
      </div>
      <NavLink to="/contact"><p onMouseEnter={closeProductDropdown} className={navStatusContact }>Contact</p></NavLink>
      </div>
    </div>
  )
}
