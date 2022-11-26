import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import TableRowsIcon from '@mui/icons-material/TableRows';
import WindowIcon from '@mui/icons-material/Window';
import FormRange from 'react-bootstrap/esm/FormRange';

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
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div style={{marginLeft:'2vh'}}>
                    <hr style={{marginLeft:'-2vh'}}/>
                    <h6>Kategorije</h6>
                    <div style={{paddingLeft:'2vh'}}>
                        <p>Maske za mobitele</p>
                        <p>Pametni satovi</p>
                        <p>Adapteri</p>
                        <p>Racunarska oprema</p>
                        <p>Oprema za ribolov</p>
                        <p>Oprema za lov</p>
                        <p>Oprema za bicikliste</p>
                        <p>Memorijske kartice</p>
                        <p>Kamere</p>
                        <p>Oprema za automobil</p>
                        <p>Alati</p>
                        <p>Naocale</p>
                        <p>Mjerni istrumenti</p>
                        <p>Preparati za lice</p>
                        <p>ostalo</p>
                    </div>
                    <hr style={{marginLeft:'-2vh'}} />
                    <h6>Brend</h6>
                    <div style={{paddingLeft:'2vh',display:'flex',flexDirection:'column'}}>
                        <Form.Check inline label="brand" name="group1" type='checkbox' style={{paddingBottom:'1vh'}}/>
                        <Form.Check inline label="brand" name="group1" type='checkbox' style={{paddingBottom:'1vh'}}/>
                        <Form.Check inline label="brand" name="group1" type='checkbox' style={{paddingBottom:'1vh'}}/>
                        <Form.Check inline label="brand" name="group1" type='checkbox' style={{paddingBottom:'1vh'}}/>
                        <Form.Check inline label="brand" name="group1" type='checkbox' style={{paddingBottom:'1vh'}}/>
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
            <Button style={{width:'15vh',margin:'1vh'}} onClick={() => handleShow()}>Filter</Button>
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
                <Modal.Body><IsntMobileSidebar/></Modal.Body>
            </Modal>
        </div>
        )
    }

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
