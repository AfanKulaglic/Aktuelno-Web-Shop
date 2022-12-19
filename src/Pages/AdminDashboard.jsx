import React, {useState,useEffect} from 'react'
import { db } from '../firebase'
import { uid } from 'uid'
import { NavigationC } from '../Components/NavigationC'
import { CategorysC } from '../Components/Home/CategorysC'
import { set,ref, onValue, remove, update } from 'firebase/database'
import { Button, Col, Container, Form, FormSelect, Row } from 'react-bootstrap'
import { Input } from '@mui/material'
import { AdminOrders } from './AdminOrders'

export const AdminDashboard = () => {
    const [name,setName] = useState("")
    const [quantity,setQuantity] = useState(1)
    const [category,setCategory] = useState("")
    const [count,setCount] = useState(false)
    const [brand,setBrand] = useState("")
    const [rating,setRating] = useState()
    const [image,setImage] = useState("")
    const [image1,setImage1] = useState("")
    const [image2,setImage2] = useState("")
    const [image3,setImage3] = useState("")
    const [specification,setSpecification] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [id,setId] = useState()
    const [ctg,setCtg] = useState("items")
  
    const writeToDatabase = () => {
      const uuid = uid()
      set(ref(db,`/${uuid}`), {
        name,
        quantity,
        category,
        count,
        brand,
        rating,
        image,
        image1,
        image2,
        image3,
        description,
        specification,
        price,
        id,
        ctg,
        uuid
      })
  
      setName('')
      setQuantity('')
      setCategory('')
      setCount('')
      setBrand('')
      setRating('')
      setImage('')
      setImage1('')
      setImage2('')
      setImage3('')
      setDescription('')
      setSpecification('')
      setId('')
      setPrice('')
    }

    const[item,setItem] = useState([])
    const isMobile = window.innerWidth <= 500;

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

    const handleDelete = (item) => {
        remove(ref(db,`/${item.uuid}`))
    }

    const [isEdit,setIsEdit] = useState(false)
    const [tempUuid,setTempUuid] = useState('')
    const handleUpdate = (item) => {
        setIsEdit(true)
        setTempUuid(item.uuid)
        setName(item.name)
        setPrice(item.price)
        setQuantity(item.quantity)
        setId(item.id)
        setCategory(item.category)
        setBrand(item.brand)
        setRating(item.rating)
        setCount(item.count)
        setImage(item.image)
        setImage1(item.image1)
        setImage2(item.image2)
        setImage3(item.image3)
        setDescription(item.description)
        setSpecification(item.specification)
    }
    
    const handleSubmitChange = () => {
        update(ref(db,`/${tempUuid}`), {
            name,
            quantity,
            category,
            count,
            brand,
            rating,
            image,
            image1,
            image2,
            image3,
            description,
            specification,
            price,
            id,
            uuid : tempUuid
        })

        setIsEdit(false)
        setTempUuid('')
        setName('')
        setPrice('')
        setQuantity('')
        setId('')
        setCategory('')
        setBrand('')
        setRating('')
        setCount('')
        setImage('')
        setImage1('')
        setImage2('')
        setImage3('')
        setDescription('')
        setSpecification('')
    } 

  return (
    <>
    <NavigationC />
    <CategorysC />
    <div style={{display:!isMobile && 'flex',marginLeft:!isMobile && '20vh',marginRight:!isMobile && '20vh'}}>
        <div style={{display:'flex',flexDirection:'column',color:'white',width:isMobile? '100%' : '40%',backgroundColor:'silver',paddingLeft:'2vh',paddingRight:"2vh"}}>
            <h2 style={{marginBottom:'2vh',color:'black',marginTop:isMobile? '3vh' :'9vh'}}>Unos novog proizvoda</h2>
            <label style={{marginTop:'2vh'}}>Ime:</label>
            <Input type='text' value={name} onChange={(e) => setName(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
            <Row xs={3} md={3}>
                <Col>
                    <label>Cijena(KM):</label>
                    <Input type='text' value={price} onChange={(e) => setPrice(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
                </Col>
                <Col>
                    <label>Kolicina:</label>
                    <Input type='text' value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
                </Col>
                <Col>
                    <label>id:</label>
                    <Input type='number' value={id} onChange={(e) => setId(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
                </Col>
            </Row>
            <Row xs={2} md={2}>
                <Col>
                    <label>Kategorija:</label>
                    <FormSelect  style={{fontSize:'15px',marginTop:'5px',marginBottom:'5vh',backgroundColor:'transparent',border:'1px solid black'}} onChange={(e) => setCategory(e.target.value)}>
                        <option value='Maske za mobitele' >Maske za mobitele</option>
                        <option value='Pametni satovi' >Pametni satovi</option>
                        <option value='Adapteri' >Adapteri</option>
                        <option value='Racunarska oprema' >Racunarska oprema</option>
                        <option value='Oprema za ribolov' >Oprema za ribolov</option>
                        <option value='Oprema za lov' >Oprema za lov</option>
                        <option value='Memorijske kartice' >Memorijske kartice</option>
                        <option value='Kamere' >Kamere</option>
                        <option value='Oprema za automobile' >Oprema za automobil</option>
                        <option value='Alati' >Alati</option>
                        <option value='Naocale' >Naocale</option>
                        <option value='Oprema za bicikliste' >Oprema za bicikliste</option>
                        <option value='Mjerni instrumenti' >Mjerni instrumenti</option>
                        <option value='Preparati za lice' >Preparati za lice</option>
                        <option value='Ostalo' >Ostalo</option>
                    </FormSelect>
                </Col>
                <Col>
                    <label>Brand:</label>
                    <Input type='text' value={brand} onChange={(e) => setBrand(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
                </Col>
            </Row>
            <Row xs={2} md={2}>
                <Col>
                    <label>Dostupno:</label>
                    <Input type='text' value={count} onChange={(e) => setCount(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
                </Col>
                <Col>
                    <label>Prosjek ocjena:</label>
                    <Input type='text' value={rating} onChange={(e) => setRating(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
                </Col>
            </Row>
            <Row xs={4} md={4}>
                <Col>
                    <label>URL slike 1:</label>
                    <Input type='text' value={image} onChange={(e) => setImage(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
                </Col>
                <Col>
                    <label>URL slike 2:</label>
                    <Input type='text' value={image1} onChange={(e) => setImage1(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
                </Col>
                <Col>
                    <label>URL slike 3:</label>
                    <Input type='text' value={image2} onChange={(e) => setImage2(e.target.value)} style={{fontSize:'20px',marginBottom:'5vh'}}/>
                </Col>
                <Col>
                    <label>URL slike 4:</label>
                    <Input type='text' value={image3} onChange={(e) => setImage3(e.target.value)} style={{fontSize:'20px',marginBottom:'0vh'}}/>
                </Col>
            </Row>
            <label>Description:</label>
            <Form.Control as="textarea" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} style={{fontSize:'20px',marginBottom:'2vh',backgroundColor:'silver',border:'1px solid black'}}/>
            <label>Specification:</label>
            <Form.Control as="textarea" rows={4} value={specification} onChange={(e) => setSpecification(e.target.value)} style={{fontSize:'20px',marginBottom:'3vh',backgroundColor:'silver',border:'1px solid black'}}/>
            {isEdit ?
            (<Button variant='primary' onClick={handleSubmitChange} style={{marginBottom:'2vh'}}>edit submit</Button>)
            : 
            (<Button variant='success' onClick={writeToDatabase} style={{marginBottom:'2vh'}}>submit</Button>)
            }
        </div>
        <div style={{marginTop:'0vh',padding:isMobile?  '0vh' : '7vh',backgroundColor:"lightgreen",width:'100%',paddingTop:'1vh',marginBottom:isMobile && '-130vh',paddingBottom:'1vh'}}>
            <div style={{margin:'7vh',padding:'1vh',overflow:'scroll',height:isMobile? '80vh' : '85%',backgroundColor:'silver',color:'black'}}>
            {item.filter(item => (item.ctg === 'items')).map(item => 
                <div style={{display:'flex',paddingLeft:isMobile? '0vh' : '1vh',marginBottom:'1vh'}}>
                    <div style={{display:'flex'}}>
                        <p style={{marginTop:'26px',marginRight:'10px'}}>{item.id}</p>
                        <img src={item.image} height='80vh' width='80vh'/>
                        <p style={{fontWeight:'700',marginTop:'1vh'}}>{item.name}</p>
                    </div>
                    <div style={{marginLeft:'auto',marginTop:'0.5vh'}}>
                        <Button onClick={() => handleUpdate(item)} style={{marginLeft:'1vh',marginRight:'1vh',marginBottom:'1vh'}}>Uredi</Button>
                        <Button onClick={() => handleDelete(item)} variant='danger' style={{marginBottom:'1vh'}}>Izbrisi</Button>
                    </div>
                </div>
            )}
            </div>
        </div>
    </div>
    </>
  )
}
