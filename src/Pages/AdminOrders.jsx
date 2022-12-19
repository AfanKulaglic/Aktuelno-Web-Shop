import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { uid } from 'uid'
import { set,ref, onValue, remove, update } from 'firebase/database'
import { Button, Row, Table } from 'react-bootstrap'
import { NavigationC } from '../Components/NavigationC'
import { CategorysC } from '../Components/Home/CategorysC'

export const AdminOrders = () => {
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

    const handleDelete = (items) => {
        remove(ref(db, `${items.uuid}`))
    }

  return (
    <div>
        <NavigationC />
        <CategorysC />
        <div style={{marginRight:!isMobile && '20vh',marginLeft:!isMobile &&'20vh',overflow:isMobile && 'scroll'}}>
            <Table striped bordered hover size="sm" style={{marginTop:!isMobile && '5vh'}}>
            <thead>
                <tr>
                    <th>IME:</th>
                    <th>PREZIME:</th>
                    <th>POSTANSKI BROJ:</th>
                    <th>ULICA:</th>
                    <th>KONTAKT BROJ:</th>
                </tr>
            </thead>
            <tbody>
                {items && items.filter(items => (items.ctg === 'orders')).map(items =>
                <>
                    <tr style={{border:'2px solid blue'}}>
                        <td>{items.name}</td> 
                        <td>{items.city}</td> 
                        <td>{items.postCode}</td> 
                        <td>{items.street}</td> 
                        <td>{items.numberPhone}</td> 
                    </tr>
                    <tr style={{border:'2px solid red'}}>
                        <td colSpan={5}>{items.product}</td>
                    </tr>
                    <tr>
                        <td colSpan={5}><Button onClick={() => handleDelete(items)} variant='danger' style={{width:'100%'}}>Zavrsi Prodaju</Button></td>
                    </tr>
                    <br/>
                </>
                )}
            </tbody>
            </Table>
        </div>
    </div>
  )
}
