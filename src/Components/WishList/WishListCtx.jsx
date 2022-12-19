import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { uid } from 'uid'
import  { set, ref, onValue, update } from 'firebase/database'
import { Button } from 'react-bootstrap'
import SellIcon from '@mui/icons-material/Sell';
import CloseIcon from '@mui/icons-material/Close';
import { remove } from 'firebase/database';

export const WishListCtx = () => {
    const{ state } = useLocation()
    const isMobile = window.innerWidth <= 500;
    const{name} = useParams()
    const navigation = useNavigate()

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

    const handleDelete = (items,fav,favName) => {
        update(ref(db, `/${items.uuid}`), {
            [favName]:null
        })
    }

    function toProduct(fav) {
        navigation('/Shop/Product/'+fav, {
          state: {
              email:state.email
            }
        })
      }
     

    function ProductCtx({fav,favName}) {
        if(fav!==undefined) {
            return (
                <div style={{display:'flex',width:'100%',height:'8vh'}}>
                    <div style={{overflow:'hidden',border:'2px solid black',display:'flex'}}>
                        {items.filter(items => (items.ctg === 'items' && items.name === fav)).map(items => 
                            <img src={items.image} alt='slika' />
                        )}
                        <p style={{marginTop:'1vh'}}>{fav}</p>
                    </div>
                    {items.filter(items => (items.ctg === 'accounts' && items.email === state.email)).map(items => 
                        <div style={{display:'flex',border:'2px solid black',marginLeft:'auto',padding:'1vh',paddingLeft:'0vh',paddingRight:'0vh'}}>  
                            <Button variant='danger' style={{marginRight:'1vh'}} onClick={() => handleDelete(items,fav,favName)}><CloseIcon /></Button>
                            <Button onClick={() => toProduct(fav)}><SellIcon /></Button>
                        </div>
                    )}
                </div>
            )
        }
    }    
    const[brojac,setBrojac] = useState(0)
    
  return (
    <div>
        {items.filter(items => (items.ctg === 'accounts' && items.email === state.email)).map(items => 
            <div style={{display:'flex',flexDirection:'column',border:'2px solid red',fontSize:isMobile? '15px' : '27px',marginRight:!isMobile && '20vh',marginLeft:!isMobile && '20vh'}}>
                <ProductCtx fav={items.fav0} favName='fav0' />
                <ProductCtx fav={items.fav1} favName='fav1'/>
                <ProductCtx fav={items.fav2} favName='fav2'/>
                <ProductCtx fav={items.fav3} favName='fav3'/>
                <ProductCtx fav={items.fav4} favName='fav4'/>
                <ProductCtx fav={items.fav5} favName='fav5'/>
                <ProductCtx fav={items.fav6} favName='fav6'/>
                <ProductCtx fav={items.fav7} favName='fav7'/>
                <ProductCtx fav={items.fav8} favName='fav8'/>
                <ProductCtx fav={items.fav9} favName='fav9'/>
                <ProductCtx fav={items.fav10} favName='fav10'/>
                <ProductCtx fav={items.fav11} favName='fav11' />
                <ProductCtx fav={items.fav12} favName='fav12'/>
                <ProductCtx fav={items.fav13} favName='fav13'/>
                <ProductCtx fav={items.fav14} favName='fav14'/>
                <ProductCtx fav={items.fav15} favName='fav15'/>
                <ProductCtx fav={items.fav16} favName='fav16'/>
                <ProductCtx fav={items.fav17} favName='fav17'/>
                <ProductCtx fav={items.fav18} favName='fav18'/>
                <ProductCtx fav={items.fav19} favName='fav19'/>
                <ProductCtx fav={items.fav20} favName='fav20'/>
                <ProductCtx fav={items.fav21} favName='fav21' />
                <ProductCtx fav={items.fav22} favName='fav22'/>
                <ProductCtx fav={items.fav23} favName='fav23'/>
                <ProductCtx fav={items.fav24} favName='fav24'/>
                <ProductCtx fav={items.fav25} favName='fav25'/>
                <ProductCtx fav={items.fav26} favName='fav26'/>
                <ProductCtx fav={items.fav27} favName='fav27'/>
                <ProductCtx fav={items.fav28} favName='fav28'/>
                <ProductCtx fav={items.fav29} favName='fav29'/>
                <ProductCtx fav={items.fav30} favName='fav30'/>
            </div>
        )}
    </div>
  )
}
