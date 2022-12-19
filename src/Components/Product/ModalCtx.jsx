import { FormControlLabel, Input, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import bhPostLogo from '../../Img/Article/bhPost.png'
import bhPostExpressLogo from '../../Img/Article/bhPostExpress.png'
import euroExpressLogo from '../../Img/Article/euroExpress.png'
import { db } from '../../firebase'
import { uid } from 'uid'
import { set,ref } from 'firebase/database'

export const ModalCtx = () => { 
    const[name1,setName] = useState('')
    const[city,setCity] = useState('')
    const[postCode,setPostCode] = useState('')
    const[street,setStreet] = useState('')
    const[numberPhone,setNumberPhone] = useState('')
    const[ctg,setCtg] = useState('offers')

    const{name} = useParams()

    const writeToDatabase = () => {
        const uuid = uid()
        set(ref(db, `/${uuid}`), {
            product: name,
            name: name1,
            city,
            postCode,
            street,
            numberPhone,
            ctg,
            uuid 
        })
        
        setName('')
        setCity('')
        setPostCode('')
        setStreet('')
        setNumberPhone('')
    }

  return (
    <>
        <div>
            <h2>Naruci {name}</h2>
            <Form style={{marginTop:'4vh'}}>
                <Input style={{width:'100%',fontSize:'22px',marginBottom:'2vh'}} type='text' placeholder='Ime i prezime' value={name1} onChange={(e) => setName(e.target.value)}/>
                <Row xs={1} md={2}>
                    <Col>
                        <Input style={{width:'100%',fontSize:'22px',marginBottom:'2vh'}} type='text' placeholder='Grad'  value={city} onChange={(e) => setCity(e.target.value)}/>
                    </Col>
                    <Col>
                        <Input style={{width:'100%',fontSize:'22px',marginBottom:'2vh'}} type='text' placeholder='Postanski broj'  value={postCode} onChange={(e) => setPostCode(e.target.value)}/>
                    </Col>
                </Row>
                <Input style={{width:'100%',fontSize:'22px',marginBottom:'2vh'}} type='text' placeholder='Ulica i broj'  value={street} onChange={(e) => setStreet(e.target.value)}/>
                <Input style={{width:'100%',fontSize:'22px',marginBottom:'2vh'}} type='text' placeholder='Kontakt broj'  value={numberPhone} onChange={(e) => setNumberPhone(e.target.value)}/>
                <p>Brza posta <span>8 KM</span></p>
            </Form>
        </div>
        <Button style={{width:'100%',marginBottom:'2vh'}} onClick={writeToDatabase}>Primjeni</Button>
    </>
  )
}
