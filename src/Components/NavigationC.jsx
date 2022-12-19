import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CategorysC } from './Home/CategorysC';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase'
import { uid } from 'uid'
import  { set, ref, onValue } from 'firebase/database'
import { getAuth, signOut } from "firebase/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { Alert } from 'react-bootstrap';

export const NavigationC = () => {
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

    const{ state } = useLocation()
    const[email,setEmail]=useState('Uloguj se2')

    console.log(state,'nav')

    const auth = getAuth();

    const navigation = useNavigate()

    function toWishList() {
      navigation('/WishList', {
        state: {
            email:state.email
          }
      })
    }

    function toHome() {
      navigation('/', {
        state: {
            email:state.email
          }
      })
    }
    

  return (
    <div style={{marginTop:'65px'}}>
        <Navbar bg="white" expand="lg" fixed='top'>
            <div style={{display:'flex',width:isMobile ? '100%' : '50%'}}>
              <div style={{display:'flex',paddingRight:!isMobile && '2v10'}}>
                <Navbar.Toggle  aria-controls="navbarScroll" style={{marginLeft:'0px'}}/>
                <Navbar.Brand style={{marginLeft:!isMobile && '18vh'}}><Link to="/" state={{ email:state && state.email }}><img alt='logo' src={Logo} height = { isMobile ? '40px' : '70px'}/></Link></Navbar.Brand>
              </div>
              {isMobile &&
              <div style={{display:'flex',marginLeft:'auto'}}>
                {!state? 
                  <AccountCircleIcon onClick={() => window.location.href  = '/Login'} style={{marginTop:'1vh',marginRight:'0vh',fontSize:'35'}} />
                  :
                  <LogoutIcon onClick={() => signOut(auth).then(() => {
                    alert('signout')
                    navigation('/')
                  }).catch((error) => {
                    // An error happened.
                  })} style={{marginTop:'1vh',marginRight:'0vh',fontSize:'35'}} />
                }
                {!state &&
                  <HomeIcon onClick={() => window.location.href = '/'}   style={{marginLeft:'1vh',marginTop:'1vh',fontSize:'4vh'}}/>
                }
                {state &&
                  <FavoriteIcon onClick={() => toWishList()}   style={{marginLeft:'1vh',marginTop:'1vh',fontSize:'4vh'}}/>
                }
                <ShoppingCartIcon style={{marginLeft:'1vh',marginTop:'1vh',fontSize:'4vh'}}/>
              </div>
              }
            </div>
            {isMobile &&
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            }
            <div style={{width:isMobile? '100%' : '100%'}}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{width: isMobile ? '100%' : '100%',marginTop:'0.7vh',marginLeft:!isMobile && '0%'}}
                />
                <SearchIcon style={{marginTop:'1.5vh',marginLeft:'-5vh',color:'blue'}} />
              </Form>
            </div>
          {!isMobile &&
            <div style={{display:'flex',marginRight:'24vh',marginLeft:'10vh'}}>
              {!state? 
              <>
                <AccountCircleIcon onClick={() => window.location.href  = '/Login'} style={{marginTop:'1.3vh',marginRight:'0vh',fontSize:'35'}} />
                <p style={{marginTop:'1.3vh',marginRight:'0.5vh',fontSize:'19px',whiteSpace:'nowrap'}}>Prijavi se</p>
              </>
              :
              <>
                <LogoutIcon onClick={() => signOut(auth).then(() => {
                  alert('signout')
                  navigation('/')
                }).catch((error) => {
                  // An error happened.
                })} style={{marginTop:'1vh',marginRight:'0vh',fontSize:'35'}} />
                <p style={{marginTop:'1.3vh',marginRight:'0.5vh',fontSize:'19px',whiteSpace:'nowrap'}}>Odjavi se</p>
              </>
              }
              <>
              {!state &&
                <>
                  <FavoriteIcon onClick={() => alert('Potrebno je prijaviti se kako bi koristili korpu')}   style={{marginLeft:'1vh',marginTop:'1vh',fontSize:'4vh'}}/>
                  <p style={{marginTop:'1.3vh',fontSize:'19px',whiteSpace:'nowrap',marginRight:'2vh'}}>Pocetna</p>
                </>
              }
              {state &&
                <>
                  <FavoriteIcon onClick={() => toWishList()} style={{marginLeft:'1vh',marginTop:'1vh',fontSize:'4vh'}}/>
                  <p style={{marginTop:'1.3vh',marginRight:'2vh',fontSize:'19px',whiteSpace:'nowrap'}}>Lista zelja</p>
                </>
              }              
              </>
              <ShoppingCartIcon style={{marginTop:'1.3vh',marginRight:'0vh',fontSize:'35'}} />
              <p style={{marginTop:'1.3vh',marginRight:'0.5vh',fontSize:'19px',whiteSpace:'nowrap'}}>Korpa</p>
            </div>
          }
        </Navbar>
    </div>
  )
}
