import React, {useEffect,useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoIcon from '@mui/icons-material/Info'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from '@mui/material/Button';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios'
import { db } from '../../firebase'
import { uid } from 'uid'
import { set,ref, onValue } from 'firebase/database'
import { Item } from 'better-react-carousel';

export const ItemsC = ({minPrice,maxPrice}) => {
  const[onCount,setOnCount] = useState(true)
  const isMobile = window.innerWidth <= 500;

  const{firstname} = useParams()

  const[item,setItem] = useState([])

    useEffect(() => {
      onValue(ref(db), snapshot => {
        setItem([])
        const data = snapshot.val()
        if(data !== null) {
          Object.values(data).map((todo) => {
            setItem(oldArray => [...oldArray,todo])
          })
        }
      })
    },[])

    const{category} = useParams()
    const{ state } = useLocation()

  return (
    <div style={{width:isMobile? '100%' : '78%',overflow:'hidden',marginLeft:isMobile? '0vh' : '5vh'}}>
      <h2 style={{marginBottom:'4vh'}}>{category}</h2>
      <Row xs={2} md={5}>
        {item.filter(item => (item.category === category && item.ctg === 'items' && item.price > minPrice && item.price < maxPrice)).map(item => 
        <Col>
        <Link state={{ email:state && state.email }} to={'/Shop/Product/'+item.name} style={{textDecoration:'none',color:'black',border:'0px solid black',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
            <div style={{height:isMobile? '23vh' : '26vh'}}>
                <img  alt='image' src={item.image} width='100%' height='100%' />
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                <div style={{height:isMobile? '15vh':'10vh'}}>
                    <h5>{item.name}</h5>
                </div>
                <p>Aktuelno d.o.o</p>
                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                  <Button variant="outlined" style={{color:'skyblue'}} endIcon={<ShoppingBasketIcon />}>
                      DODAJ
                  </Button>
            </div>
        </Link>     
        </Col>
        )}
      </Row>
    </div>
  )
}
