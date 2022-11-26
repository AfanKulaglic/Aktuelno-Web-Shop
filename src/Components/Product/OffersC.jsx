import React, {useEffect, useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Carousel from 'better-react-carousel'
import offer from '../../Img/Home/offer.png'
import item from '../../Img/Home/item.png'
import { useFetch } from '../../useFetch'
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../../index.css'

export const OffersC = () => {
    const [item,setItem] = useState(null)
    const[onCount,setOnCount] = useState(true)
    const isMobile = window.innerWidth <= 500;

    useEffect(() => {
        fetch('https://mocki.io/v1/f4e0f07b-47d9-4e05-805c-8afde40e0fc7')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setItem(data)
        })
      },[])

    const[brojac,setBrojac] = useState(true)

    const BrojacF = () => {
        return setBrojac(false)
    }

    const CarouselMobile = () => {
        return (
        <Carousel cols={5} rows={1} gap={8} loop> 
            <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.map(item =>    
                    <>       
                        {item.id === 10 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                {item && item.map(item =>     
                    <>     
                        {item.id === 9 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                
                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.map(item =>    
                    <>       
                        {item.id === 8 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                {item && item.map(item =>     
                    <>     
                        {item.id === 7 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.map(item =>    
                    <>       
                        {item.id === 7 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                {item && item.map(item =>     
                    <>     
                        {item.id === 6 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.map(item =>    
                    <>       
                        {item.id === 5 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                {item && item.map(item =>     
                    <>     
                        {item.id === 4 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                
                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.map(item =>    
                    <>       
                        {item.id === 10 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                {item && item.map(item =>     
                    <>     
                        {item.id === 9 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                
                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.map(item =>    
                    <>       
                        {item.id === 8 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                {item && item.map(item =>     
                    <>     
                        {item.id === 7 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.map(item =>    
                    <>       
                        {item.id === 7 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                {item && item.map(item =>     
                    <>     
                        {item.id === 6 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.map(item =>    
                    <>       
                        {item.id === 5 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                {item && item.map(item =>     
                    <>     
                        {item.id === 4 &&
                        <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                            <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                <h5>{item.name}</h5>
                                <p>Aktuelno d.o.o</p>
                                <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                    Informacije
                                </Button>
                                <BrojacF />
                            </div>
                        </div>
                        }
                    </>
                )}
                </div>
                </Carousel.Item>
            </Carousel>
        )
    }

  return (
    <div>
        <Container>
        <h3 style={{padding:'10px'}}>Aktuelno Top Ponuda</h3>
            {isMobile &&
                <CarouselMobile />
            }
            {!isMobile &&
                <Carousel cols={5} rows={1} gap={8} loop>
                {item && item.map(item => 
                <Carousel.Item>
                            <div style={{padding:'2px',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                                <img  alt='image' src={item.image} width={isMobile? '150px' : '200px'} />
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                                    <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                                    <h5>{item.name}</h5>
                                    <p>Aktuelno d.o.o</p>
                                    <h6 style={{color:'red',fontSize:'27px'}}>{item.price} KM</h6>
                                    <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                                        Informacije
                                    </Button>
                                    <BrojacF />
                                </div>
                            </div>
                </Carousel.Item>
                )}
                </Carousel> 
            }
        </Container>
    </div>
  )
}
