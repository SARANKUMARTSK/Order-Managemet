import React from 'react'
import "../Admin/Admin.css"
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen,faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Admin() {
  let [card,setCard] = useState([]);
  const getdata = async()=>{
      try{
        let res = await axios.get('https://65a62c9d74cf4207b4ef648d.mockapi.io/product')
      //  console.log(res.data);
      setCard(res.data);
      }catch(error){
          console.log(error);
      }
  }
  useEffect(()=>{
  getdata();
  },[])
return <>
<div className='admin'> 
<Table striped bordered hover>
    <thead>
      <tr style={{textAlign:"center"}}>
        <th>Order ID</th>
        <th>Produvt Name</th>
        <th>Order Number</th>
        <th>Order @</th>
        <th>Items</th>
        <th>Customer Name</th>
        <th>Tracking Code</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        card.map((e,i)=>{
        return <tr key={i}>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.orderNumber}</td>
        <td>{e.createdAt}</td>
        <td>{e.item}</td>
        <td>{e.customerName}</td>
        <td>{e.trackingCode}</td>
        <td>{e.status}</td>
        <td ><FontAwesomeIcon className='action_icon' icon={faFilePen} />&nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className='action_icon' icon={faTrashCan} /></td>
      </tr>
     
        })
      }
    </tbody>
  </Table>
</div>
</>
}

export default Admin