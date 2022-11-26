import React from 'react'
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

export const NavigationC = () => {
    const isMobile = window.innerWidth <= 500;

  return (
    <div style={{marginTop:'65px',marginBottom:'9.5vh'}}>
        <Navbar bg="white" expand="lg" fixed='top'>
          <Container>
            <div style={{display:'flex'}}>
              <Navbar.Toggle  aria-controls="navbarScroll" style={{border: '2px solid transparent',marginLeft:'0px'}}/>
              <Navbar.Brand href="#" style={{marginLeft:isMobile ? '0px' : '143px'}}><img alt='logo' src={Logo} height = { isMobile ? '40px' : '70px'}/></Navbar.Brand>
              {isMobile &&
              <div style={{display:'flex'}}>
                <AccountCircleIcon style={{marginLeft:'4vh',marginTop:'1vh',fontSize:'4vh'}}/>
                <FavoriteIcon style={{marginLeft:'1vh',marginTop:'1vh',fontSize:'4vh'}}/>
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
            <div style={{width:'100%'}}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{width: isMobile ? '100%' : '100%'}}
                />
                <SearchIcon style={{marginTop:'1vh',marginLeft:'-5vh',color:'green'}} />
              </Form>
            </div>
          </Container>
          {!isMobile &&
            <div style={{display:'flex',marginRight:'20vh'}}>
              <AccountCircleIcon style={{marginTop:'1vh',marginRight:'0vh',fontSize:'35'}} />
              <h5 style={{marginTop:'1.5vh',marginRight:'0.5vh',fontSize:'35'}}>Uloguj se</h5>
              <FavoriteIcon style={{marginTop:'1vh',marginRight:'0vh',fontSize:'35'}} />
              <h5 style={{marginTop:'1.5vh',marginRight:'0.5vh',fontSize:'35'}}>Lista zelja</h5>
              <ShoppingCartIcon style={{marginTop:'1vh',marginRight:'0vh',fontSize:'35'}} />
              <h5 style={{marginTop:'1.5vh',marginRight:'0.5vh',fontSize:'35'}}>Korpa</h5>
            </div>
          }
        </Navbar>
    </div>
  )
}
