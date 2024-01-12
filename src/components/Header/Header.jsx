import React from 'react'
import "../Header/Header.css"
import '../Sidebar/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faCartShopping} from '@fortawesome/free-solid-svg-icons'
function Header({handleSidebarshow}) {
  return <>
  <nav className='header'>
    <div className='header_iconset'>
          <span onClick={()=>{handleSidebarshow()}} className='menu_icon_header'><FontAwesomeIcon  icon={faBars} /></span>
          <span className='logo'>
               <FontAwesomeIcon className='app_icon' icon={faCartShopping} /> &nbsp;
               <span style={{color:"black"}}>Order App</span>
          </span>
     </div>
  </nav>
  </>
}

export default Header

