import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import '../Topbar/Topbar.css'
function Topbar() { 
  return <>
  {/* <Navbar className="bg-body-tertiary">
      <Container> 
            <Navbar.Brand style={{fontWeight:"bolder" , fontSize:"20px"}}> &nbsp; &nbsp; Order Management</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button className='create_button' ><FontAwesomeIcon icon={faPlus} />&nbsp;&nbsp;&nbsp;Create Order</Button>  
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <div className='Topbar'>
        <div className='App_logo'>
    
        </div>

    </div>
     </>
}

export default Topbar