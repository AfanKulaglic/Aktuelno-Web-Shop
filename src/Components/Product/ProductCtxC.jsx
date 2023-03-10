import React,{useState,useEffect} from 'react'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFetch } from '../../useFetch'
import {useLocation, useParams} from 'react-router-dom'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import OlxIcon from '../../Img/OlxIcon.png'
import InstagramIcon from '../../Img/InstagramIcon.png'
import { Button, Col, Dropdown, Form, FormLabel, Modal, Row } from 'react-bootstrap';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { db } from '../../firebase'
import { uid } from 'uid'
import { set,ref, onValue,remove, update } from 'firebase/database'
import { FormControlLabel, Input, Radio, RadioGroup } from '@mui/material';
import { ModalCtx } from './ModalCtx';

export const ProductCtxC = () => {
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


    const{name} = useParams()

    //carousel
    const[image,setImage] = useState()
    const[image1,setImage1] = useState()
    const[image2,setImage2] = useState()
    const[image3,setImage3] = useState()

    const data = [
        {
          image: image
        },
        {
          image: image1
        },
        {
          image: image2,
        },
        {
          image: image3
        }
      ];

    const images = [image, image1, image2, image3].map((size) => ({
        src: size
    }));
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

      const GetImg = ({image,image1,image2,image3}) => {
        setImage(image)
        setImage1(image1)
        setImage2(image2)
        setImage3(image3)
      }


    //Rating
    const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Satisfied',
    },
    };

    function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
    }

    IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
    };

    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
        },
    }));

    //Product Detail
    const ProductDetails = () => {
        return (
            <>
            {item && item.map(item => 
            <>
                {item.name === name &&
                <>
                    <div>
                        <h2>{item.name}</h2>
                        <div style={{display:'flex'}}>
                            <p>Brand:</p>
                            <p style={{marginLeft:'5px',fontWeight:'600'}}>{item.brand}</p>
                        </div>
                        <div style={{display:'flex'}}>
                            <p>ID:</p>
                            <p style={{marginLeft:'5px',fontWeight:'600'}}>{item.ID}</p>
                        </div>
                        <p>Aktuelno d.o.o.</p>
                        <div style={{display:'flex'}}>
                            <StyledRating
                                name="highlight-selected-only"
                                defaultValue={4}
                                IconContainerComponent={IconContainer}
                                getLabelText={(value) => customIcons[value].label}
                                highlightSelectedOnly
                                style={{marginBottom:'4vh'}}
                            />
                            <p style={{marginLeft:'8px'}}>4.8</p>
                        </div>
                    </div>
                    <div style={{marginLeft:'auto'}}>
                        <ShareIcon style={{fontSize:'4vh',marginTop:'0px'}} />
                        <FavoriteBorderIcon style={{fontSize:'4vh'}} />
                    </div>
                </>
                }
            </>
            )}
            </>
        )
    }

    const ProductPrice = () => {
        return (
            <>
            {item && item.map(item => 
            <>
                {item.name === name &&
                <>
                    <div style={{display:'flex'}}>
                        <p style={{marginTop:'5px'}}>CIJENA</p>
                        <h2 style={{marginLeft:'10px',color:'maroon'}}>{item.price} KM</h2>
                    </div>
                    <div style={{marginTop:isMobile? '0px' : '10px'}}>
                        <FacebookIcon fontSize='large' style={{marginRight:'7px',color:'blue'}}/>
                        <EmailIcon  fontSize='large' style={{marginRight:'7px',color:'red'}}/>
                        <img src={OlxIcon} width='30px' style={{marginRight:'7px'}}/>
                        <img src={InstagramIcon} width='30px' />
                    </div>
                </>
                }
            </>
            )}
            </>
        )
    }

    const[quantity,setQuantity] = useState(1)

    const Quantity = () => {
        return (
            <>
                <div style={{display:'flex',marginTop:'2vh',height:'5vh'}}>
                    <p style={{marginTop:'1vh',marginRight:'1vh'}}>Kolicina:</p>
                    <Button style={{width:'5.1vh'}}>-</Button>
                    <div style={{backgroundColor:'silver',paddingLeft:'2.1vh',paddingTop:'1vh',width:'5vh',borderRadius:'20%'}}>
                        <p>{quantity}</p>
                    </div>
                    <Button style={{width:'5.1vh'}}>+</Button>
                </div>
            </>
        )
    } 

    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(true);
    }

    const{ state } = useLocation()


    const [fav,setFav] = useState('fav')

    function UpdateCart(item) {        
        update(ref(db,`/${item.uuid}`), {
            [fav+item.brojac]:name,
            brojac:item.brojac+1,
            uuid:item.uuid
        })
        
        console.log(item)
    }

    function AddToCart() {
        {item.filter(item => (item.email === state.email)).map(item => 
           UpdateCart(item)
        )}
    }

  return (
    <div style={{display:!isMobile? 'flex' : 'block'}}>
            <div style={{display:'flex'}}>
                {isMobile &&
                    <ProductDetails />
                }
            </div>
            <div style={{width:isMobile? '100%' : '50%'}}>
                {item && item.map(item => 
                    <div>                  
                        {name === item.name &&
                            <div>
                                <GetImg image={item.image} image1={item.image1} image2={item.image2} image3={item.image3}/>
                                <Carousel 
                                    hasMediaButton='false' 
                                    images={images} 
                                    style={{backgroundColor:'transparent',height:isMobile? '300px' : '650px',padding:isMobile? '0px' : '30px',paddingTop:'0px'}} />
                            </div>
                        }
                    </div>
                )}
            </div>
            {!isMobile &&
                <div style={{display:'block',width:'50%'}}>
                    <div style={{display:'flex',width:'100%',padding:'35px',paddingTop:'24px'}}>
                        <ProductDetails />
                    </div>
                    <div style={{padding:'35px'}}>
                        <ProductPrice />
                        <Quantity/>
                        <Button onClick={() => AddToCart()} style={{color:'white',marginTop:'3vh',width:'32vh',padding:'1vh',fontWeight:'700'}} startIcon={<ShoppingBasketIcon />}>
                            DODAJ U KORPU
                        </Button>
                        <Button onClick={() => handleShow()} variant='danger' style={{color:'white',marginTop:'3vh',width:'32vh',marginLeft:'1vh',padding:'1vh',fontWeight:'700'}} startIcon={<ShoppingBasketIcon />}>
                            NARUCI
                        </Button>
                    </div>
                </div>
            }
            {isMobile &&
                <div style={{marginTop:'2vh'}}>
                    <ProductPrice />
                    <Quantity />
                    <Button onClick={() => AddToCart()} variant='danger' style={{color:'white',marginTop:'3vh',width:'100%',padding:'1.4vh',fontWeight:'700'}} endIcon={<ShoppingBasketIcon />}>
                        DODAJ U KORPU
                    </Button>
                    <Button onClick={() => handleShow()} variant='success' style={{color:'white',marginTop:'3vh',width:'100%',padding:'1.4vh',fontWeight:'700'}} endIcon={<ShoppingBasketIcon />}>
                        NARUCI
                    </Button>
                </div>
            }
            {isMobile &&
                <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ModalCtx />
                    </Modal.Body>
                </Modal>            
            }
            {!isMobile &&
                <Modal show={show} onHide={() => setShow(false)} size="lg">
                    <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ModalCtx />
                    </Modal.Body>
                </Modal>  
            }
    </div>
  )
}
