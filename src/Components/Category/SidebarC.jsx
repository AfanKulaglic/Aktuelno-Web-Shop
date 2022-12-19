import React, { useEffect, useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import TableRowsIcon from '@mui/icons-material/TableRows';
import WindowIcon from '@mui/icons-material/Window';
import FormRange from 'react-bootstrap/esm/FormRange';
import { Link, useLocation } from 'react-router-dom';
import { db } from '../../firebase'
import { uid } from 'uid'
import  { set, ref, onValue } from 'firebase/database'

export const SidebarC = (props) => {
    const isMobile = window.innerWidth <= 500;

    const onInputChange = e => {
        setPrices({...prices,[e.target.name]:e.target.value})
    }

    const[prices,setPrices] = useState({
        maxPrice:500,
        minPrice:1
    })

    const onSubmit = () => {
        props.onSubmit(minPrice,maxPrice)
    }

    const {maxPrice,minPrice} = prices  

    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
    }

    const{ state } = useLocation()

    const IsntMobileSidebar = () => {
        return (
            <>
                <Dropdown style={{margin:'0vh',width:'100%'}}>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{width:'100%'}}>
                    Preporuceno
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    <Dropdown.Item active href="#/action-1">
                        Preporuceno
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Cijena rastuca</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Cijena opadajuca</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div style={{marginLeft:'2vh'}}>
                    <hr style={{marginLeft:'-2vh'}}/>
                    <h6>Kategorije</h6>
                    <div style={{paddingLeft:'2vh'}}>
                        <Link to={'/Shop/Category/Maske za mobitele'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Maske za mobitele</Link><br/>
                        <Link to={'/Shop/Category/Adapteri'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Adapteri</Link><br/>
                        <Link to={'/Shop/Category/Racunarska oprema'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Racunarska oprema</Link><br/>
                        <Link to={'/Shop/Category/Oprema za ribolov'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Oprema za ribolov</Link><br/>
                        <Link to={'/Shop/Category/Oprema za lov'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Oprema za lov</Link><br/>
                        <Link to={'/Shop/Category/Oprema za bicikliste'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Oprema za bicikliste</Link><br/>
                        <Link to={'/Shop/Category/Memorijske kartice'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Memorijske kartice</Link><br/>
                        <Link to={'/Shop/Category/Kamere'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Kamere</Link><br/>
                        <Link to={'/Shop/Category/Alati'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Alati</Link><br/>
                        <Link to={'/Shop/Category/Naocale'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Naocale</Link><br/>
                        <Link to={'/Shop/Category/Mjerni instrumenti'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Oprema za ribolov</Link><br/>
                        <Link to={'/Shop/Category/Preparati za lice'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}>Preparati za lice</Link><br/>
                        <Link to={'/Shop/Category/ostalo'} state={{ email:state && state.email }} style={{textDecoration:'none',color:'black'}}></Link>ostalo<br/>
                    </div>
                    <hr style={{marginLeft:'-2vh'}} />
                    <h6>Brend</h6>
                    <div style={{paddingLeft:'2vh',display:'flex',flexDirection:'column'}}>
                        {items.filter(items => (items.brand !== '' && items.ctg === 'items')).map(items =>
                        <>
                            <Form.Check inline label={items.brand} name="group1" type='checkbox' style={{paddingBottom:'1vh'}}/>
                        </>
                        )}
                    </div>
                    <hr style={{marginLeft:'-2vh'}} />
                    <h6>Cijena</h6>
                    <div style={{paddingLeft:'1vh',display:'flex',flexDirection:'column'}}>
                        <Form.Range name='minPrice' value={minPrice} onChange={(e) => onInputChange(e)} />
                        <Form.Label for='range'>{minPrice} Km</Form.Label>
                        <Form.Range type="range" name='maxPrice' value={maxPrice} onChange={(e) => onInputChange(e)} />
                        <Form.Label for='points1'>{maxPrice} Km</Form.Label>
                    </div>
                    <hr style={{marginLeft:'-20px'}}/>
                </div>
                <Button onClick={() => onSubmit()} style={{width:'100%',marginBottom:'2vh'}}>Primjeni</Button>
            </>
        )
    }

    const MobileSidebar = () => {
        return (
        <div style={{display:'flex'}}>
            <Button style={{width:'15vh',margin:'1vh'}} onClick={() => handleShow()}>
                Filter
            </Button>
            <Dropdown style={{margin:'1vh',width:'45%'}}>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{width:'100%'}}>
                Preporuceno
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                <Dropdown.Item active href="#/action-1">
                    Preporuceno
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <TableRowsIcon style={{margin:'1vh',fontSize:'4.5vh',marginLeft:'0vh'}}/>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <IsntMobileSidebar/>
                </Modal.Body>
            </Modal>
        </div>
        )
    }

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
    <div style={{display:'flex',flexDirection:'column'}}>
        {isMobile &&
            <MobileSidebar />
        }
        <div style={{width:'100%'}}>
            <div style={{display:'flex'}}> 
                <HomeOutlinedIcon />
                <ChevronRightIcon />
                <p>Maske za mobitele</p>
                {!isMobile &&
                    <TableRowsIcon style={{margin:'0vh',fontSize:'3vh',marginLeft:'5vh'}}/>
                }
            </div>
            {!isMobile && 
                <IsntMobileSidebar />
            }
        </div>
    </div>
  )
}
