import React, {useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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

    const[isShow,setIsShow] = useState(location.pathname==='/' ? true : false)

    const showHidden = () => {
        if(window.scrollY >= 300) {
            setIsShow(false)
          } else {
            setIsShow(true)
          }
    }

    if(location.pathname === '/' ) {
        console.log('2222')
        window.addEventListener('scroll', showHidden)
    }

    const navigation = useNavigate()
    const{ state } = useLocation()
    console.log(state)

    const DropdownC = () => {
        return (
            <>
            {state && 
            <div style={{marginTop:"-2vh",backgroundColor:'#E3e5e6',marginBottom:'-2vh',height:'71vh',paddingTop:'1.3vh',width:'19.7vh'}}>
                <Link to="/Shop/Category/Maske za mobitele" state={{ email: state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Maske za mobitele<SmartphoneIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Pametni satovi" state={{ email: state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Pametni satovi <WatchIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Adapteri" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Adapteri <GasMeterIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Racunarska oprema" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Računarska oprema <ComputerIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Oprema za ribolov" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Oprema za ribolov <PhishingIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Oprema za lov" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Oprema za lov <PetsIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Oprema za bicikliste" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Oprema za bicikliste <PedalBikeIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Memorijske kartice" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Memorijske kartice <SdStorageIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Kamere" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Kamere <CameraAltIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Oprema za automobile" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Oprema za automobile <DirectionsCarIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Alati" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Alati <BuildIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Naocale" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Naocale <svg style={{marginLeft:'auto'}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16"><path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z"/></svg></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Mjerni instrumenti" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Mjerni instrumenti <SpeedIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Preparati za lice" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Preparati za lice <FaceRetouchingNaturalIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/ostalo" state={{ email:state && state.email }} style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>ostalo <OtherHousesIcon style={{marginLeft:'auto'}}/></Link>
            </div>
            }
            {!state && 
            <div style={{marginTop:"-2vh",backgroundColor:'#E3e5e6',marginBottom:'-2vh',height:'71vh',paddingTop:'1.3vh',width:'19.7vh'}}>
                <Link to="/Shop/Category/Maske za mobitele" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Maske za mobitele<SmartphoneIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Pametni satovi" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Pametni satovi <WatchIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Adapteri" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Adapteri <GasMeterIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Racunarska oprema" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Računarska oprema <ComputerIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Oprema za ribolov" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Oprema za ribolov <PhishingIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Oprema za lov" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Oprema za lov <PetsIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Oprema za bicikliste" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Oprema za bicikliste <PedalBikeIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Memorijske kartice" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Memorijske kartice <SdStorageIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Kamere" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Kamere <CameraAltIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Oprema za automobile" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Oprema za automobile <DirectionsCarIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Alati" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex'}}>Alati <BuildIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Naocale" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Naocale <svg style={{marginLeft:'auto'}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16"><path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z"/></svg></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Mjerni instrumenti" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Mjerni instrumenti <SpeedIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/Preparati za lice" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>Preparati za lice <FaceRetouchingNaturalIcon style={{marginLeft:'auto'}}/></Link>
                <NavDropdown.Divider />
                <Link to="/Shop/Category/ostalo" style={{textDecoration:'none',color:'black',padding:'0.2vh',fontWeight:'400',display:'flex',fontSize:'14px'}}>ostalo <OtherHousesIcon style={{marginLeft:'auto'}}/></Link>
            </div>
            }
            </>
        )
    }

  return (
    <div style={{zIndex:'1',position:'static',width:'100%',overflow:'hidden',marginTop:'9vh'}}>
        {!isMobile  &&
            <div style={{height:'5vh',paddingLeft:'10%',marginBottom:'0vh',fontWeight:'700',display:'flex',position:'fixed',zIndex:'1',backgroundColor:'white',width:'100%'}}>
                <Nav>
                    {isShow &&
                        <NavDropdown
                        id="dropdown-no-caret"
                        noCaretp
                        show
                        menuVariant='#D0d1d2'
                        data-toggle="dropdown"
                        title={<p style={{color:'black',marginLeft:'1vh',marginBottom:'-2vh',paddingTop:'0.8vh',paddingLeft:'0.5vh'}}>Sve kategorije <WidgetsIcon/></p>}
                        style={{backgroundColor:'#3bace6',color:'black',borderRadius:'0px',paddingBottom:'-50vh',width:'20vh',height:'5vh',paddingLeft:'0vh',paddingTop:'-10vh'}}
                        >
                            <DropdownC />
                        </NavDropdown>
                    }
                    {!isShow &&
                        <NavDropdown
                        menuVariant='#D0d1d2'
                        noCaret
                        title={<p style={{color:'black',marginLeft:'1vh',marginBottom:'-2vh',paddingTop:'0.8vh',paddingLeft:'0.5vh'}}>Sve kategorije <WidgetsIcon/></p>}
                        style={{backgroundColor:'#3bace6',color:'black',borderRadius:'0px',paddingBottom:'-50vh',width:'20vh',height:'5vh',paddingLeft:'0vh',paddingTop:'-10vh'}}
                        id="dropdown-no-caret"
                        >
                            <DropdownC />
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
            <div style={{height:'78px',padding:'1.5vh',overflow:'scroll',fontWeight:'640',marginBottom:'0px',display:'flex',whiteSpace:'nowrap',position:'static',zIndex:'1',backgroundColor:'white'}}>
                {!state &&
                <>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to={'/Shop/Category/Maske za mobitele'} style={{textDecoration:'none',color:'black'}}>Maske za mobitele</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Pametni satovi' style={{textDecoration:'none',color:'black'}}>Pametni satovi</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Adapteri' style={{textDecoration:'none',color:'black'}}>Adapteri</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Racunarska oprema' style={{textDecoration:'none',color:'black'}}>Racunarska oprema</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Oprema za ribolov' style={{textDecoration:'none',color:'black'}}>Oprema za ribolov</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Oprema za lov' style={{textDecoration:'none',color:'black'}}>Oprema za lov</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Oprema za bicikliste' style={{textDecoration:'none',color:'black'}}>Oprema za bicikliste</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Memorijske kartice' style={{textDecoration:'none',color:'black'}}>Memorijske kartice</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Kamere' style={{textDecoration:'none',color:'black'}}>Kamere</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Oprema za automobile' style={{textDecoration:'none',color:'black'}}>Oprema za automobile</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Alati' style={{textDecoration:'none',color:'black'}}>Alati</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Naocale' style={{textDecoration:'none',color:'black'}}>Naoclae</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Mjerni instrumenti' style={{textDecoration:'none',color:'black'}}>Mjerni instrumenti</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Preparati za lice' style={{textDecoration:'none',color:'black'}}>Preparati za lice</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Ostalo' style={{textDecoration:'none',color:'black'}}>Ostalo</Link>
                    </div>
                </>
                }
                {state &&
                <>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to={'/Shop/Category/Maske za mobitele'} state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Maske za mobitele</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Pametni satovi' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Pametni satovi</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Adapteri' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Adapteri</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Racunarska oprema' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Racunarska oprema</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Oprema za ribolov' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Oprema za ribolov</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Oprema za lov' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Oprema za lov</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Oprema za bicikliste' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Oprema za bicikliste</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Memorijske kartice' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Memorijske kartice</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Kamere' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Kamere</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Oprema za automobile' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Oprema za automobile</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Alati' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Alati</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Naocale' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Naoclae</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Mjerni instrumenti' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Mjerni instrumenti</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Preparati za lice' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Preparati za lice</Link>
                    </div>
                    <div style={{width:'300px',marginRight:'2vh',marginTop:'21px'}}>
                        <Link to='/Shop/Category/Ostalo' state={{ email:state && state.email }}  style={{textDecoration:'none',color:'black'}}>Ostalo</Link>
                    </div>
                </>
                }
            </div>
        }
    </div>
  )
}
