import React, {useState} from 'react'
import "./NavBar.css"

export default function NavBar() {

const [productionDropdown, setProductionDropdown] = useState('nav__productions-dropdown-closed')

  const toggleProductionDropdown = () => {
    if (productionDropdown === 'nav__productions-dropdown-closed') {
      setProductionDropdown('nav__productions-dropdown-open')
    } else {
      setProductionDropdown('nav__productions-dropdown-closed')
    }
  }
  
  
  return (
    <div className='nav__container'>
      <p>Home</p>
      <p>About</p>
      <p>Join</p>
      <p>Supoport</p>
      <div>
      <p onMouseEnter={toggleProductionDropdown} >Productions</p>
        <div onMouseLeave={()=>setProductionDropdown('nav__productions-dropdown-closed') } className={productionDropdown}>
          <p>Outreach</p>
          <p>Popup Opera</p>
          <p>Amahl and the Night Visitors</p>
          <p>Concerts / Events</p>
        </div>
      </div>
      <p>Contact</p>
    </div>
  )
}
