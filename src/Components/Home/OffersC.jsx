import React, {useEffect, useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Carousel from 'better-react-carousel'
import offer from '../../Img/Home/offer.png'
import offer1 from '../../Img/Home/offer1.jpg'
import offer2 from '../../Img/Home/offer2.jpg'
import offer3 from '../../Img/Home/offer3.jpg'
import offer4 from '../../Img/Home/offer4.jpg'
import offer5 from '../../Img/Home/offer5.jpg'
import item from '../../Img/Home/item.png'
import { useFetch } from '../../useFetch'
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { set,ref, onValue } from 'firebase/database'
import '../../index.css'
import { db } from '../../firebase'
import { uid } from 'uid'
import { Link } from 'react-router-dom'

export const OffersC = () => {
    const [item,setItem] = useState(null)
    const[onCount,setOnCount] = useState(true)
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

    const[brojac,setBrojac] = useState(true)

    const BrojacF = () => {
        return setBrojac(false)
    }

    const CarouselMobile = () => {
        return (
        <Carousel cols={5} rows={1} gap={8} loop> 
            <Carousel.Item>
                <div style={{display:'flex',paddingLeft:'1vh'}}>
                {item && item.filter(item => (item.ctg === 'items')).map(item =>       
                    <>       
                        {item.id === 1 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                {item && item.filter(item => (item.ctg === 'items')).map(item =>     
                    <>     
                        {item.id === 2 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                
                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.filter(item => (item.ctg === 'items')).map(item =>    
                    <>       
                        {item.id === 3 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                {item && item.filter(item => (item.ctg === 'items')).map(item =>     
                    <>     
                        {item.id === 4 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.filter(item => (item.ctg === 'items')).map(item =>    
                    <>       
                        {item.id === 5 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                {item && item.filter(item => (item.ctg === 'items')).map(item =>     
                    <>     
                        {item.id === 6 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.filter(item => (item.ctg === 'items')).map(item =>    
                    <>       
                        {item.id === 7 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                {item && item.filter(item => (item.ctg === 'items')).map(item =>     
                    <>     
                        {item.id === 8 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                
                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.filter(item => (item.ctg === 'items')).map(item =>    
                    <>       
                        {item.id === 9 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                {item && item.filter(item => (item.ctg === 'items')).map(item =>     
                    <>     
                        {item.id === 10 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                
                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.filter(item => (item.ctg === 'items')).map(item =>    
                    <>       
                        {item.id === 11 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                {item && item.filter(item => (item.ctg === 'items')).map(item =>     
                    <>     
                        {item.id === 12 &&
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                        }
                    </>
                )}
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div style={{display:'flex'}}>
                {item && item.filter(item => (item.ctg === 'items')).map(item =>    
                    <>       
                        {item.id === 13 &&
                        <div style={{padding:'2px',border:'2px solid black',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
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
                {item && item.filter(item => (item.ctg === 'items')).map(item =>     
                    <>     
                        {item.id === 14 &&
                        <div style={{padding:'2px',border:'2px solid black',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
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
                {item && item.filter(item => (item.ctg === 'items')).map(item =>    
                    <>       
                        {item.id === 15 &&
                        <div style={{padding:'2px',border:'2px solid black',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
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
                {item && item.filter(item => (item.ctg === 'items')).map(item =>     
                    <>     
                        {item.id === 16 &&
                        <div style={{padding:'2px',border:'2px solid black',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
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

    const CarouselCtx = ({image,name,price}) => {
        return (
            <Link onClick={() => window.location.reload()} to={'/Shop/Product/'+([name])} style={{textDecoration:'none',color:'black',padding:'2px',border:'0px solid black',width:isMobile? '155px' : '205px',marginLeft:isMobile? '0vh' : '3vh'}}>
                <div style={{height:isMobile? '23vh' : '30vh'}}>
                    <img  alt='image' src={image} width='100%' height='100%' />
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <FavoriteBorderIcon  style={{paddingTop:'4px',paddingBottom:'4px',fontSize:'40px'}} />
                    <p style={{float:'right'}}>{onCount? 'Na stanju' : 'Nema na stanju'}</p>
                    <div style={{height:isMobile? '15vh':'10vh'}}>
                        <h5>{name}</h5>
                    </div>
                    <p>Aktuelno d.o.o</p>
                    <h6 style={{color:'red',fontSize:'27px'}}>{price} KM</h6>
                    <Button variant="outlined" style={{color:'skyblue'}} startIcon={<InfoIcon style={{}}/>}>
                        Informacije
                    </Button>
                    <BrojacF />
                </div>
            </Link>            
        )
    }

  return (
    <div style={{marginRight:!isMobile && '-40px',overflow:'hidden'}}>
        <div style={{marginLeft:!isMobile && '20vh',marginRight:!isMobile && '22vh',marginTop:!isMobile && '3vh'}}>
        <Row xs={2} md={6} className="g-4" style={{paddingTop:'5vh',marginBottom:'5vh',display:'flex',justifyContent:'center'}}>
            <Col style={{width:isMobile && '43%'}}>
                <Card style={{borderRadius:'20px'}}>
                    <Card.Img style={{borderRadius:'20px'}} variant="top" src={offer}/>
                </Card>
            </Col>
            <Col style={{width:isMobile && '43%'}}> 
                <Card style={{borderRadius:'20px'}}>
                    <Card.Img style={{borderRadius:'20px'}} variant="top" src={offer1} />
                </Card>
            </Col>
            <Col style={{width:isMobile && '43%'}}>
                <Card style={{borderRadius:'20px'}}>
                    <Card.Img  style={{borderRadius:'20px'}} variant="top" src={offer2} />
                </Card>
            </Col>
            <Col style={{width:isMobile && '43%'}}>
                <Card style={{borderRadius:'20px'}}>
                    <Card.Img style={{borderRadius:'20px'}} variant="top" src={offer5} />
                </Card>
            </Col>
            <Col style={{width:isMobile && '43%'}}> 
                <Card style={{borderRadius:'20px'}}>
                    <Card.Img style={{borderRadius:'20px'}} variant="top" src={offer4} />
                </Card>
            </Col>
            <Col style={{width:isMobile && '43%'}}>
                <Card style={{borderRadius:'20px'}}>
                    <Card.Img style={{borderRadius:'20px'}} variant="top" src={offer3} />
                </Card>
            </Col>
        </Row>
        <h3 style={{padding:'10px'}}>Aktuelno Top Ponuda</h3>
            {isMobile &&
                <CarouselMobile />
            }
            {!isMobile &&
                <Carousel cols={5} rows={1} gap={8} loop>
                {item && item.filter(item => (item.ctg === 'items')).map(item =>  
                <Carousel.Item>
                            <CarouselCtx image={item.image} name={item.name} price={item.price} />
                </Carousel.Item>
                )}
                </Carousel> 
            }
        </div>
    </div>
  )
}
