import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare,faShop,faTruckFast,faUserTie } from '@fortawesome/free-solid-svg-icons';
import '../Sidebar/Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
    const [open, setOpen] = useState(false);
  return <>
  <div className='sidebar'>
  <Button className='sidebar_style' style={{backgroundColor:"white" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        
        <div  style={{height:'100vh' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {/* <Card body style={{ width: '200px' }}>
              ADUDU
            </Card> */}
            <div style={{ width: '200px' }}>
                <div  className='product_name'>
                    <h1><FontAwesomeIcon className='logo' icon={faShareFromSquare} /> Order-App</h1>
                </div>
                <hr style={{ color: 'black' }}/>
                <div className='side_list'>
                    <ul className='sidebar_list'>
                       <Link to='/admin' style={{textDecoration:"none"}}><li><FontAwesomeIcon icon={faUserTie} />&nbsp;&nbsp;Admin</li></Link>
                       <Link to='/dashboard' style={{textDecoration:"none"}}><li to='/dashboard'><FontAwesomeIcon icon={faShop} />&nbsp;&nbsp;Dashboard</li></Link> 
                        <Link to='/order' style={{textDecoration:"none"}}> <li><FontAwesomeIcon icon={faTruckFast} />&nbsp;&nbsp;Order</li></Link>
                       
                    </ul>
                </div>
            </div>
            
          </div>
        </Collapse>
      </div> 
        </Button>
  </div>
         
  </>
}

export default Sidebar