import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import carouselImg from '../../Img/Register/carouselImg.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../../firebase'

export const LoginC = (props) => {
    const[firstname,setFirstname] = useState('')
    const[lastname,setLastame] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[repPassword,setRepPassword] = useState('')

    const isMobile = window.innerWidth <= 500;
    const navigation = useNavigate()

    const [items,setItems] = useState([])

    const auth = getAuth()

    const signIn = ()  =>  { 
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user
            alert('This user has success signin' + user.email)
            console.log(user.displayName,'user')
            navigation('/', {
                state: {
                    email
                }
            })
        })
        .catch((error) => {
            const errorCode = error.errorCode
            const errorMessage = error.message
        })
    }    


  return (
    <div style={{backgroundColor:'#274db1',color:'white',padding:isMobile? '3vh' : '10vh',height:'91vh',overflow:'hidden',display:!isMobile && 'flex'}}>
        <Form style={{display:'flex',justifyContent:'center',flexDirection:'column',width:!isMobile && '28%',marginLeft:!isMobile && '10vh'}}>
            <h3 style={{display:'flex',justifyContent:'center'}}>Prijavite se</h3><br/><br/>
            <Input type='email'  value={email} onChange={(e) => setEmail(e.target.value)}  style={{color:'white'}} placeholder='Email'/><br/>
            <Input type='password'  value={password} onChange={(e) => setPassword(e.target.value)}  style={{color:'white'}} placeholder='Sifra'/><br/>
            <p>Ukoliko niste registrovani <Link to='/Register' style={{color:'white',textDecoration:'none',fontWeight:'700'}}>registruj se</Link></p><br/>
            <Button onClick={signIn} variant='success'>Prijavi se</Button>
        </Form>
        <div style={{marginLeft:!isMobile && 'auto',marginRight:!isMobile && '10vh',marginTop:isMobile && '8vh'}}>
          <img src={carouselImg} width='100%' />
        </div>
    </div>
  )
}
