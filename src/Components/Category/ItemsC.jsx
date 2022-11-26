import React, {useEffect,useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoIcon from '@mui/icons-material/Info'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios'

export const ItemsC = () => {
  const [item,setItem] = useState(null)
  const[onCount,setOnCount] = useState(true)
  const isMobile = window.innerWidth <= 500;

    useEffect(() => {
        fetch('http://localhost:4000/items')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setItem(data)
        })
    },[])

    const{category} = useParams()

  return (
    <div style={{width:isMobile? '100%' : '78%',overflow:'hidden',marginLeft:isMobile? '0vh' : '5vh'}}>
      <h2 style={{marginBottom:'4vh'}}>{category}</h2>
      <Row xs={2} md={5}>
        {item && item.filter(item => item.category === category).map(item => 
        <Col>
          <div style={{width:'100%',marginLeft:isMobile? '0vh' : '0vh',marginBottom:'2vh'}}>
              <img  alt='image' src={item.image} width='100%' />
              <div style={{display:'flex',flexDirection:'column'}}>
                  <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                  <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                  <h5>{item.name}</h5>
                  <p>Aktuelno d.o.o</p>
                  <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                  <Button variant="outlined" style={{color:'skyblue'}} endIcon={<ShoppingBasketIcon />}>
                      DODAJ U KORPU
                  </Button>
              </div>
          </div>
        </Col>
        )}
      </Row>
      <button onClick={() => {axios.post('http://localhost:4000/items', {
        'name' : 'nesta',
        'price' : '220 Km',
        'description':'nesta',
        'category' : 'satovi'
      })}}>dodaj item</button>
    </div>
  )
}
