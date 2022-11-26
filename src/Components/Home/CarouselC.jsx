import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import carouselImg from '../../Img/Home/carousel.jpg'
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

export const CarouselC = () => {
    const isMobile = window.innerWidth <= 500;

  return (
    <div>
    <Carousel style={{zIndex:'0'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImg}
          alt="First slide"
          height={isMobile ? '240px' : '620px'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImg}
          alt="Second slide"
          height={isMobile ? '240px' : '620px'}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImg}
          alt="Third slide"
          height={isMobile ? '240px' : '620px'}
        />

      </Carousel.Item>
    </Carousel>
    </div>
  )
}
