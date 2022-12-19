import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase'

export const WishListNavigation = () => {
    const{ state } = useLocation()
    const isMobile = window.innerWidth <= 500;

    const [items,setItems] = useState([])

    useEffect(() => {
        onValue(ref(db), snapshot => {
          setItems([])
          const data = snapshot.val()
          if(data !== null) {
            Object.values(data).map((todo) => {
              setItems(oldArray => [...oldArray,todo])
            })
          }
        })
    },[])

  return (
    <div style={{marginTop:!isMobile && '5vh',display:'flex',justifyContent:'center'}}>
        <div style={{display:'flex',flexDirection:'column',width: '25vh'}}>
            <ShoppingCartIcon style={{fontSize:'10vh',marginLeft:'7vh'}} /><br/>
            <h4 style={{fontSize:'40px',marginLeft:'6vh'}}>Korpa</h4>
            {items.filter(items => (items.ctg === 'accounts' && items.email === state.email)).map(items => 
                <p style={{fontSize:'20px',overflow:'visible',display:'flex',justifyContent:'center'}}>{items.firstname} {items.lastname}</p>
            )}
            <hr/>
        </div>
    </div>
  )
}
