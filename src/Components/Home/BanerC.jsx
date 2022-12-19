import React from 'react'
import { Container } from 'react-bootstrap'
import baner from '../../Img/Home/baner.png'
import banerMobile from '../../Img/Home/banerMobile.png'

export const BanerC = () => {
    const isMobile = window.innerWidth <= 500;

  return (
    <div style={{marginTop:'3vh',marginBottom:'3vh'}}>
            {isMobile &&
                <img src={banerMobile} width='100%' />
            }
            {!isMobile &&
                <img src={baner} width='100%'/>
            }
    </div>
  )
}
