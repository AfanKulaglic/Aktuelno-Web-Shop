import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Dropdown, Nav, NavDropdown } from 'react-bootstrap';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WatchIcon from '@mui/icons-material/Watch';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import ComputerIcon from '@mui/icons-material/Computer';
import PhishingIcon from '@mui/icons-material/Phishing';
import PetsIcon from '@mui/icons-material/Pets';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import SpeedIcon from '@mui/icons-material/Speed';
import PhoneIcon from '@mui/icons-material/Phone';
import WidgetsIcon from '@mui/icons-material/Widgets';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import '../../index.css'

export const CategorysC = () => {
    const isMobile = window.innerWidth <= 500;

    const location = useLocation();
    console.log(location.pathname)

    const[isShow,setIsShow] = useState(location.pathname==='/'? true : false)

    const showHidden = () => {
        if(window.scrollY >= 300) {
            setIsShow(false)
          } else {
            setIsShow(true)
          }
    }

    if(location.pathname === '/') {
        console.log('2222')
        window.addEventListener('scroll', showHidden)
    }

  return (
    <div style={{zIndex:'1',position:'static',width:'100%'}}>
        {!isMobile  &&
            <div style={{height:'5vh',paddingLeft:'20vh',marginBottom:'0vh',fontWeight:'700',display:'flex',position:'fixed',zIndex:'1',backgroundColor:'white',width:'100%'}}>
                <Nav>
                    {isShow &&
                    <NavDropdown
                    show
                    menuVariant='white'
                    data-toggle="dropdown"
                    title={<p style={{color:'black',marginLeft:'1vh',marginBottom:'-2vh',paddingTop:'0.6vh'}}>Sve kategorije <WidgetsIcon/></p>}
                    style={{backgroundColor:'lightgreen',color:'black',borderRadius:'10px',paddingBottom:'-3vh',width:'20vh',height:'5vh',paddingLeft:'1vh',paddingTop:'-2vh'}}
                    >
                        <NavDropdown.Item href='/Shop/Category/maske za mobitele' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Maske za mobitele<SmartphoneIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/pametni satovi' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Pametni satovi <WatchIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/adapteri' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Adapteri <GasMeterIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/računarska oprema' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Računarska oprema <ComputerIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/oprema za ribolov' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Oprema za ribolov <PhishingIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/oprema za lov' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Oprema za lov <PetsIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/oprema za bicikliste' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Oprema za bicikliste <PedalBikeIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/memorijske kartice' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Memorijske kartice <SdStorageIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/kamere' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Kamere <CameraAltIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/oprema za automobil' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Oprema za automobile <DirectionsCarIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/alati' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Alati <BuildIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/naočale' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Naocale <svg style={{marginLeft:'auto'}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16"><path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z"/></svg></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/mjerni istrumenti' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Mjerni instrumenti <SpeedIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/preparati za lice' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Preparati za lice <FaceRetouchingNaturalIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/Shop/Category/ostalo' style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>ostalo <OtherHousesIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                    </NavDropdown>
                    }
                    {!isShow &&
                    <NavDropdown
                    menuVariant='white'
                    title={<p style={{color:'black',marginLeft:'1vh',marginBottom:'-2vh',paddingTop:'0.6vh'}}>Sve kategorije <WidgetsIcon/></p>}
                    style={{backgroundColor:'lightgreen',color:'black',borderRadius:'10px',paddingBottom:'-3vh',width:'20vh',height:'5vh',paddingLeft:'1vh',paddingTop:'-2vh'}}
                    className='my-dropdown-toggle'
                    >
                        <NavDropdown.Item href="#action/3.1" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Maske za mobitele<SmartphoneIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Pametni satovi <WatchIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Adapteri <GasMeterIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Racunarska oprema <ComputerIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Oprema za ribolov <PhishingIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Oprema za lov <PetsIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Oprema za bicikliste <PedalBikeIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Memorijske kartice <SdStorageIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Kamere <CameraAltIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Oprema za automobile <DirectionsCarIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Alati <BuildIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Naocale <svg style={{marginLeft:'auto'}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16"><path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z"/></svg></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Mjerni instrumenti <SpeedIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>Preparati za lice <FaceRetouchingNaturalIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{padding:'0.2vh',fontWeight:'400',display:'flex'}}>ostalo <OtherHousesIcon style={{marginLeft:'auto'}}/></NavDropdown.Item>
                    </NavDropdown>
                    }
                </Nav>
                <div style={{marginLeft:'auto',display:'flex'}}>
                    <div style={{display:'flex',marginRight:'3vh',fontWeight:'900',paddingTop:'1.3vh'}}>
                        <PhoneIcon style={{marginRight:'1vh'}}/>
                        <p>060 33 48 311</p>
                    </div>
                    <div style={{display:'flex',marginRight:'25vh',fontWeight:'900',paddingTop:'1.3vh'}}>
                        <HomeIcon style={{marginRight:'1vh'}}/>
                        <p>Sarajevo</p>
                    </div>
                </div>
            </div>
        }
        {isMobile &&
            <div style={{height:'60px',padding:'10px',overflow:'scroll',fontWeight:'640',marginBottom:'0px',display:'flex',whiteSpace:'nowrap',position:'static',zIndex:'1',backgroundColor:'white'}}>
                <div style={{width:'500px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Maske za mobitele</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Pametni satovi</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Adapteri</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Racunarska oprema</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Oprema za ribolov</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Oprema za lov</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Oprema za bicikliste</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Memorijske kartice</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Kamera</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Oprema za automobile</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Alati</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Naocale</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Mjerni istrumenti</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Preparati za lice</p>
                </div>
                <div style={{width:'300px',marginRight:'2vh',marginTop:'1vh'}}>
                    <p>Ostalo</p>
                </div>
            </div>
        }
    </div>
  )
}
