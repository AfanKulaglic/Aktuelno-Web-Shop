import React from 'react'
import Item1 from '../../Img/logoWT.png'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

export const UnderCarouselC = () => {
  const isMobile = window.innerWidth <= 500;

  return (
    <div style={{paddingLeft:isMobile ? '2%' : '25%',paddingTop:'1vh',backgroundColor:'#ebebeb',paddingBottom:'1vh',display:'flex',overflow:'hidden'}}>
      <div style={{display:'flex',marginRight:'8vh'}}>
        <img alt='i1' src={Item1} width={isMobile? '60px' : '90px'} height={isMobile? '60px' : '90px'} style={{marginTop:isMobile? '3vh' : '0px'}} />
        <p style={{marginTop:'3vh',fontWeight:'500',fontSize:'20px'}}>Aktuelni proizvodi</p>
      </div>
      <div style={{display:'flex',marginRight:'8vh'}}>
        <ForwardToInboxIcon style={{fontSize:isMobile? "7vh" : "8vh",marginTop:isMobile? '20px' : '0px'}}/>
        <p style={{marginTop:'3vh',fontWeight:'500',fontSize:'20px'}}>Aktuelni proizvodi</p>
      </div>
      <div style={{display:'flex',marginRight:'8vh'}}>
        <LocalGroceryStoreIcon style={{fontSize:"8vh"}}/>
        <p style={{marginTop:'3vh',fontWeight:'500',fontSize:'20px'}}>Aktuelni proizvodi</p>
      </div>
      <div style={{display:'flex',marginRight:'8vh'}}>
        <StoreMallDirectoryIcon style={{fontSize:"8vh"}}/>
        <p style={{marginTop:'3vh',fontWeight:'500',fontSize:'20px'}}>Aktuelni proizvodi</p>
      </div>
    </div>
  )
}
