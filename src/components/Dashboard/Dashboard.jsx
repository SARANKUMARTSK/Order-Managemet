import React from 'react'
import "../Dashboard/Dashboard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from '../Cards/Cards';
function Dashboard() {
  return <>
  <h1 className='dashboard_heading'>Delivering Happiness </h1>
    
  <div  className='dashboard'>
    <Cards/>

  </div>
  
  </>
}

export default Dashboard