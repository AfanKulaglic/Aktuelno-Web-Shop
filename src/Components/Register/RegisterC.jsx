import { Input } from '@mui/material'
import React, {useState} from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import carouselImg from '../../Img/Register/carouselImg.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app,db} from '../../firebase'
import { uid } from 'uid'
import { set,ref } from 'firebase/database'

export const RegisterC = () => {
  const[firstname,setFirstname] = useState('')
  const[lastname,setLastame] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[repPassword,setRepPassword] = useState('')
  const[ctg,setCtg] = useState('accounts')
  const[brojac,setBrojac] = useState(0)

  const isMobile = window.innerWidth <= 500;

  const[error,setError] = useState(false)

  const auth = getAuth(app);

  const writeToDatabase = () => {
    const uuid = uid()
    set(ref(db, `/${uuid}`), {
      firstname,
      lastname,
      ctg,
      email,
      brojac,
      uuid 
    })
  }


  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        writeToDatabase()
        alert("Successfully created ana account")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        alert(errorCode)
      });
  }

 
  return (
    <div style={{backgroundColor:'#274db1',color:'white',padding:isMobile? '3vh' : '10vh',height:'91vh',overflow:'hidden',display:!isMobile && 'flex'}}>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:!isMobile && '28%',marginLeft:!isMobile && '10vh'}}>
            <h3 style={{display:'flex',justifyContent:'center'}}>Registruj se</h3><br/><br/>
            <Input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} style={{color:'white',widht:'70vh'}} placeholder='Ime'/><br/>
            <Input type='text' value={lastname} onChange={(e) => setLastame(e.target.value)} style={{color:'white',widht:'70vh'}} placeholder='Prezime'/><br/>
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} style={{color:'white'}} placeholder='Email'/><br/>
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} style={{color:'white'}} placeholder='Sifra'/><br/>
            <Input type='password' value={repPassword} onChange={(e) => setRepPassword(e.target.value)} style={{color:'white'}} placeholder='Ponovi sifru'/><br/>
            <p>Ukoliko ste prijavljeni <Link to='/Login' style={{color:'white',textDecoration:'none',fontWeight:'700'}}>prijavite se</Link></p><br/>
            <Button variant='success' onClick={signUp}>Registruj se</Button>
            {error &&
              <p>Nesta nije dobro uneseno</p>
            }
        </div>
        <div style={{marginLeft:!isMobile && 'auto',marginRight:!isMobile && '10vh',marginTop:isMobile && '4vh'}}>
          <img src={carouselImg} width='100%' />
        </div>
    </div>
  )
}
