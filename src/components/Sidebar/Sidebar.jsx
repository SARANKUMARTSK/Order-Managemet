import React from 'react'
import "../Sidebar/Sidebar.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping ,faClapperboard,faClipboardList,faUserTie ,faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Sidebar({handleSidebarHide}) {
  return <>
  <div className='sidebar'>
          <div className='sidebar_iconset'>
               <span onClick={()=>{handleSidebarHide()}} className='menu_cut_icon_sidebar'><FontAwesomeIcon icon={faXmark} /></span>
               <span className='logo'>
                    <FontAwesomeIcon className='app_icon' icon={faCartShopping} /> &nbsp;
                    <span>Order App</span>
               </span>
          </div>
      <hr />
          <ul className='sidebar_list'>
               <Link to='/dashboard'>
                    <li onClick={()=>{handleSidebarHide()}} className='list'><FontAwesomeIcon className='li_icon' icon={faClapperboard} />&nbsp; Dashboard</li>
               </Link>
               <Link to='/order'>
                    <li onClick={()=>{handleSidebarHide()}} className='list'><FontAwesomeIcon className='li_icon' icon={faClipboardList} />&nbsp;Orders</li>
               </Link>
               <Link to='/admin'>
                    <li onClick={()=>{handleSidebarHide()}} className='list'><FontAwesomeIcon className='li_icon' icon={faUserTie} />&nbsp;Admin</li>
               </Link> 
          </ul>
  </div>
  </>
}

export default Sidebar