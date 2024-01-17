import React, { useEffect, useState } from 'react'
import '../Cards/Cards.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
function Cards() {
let [name,setName] = useState();
let [product,setProduct] = useState();
let [image,setImage] = useState();
let [price,setPrice] = useState();

let [card,setCard] = useState([]);
const getCards = async()=>{
    try{
      let res = await axios.get('https://65a62c9d74cf4207b4ef648d.mockapi.io/product')
    //  console.log(res.data);
    setCard(res.data);
    }catch(error){
        console.log(error);
    }
}
useEffect(()=>{
getCards();
},[])

  return <>
  {
    card.map((e,i)=>{
        return <div key={i} className='cards'>
        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src={e.image} />
          <Card.Body>
            <Card.Title>{e.name}</Card.Title>
            <Card.Text>
              {e.description}
            </Card.Text>
            <Card.Text><h4 className='price'>Rs.{e.price}/Only</h4></Card.Text>
            <Button variant="success">Place Order</Button>&nbsp;&nbsp;
            <Button variant="warning">Add To Cart</Button>
          </Card.Body>
        </Card>
      </div>
    })
  }
  
  </>
}

export default Cards